/* eslint-disable prefer-template */
/* eslint-disable no-bitwise */
/* eslint-disable no-undef */
import core from "@actions/core";

(async () => {
  const { GIT_COMMITTER_EMAIL, GIT_COMMITTER_NAME, GITHUB_TOKEN, NPM_TOKEN } = process.env;

  if (!GITHUB_TOKEN || !GIT_COMMITTER_NAME || !GIT_COMMITTER_EMAIL) {
    throw new Error("GIT_COMMITTER_EMAIL, GITHUB_TOKEN and GIT_COMMITTER_NAME must be set");
  }

  const repoAuthedUrl = `https://${GITHUB_TOKEN}@github.com/Growth-UI/Growth-UI-Native`;
  const repoPublicUrl = "https://github.com/Growth-UI/Growth-UI-Native";

  await $`git remote set-url origin ${repoAuthedUrl}`;
  await $`git config user.email "${GIT_COMMITTER_EMAIL}"`;
  await $`git config user.name "${GIT_COMMITTER_NAME}"`;

  // Commits analysis
  const semanticTagPattern = /^(v?)(\d+)\.(\d+)\.(\d+)$/;
  const releaseSeverityOrder = ["major", "minor", "patch"];
  const semanticRules = [
    {
      group: "🚀  Features",
      releaseType: "minor",
      prefixes: ["feat", "style"],
    },
    {
      group: "🐛  Fixes",
      releaseType: "patch",
      prefixes: ["fix"],
    },
    {
      group: "🏠  Internal",
      releaseType: "patch",
      prefixes: ["perf", "refactor"],
    },
    {
      group: "📝  Documentation",
      releaseType: "patch",
      prefixes: ["docs"],
    },
    {
      group: "💥  BREAKING CHANGES",
      releaseType: "major",
      keywords: ["BREAKING CHANGE", "BREAKING CHANGES"],
    },
  ];

  const tags = (await $`git tag -l --sort=-v:refname`)
    .toString()
    .split("\n")
    .map((tag) => tag.trim());
  const lastTag = tags.find((tag) => semanticTagPattern.test(tag));

  const newCommits = (
    lastTag
      ? await $`git log --format=+++%s__%b__%h__%H ${await $`git rev-list -1 ${lastTag}`}..HEAD`
      : await $`git log --format=+++%s__%b__%h__%H HEAD`
  )
    .toString()
    .split("+++")
    .filter(Boolean)
    .map((msg) => {
      const [subj, body, short, hash] = msg.split("__").map((raw) => raw.trim());
      return { subj, body, short, hash };
    });

  const semanticChanges = newCommits.reduce((acc, { subj, body, short, hash }) => {
    semanticRules.forEach(({ group, releaseType, prefixes, keywords }) => {
      const prefixMatcher = prefixes && new RegExp(`^(${prefixes.join("|")})(\\(\\w+\\))?:\\s.+$`);

      const keywordsMatcher = keywords && new RegExp(`(${keywords.join("|")}):\\s(.+)`);
      const change = subj.match(prefixMatcher)?.[0] || body.match(keywordsMatcher)?.[2];

      if (change) {
        acc.push({
          group,
          releaseType,
          change,
          subj,
          body,
          short,
          hash,
        });
      }
    });

    return acc;
  }, []);

  console.log("semanticChanges=", semanticChanges);

  const nextReleaseType = releaseSeverityOrder.find((type) =>
    semanticChanges.find(({ releaseType }) => type === releaseType)
  );

  if (!nextReleaseType) {
    core.setFailed("No semantic changes - no semantic release.");
  }

  console.log("nextReleaseType=", nextReleaseType);

  const nextVersion = ((lastTag = "1.0.0", releaseType) => {
    const [, , c1, c2, c3] = semanticTagPattern.exec(lastTag);

    if (releaseType === "major") {
      return `${-~c1}.0.0`;
    }
    if (releaseType === "minor") {
      return `${c1}.${-~c2}.0`;
    }
    if (releaseType === "patch") {
      return `${c1}.${c2}.${-~c3}`;
    }

    return lastTag;
  })(lastTag, nextReleaseType);

  const nextTag = `v${nextVersion}`;
  console.log("nextTag=", nextTag);

  // Generate release notes
  const releaseDiffRef = `## [${nextVersion}](${repoPublicUrl}/compare/${lastTag}...${nextTag}) (${new Date()
    .toISOString()
    .slice(0, 10)})`;
  const releaseDetails = Object.values(
    semanticChanges.reduce((acc, { group, change, short, hash }) => {
      const { commits } = acc[group] || (acc[group] = { commits: [], group });
      const commitRef = `* ${change} ([${short}](${repoPublicUrl}/commit/${hash}))`;

      commits.push(commitRef);

      return acc;
    }, {})
  )
    .map(
      ({ group, commits }) => `
### ${group}
${commits.join("\n")}`
    )
    .join("\n");

  const releaseNotes = releaseDiffRef + "\n" + releaseDetails + "\n";

  //  Update package version
  if (lastTag !== nextVersion) {
    try {
      await $`yarn run version --no-git-tag-version --new-version ${nextReleaseType}`;
      await $`yarn run build`;
      await $`npm config set @growth-ui:registry https://registry.npmjs.org`;
      await $`npm config set //registry.npmjs.org/:_authToken=${NPM_TOKEN}`;
      await $`================================ Publishing ================================`;
      await $`npm publish --access public ./packages/growth-ui-native/dist`;
      await $`=================================== Done ===================================`;
    } catch (err) {
      core.setFailed(err);
    }
  }

  // Update CHANGELOG.md
  await $`echo ${releaseNotes}"\n$(cat ./CHANGELOG.md)" > ./CHANGELOG.md`;

  // Git release
  const releaseMessage = `chore(release): ${nextVersion} [skip ci]`;

  try {
    await $`git add -A .`;
    await $`git commit -am ${releaseMessage}`;
    await $`git tag -a ${nextTag} HEAD -m ${releaseMessage}`;
    await $`git push --follow-tags origin HEAD:refs/heads/main`;
  } catch (err) {
    core.setFailed(err);
  }
})();

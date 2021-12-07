import BasicUsageExample from "../../md/BasicUsageExample";
import CodeSnippet from "../../components/CodeSnippet";
import Context from "../../components/Context";
import InstallationExample from "../../md/InstallationExample";
import Layout from "../../components/PageLayout";
import React, { useContext } from "react";
import ThemeProviderExample from "../../md/ThemeProviderExample";
import useTranslation from "next-translate/useTranslation";
import { Checkbox, Grid, Heading, Icon, Paragraph, Spacer } from "growth-ui-react";

const IntroductionPage = () => {
  const { darkMode, setDarkMode } = useContext(Context);
  const { t } = useTranslation();

  const onToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Layout>
      <Grid>
        <Grid.Row horizontalAlign="center">
          <Grid.Col minimobile={15} width={10}>
            <Heading textAlign="center">
              {t("introduction:heading")}
              <Spacer size={15} />
              <Heading.Content>{t("introduction:subheading")}</Heading.Content>
            </Heading>

            <Spacer size={100} />

            <Heading as="h5" textAlign="center">
              {t("introduction:sponsors")}
            </Heading>

            <Spacer size={100} />

            <Icon color="red-800" name="npm" width={50} height={50} />
            <Paragraph>{t("introduction:npm.shortInstruction")}</Paragraph>
            <Spacer size={15} />
            <CodeSnippet markdown={InstallationExample} />
            <Spacer size={15} />
            <Paragraph>{t("introduction:npm.note")}</Paragraph>

            <Spacer size={50} />

            <Heading as="h2" id="basicUsage">
              {t("introduction:basicUsage.heading")}
            </Heading>
            <Spacer size={15} />
            <CodeSnippet markdown={BasicUsageExample} />

            <Spacer size={100} />

            <Grid.Row verticalAlign="middle">
              <Heading as="h3" style={{ width: "fit-content", margin: 0 }}>
                {t("introduction:darkMode.heading")}
              </Heading>
              <Spacer size={15} />
              <Checkbox toggle checked={darkMode} onChange={onToggle}>
                <Icon name={darkMode ? "sun" : "partly sunny"} />
              </Checkbox>
            </Grid.Row>
            <Spacer size={10} />
            <Paragraph>{t("introduction:darkMode.description")}</Paragraph>
            <Spacer size={20} />
            <CodeSnippet padded markdown={ThemeProviderExample} />
          </Grid.Col>

          <Grid.Col only={["computer", "widescreen"]} width={4}>
            {/* ComponentSidebar */}
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </Layout>
  );
};

export default IntroductionPage;

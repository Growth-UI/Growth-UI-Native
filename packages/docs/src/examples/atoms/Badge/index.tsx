import ComponentExample from "../../../components/ComponentDoc/ComponentExample";
import React from "react";
import useTranslation from "next-translate/useTranslation";

const BadgeExamples = () => {
  const { t } = useTranslation();

  return (
    <>
      <ComponentExample
        id={t("examples:badge.badge.id")}
        title={t("examples:badge.badge.title")}
        description={t("examples:badge.badge.description")}
        examplePath="atoms/Badge/BadgeExampleBadge"
      />

      <ComponentExample
        id={t("examples:badge.color.id")}
        title={t("examples:badge.color.title")}
        description={t("examples:badge.color.description")}
        examplePath="atoms/Badge/BadgeExampleColor"
      />

      <ComponentExample
        id={t("examples:badge.dot.id")}
        title={t("examples:badge.dot.title")}
        description={t("examples:badge.dot.description")}
        examplePath="atoms/Badge/BadgeExampleDot"
      />

      <ComponentExample
        id={t("examples:badge.direction.id")}
        title={t("examples:badge.direction.title")}
        description={t("examples:badge.direction.description")}
        examplePath="atoms/Badge/BadgeExampleDirection"
      />

      <ComponentExample
        id={t("examples:badge.max.id")}
        title={t("examples:badge.max.title")}
        description={t("examples:badge.max.description")}
        examplePath="atoms/Badge/BadgeExampleMax"
      />

      <ComponentExample
        id={t("examples:badge.overlap.id")}
        title={t("examples:badge.overlap.title")}
        description={t("examples:badge.overlap.description")}
        examplePath="atoms/Badge/BadgeExampleOverlap"
      />

      <ComponentExample
        id={t("examples:badge.overlapColor.id")}
        title={t("examples:badge.overlapColor.title")}
        description={t("examples:badge.overlapColor.description")}
        examplePath="atoms/Badge/BadgeExampleOverlapColor"
      />

      <ComponentExample
        id={t("examples:badge.textColor.id")}
        title={t("examples:badge.textColor.title")}
        description={t("examples:badge.textColor.description")}
        examplePath="atoms/Badge/BadgeExampleTextColor"
      />
    </>
  );
};

export default BadgeExamples;

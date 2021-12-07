import ComponentExample from "../../../components/ComponentDoc/ComponentExample";
import React from "react";
import useTranslation from "next-translate/useTranslation";

const TypographyExamples = () => {
  const { t } = useTranslation();

  return (
    <>
      <ComponentExample
        id={t("examples:typography.typography.id")}
        title={t("examples:typography.typography.title")}
        description={t("examples:typography.typography.description")}
        examplePath="atoms/Typography/TypographyExampleTypography"
      />

      <ComponentExample
        id={t("examples:typography.color.id")}
        title={t("examples:typography.color.title")}
        description={t("examples:typography.color.description")}
        examplePath="atoms/Typography/TypographyExampleColor"
      />
    </>
  );
};

export default TypographyExamples;

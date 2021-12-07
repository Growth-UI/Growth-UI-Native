import ComponentExample from "../../../components/ComponentDoc/ComponentExample";
import React from "react";
import useTranslation from "next-translate/useTranslation";

const SpacerExamples = () => {
  const { t } = useTranslation();

  return (
    <>
      <ComponentExample
        id={t("examples:spacer.spacer.id")}
        title={t("examples:spacer.spacer.title")}
        description={t("examples:spacer.spacer.description")}
        examplePath="atoms/Spacer/SpacerExampleSpacer"
      />

      <ComponentExample
        id={t("examples:spacer.axis.id")}
        title={t("examples:spacer.axis.title")}
        description={t("examples:spacer.axis.description")}
        examplePath="atoms/Spacer/SpacerExampleAxis"
      />
    </>
  );
};

export default SpacerExamples;

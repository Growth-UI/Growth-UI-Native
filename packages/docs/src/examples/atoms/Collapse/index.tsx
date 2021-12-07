import React from "react";
import useTranslation from "next-translate/useTranslation";
import ComponentExample from "../../../components/ComponentDoc/ComponentExample";

const CollapseExamples = () => {
  const { t } = useTranslation();

  return (
    <>
      <ComponentExample
        id={t("examples:collapse.collapse.id")}
        title={t("examples:collapse.collapse.title")}
        description={t("examples:collapse.collapse.description")}
        examplePath="atoms/Collapse/CollapseExampleCollapse"
      />
    </>
  );
};

export default CollapseExamples;

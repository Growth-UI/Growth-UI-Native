import ComponentExample from "../../../components/ComponentDoc/ComponentExample";
import React from "react";
import useTranslation from "next-translate/useTranslation";

const BoxExamples = () => {
  const { t } = useTranslation();

  return (
    <>
      <ComponentExample
        id={t("examples:box.box.id")}
        title={t("examples:box.box.title")}
        description={t("examples:box.box.description")}
        examplePath="atoms/Box/BoxExampleBox"
      />
    </>
  );
};

export default BoxExamples;

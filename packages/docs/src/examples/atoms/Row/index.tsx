import ComponentExample from "../../../components/ComponentDoc/ComponentExample";
import React from "react";
import useTranslation from "next-translate/useTranslation";

const RowExamples = () => {
  const { t } = useTranslation();

  return (
    <>
      <ComponentExample
        id={t("examples:row.row.id")}
        title={t("examples:row.row.title")}
        description={t("examples:row.row.description")}
        examplePath="atoms/Row/RowExampleRow"
      />
    </>
  );
};

export default RowExamples;

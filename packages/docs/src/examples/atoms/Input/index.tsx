import ComponentExample from "../../../components/ComponentDoc/ComponentExample";
import React from "react";
import useTranslation from "next-translate/useTranslation";

const InputExamples = () => {
  const { t } = useTranslation();

  return (
    <>
      <ComponentExample
        id={t("examples:input.input.id")}
        title={t("examples:input.input.title")}
        description={t("examples:input.input.description")}
        examplePath="atoms/Input/InputExampleInput"
      />

      <ComponentExample
        id={t("examples:input.labeled.id")}
        title={t("examples:input.labeled.title")}
        description={t("examples:input.labeled.description")}
        examplePath="atoms/Input/InputExampleLabeled"
      />

      <ComponentExample
        id={t("examples:input.disabled.id")}
        title={t("examples:input.disabled.title")}
        description={t("examples:input.disabled.description")}
        examplePath="atoms/Input/InputExampleDisabled"
      />

      <ComponentExample
        id={t("examples:input.adornment.id")}
        title={t("examples:input.adornment.title")}
        description={t("examples:input.adornment.description")}
        examplePath="atoms/Input/InputExampleAdornment"
      />

      <ComponentExample
        id={t("examples:input.icon.id")}
        title={t("examples:input.icon.title")}
        description={t("examples:input.icon.description")}
        examplePath="atoms/Input/InputExampleIcon"
      />

      <ComponentExample
        id={t("examples:input.error.id")}
        title={t("examples:input.error.title")}
        description={t("examples:input.error.description")}
        examplePath="atoms/Input/InputExampleError"
      />
    </>
  );
};

export default InputExamples;

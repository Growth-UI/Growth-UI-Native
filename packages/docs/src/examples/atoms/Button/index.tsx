import ComponentExample from "../../../components/ComponentDoc/ComponentExample";
import React from "react";
import useTranslation from "next-translate/useTranslation";

const ButtonExamples = () => {
  const { t } = useTranslation();

  return (
    <>
      <ComponentExample
        id={t("examples:button.button.id")}
        title={t("examples:button.button.title")}
        description={t("examples:button.button.description")}
        examplePath="atoms/Button/ButtonExampleButton"
      />

      <ComponentExample
        id={t("examples:button.color.id")}
        title={t("examples:button.color.title")}
        description={t("examples:button.color.description")}
        examplePath="atoms/Button/ButtonExampleColor"
      />

      <ComponentExample
        id={t("examples:button.loading.id")}
        title={t("examples:button.loading.title")}
        description={t("examples:button.loading.description")}
        examplePath="atoms/Button/ButtonExampleLoading"
      />

      <ComponentExample
        id={t("examples:button.icon.id")}
        title={t("examples:button.icon.title")}
        description={t("examples:button.icon.description")}
        examplePath="atoms/Button/ButtonExampleIcon"
      />

      <ComponentExample
        id={t("examples:button.disabled.id")}
        title={t("examples:button.disabled.title")}
        description={t("examples:button.disabled.description")}
        examplePath="atoms/Button/ButtonExampleDisabled"
      />

      <ComponentExample
        id={t("examples:button.basic.id")}
        title={t("examples:button.basic.title")}
        description={t("examples:button.basic.description")}
        examplePath="atoms/Button/ButtonExampleBasic"
      />

      <ComponentExample
        id={t("examples:button.group.id")}
        title={t("examples:button.group.title")}
        description={t("examples:button.group.description")}
        examplePath="atoms/Button/ButtonExampleGroup"
      />
    </>
  );
};

export default ButtonExamples;

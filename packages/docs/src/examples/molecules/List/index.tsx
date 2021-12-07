import ComponentExample from "../../../components/ComponentDoc/ComponentExample";
import React from "react";
import useTranslation from "next-translate/useTranslation";

const ListExamples = () => {
  const { t } = useTranslation();

  return (
    <>
      <ComponentExample
        id={t("examples:list.list.id")}
        title={t("examples:list.list.title")}
        description={t("examples:list.list.description")}
        examplePath="molecules/List/ListExampleList"
      />

      <ComponentExample
        id={t("examples:list.active.id")}
        title={t("examples:list.active.title")}
        description={t("examples:list.active.description")}
        examplePath="molecules/List/ListExampleActive"
      />

      <ComponentExample
        id={t("examples:list.padded.id")}
        title={t("examples:list.padded.title")}
        description={t("examples:list.padded.description")}
        examplePath="molecules/List/ListExamplePadded"
      />

      <ComponentExample
        id={t("examples:list.verticalAlign.id")}
        title={t("examples:list.verticalAlign.title")}
        description={t("examples:list.verticalAlign.description")}
        examplePath="molecules/List/ListExampleVerticalAlign"
      />

      <ComponentExample
        id={t("examples:list.divided.id")}
        title={t("examples:list.divided.title")}
        description={t("examples:list.divided.description")}
        examplePath="molecules/List/ListExampleDivided"
      />

      <ComponentExample
        id={t("examples:list.ripple.id")}
        title={t("examples:list.ripple.title")}
        description={t("examples:list.ripple.description")}
        examplePath="molecules/List/ListExampleRipple"
      />

      <ComponentExample
        id={t("examples:list.collapse.id")}
        title={t("examples:list.collapse.title")}
        description={t("examples:list.collapse.description")}
        examplePath="molecules/List/ListExampleCollapse"
      />

      <ComponentExample
        id={t("examples:list.swipeable.id")}
        title={t("examples:list.swipeable.title")}
        description={t("examples:list.swipeable.description")}
        examplePath="molecules/List/ListExampleSwipeable"
      />

      <ComponentExample
        id={t("examples:list.variations.id")}
        title={t("examples:list.variations.title")}
        description={t("examples:list.variations.description")}
        examplePath="molecules/List/ListExampleVariations"
      />
    </>
  );
};

export default ListExamples;

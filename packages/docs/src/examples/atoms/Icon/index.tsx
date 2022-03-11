import IconSearch from "../../../components/IconSearch";
import React from "react";
import useTranslation from "next-translate/useTranslation";
import ComponentExample from "../../../components/ComponentDoc/ComponentExample";

const IconExamples = () => {
  const { t } = useTranslation();

  return (
    <>
      <IconSearch />

      <ComponentExample
        id={t("examples:icon.size.id")}
        title={t("examples:icon.size.title")}
        description={t("examples:icon.size.description")}
        examplePath="atoms/Icon/IconExampleSize"
      />

      <ComponentExample
        id={t("examples:icon.color.id")}
        title={t("examples:icon.color.title")}
        description={t("examples:icon.color.description")}
        examplePath="atoms/Icon/IconExampleColor"
      />

      <ComponentExample
        id={t("examples:icon.rotated.id")}
        title={t("examples:icon.rotated.title")}
        description={t("examples:icon.rotated.description")}
        examplePath="atoms/Icon/IconExampleRotated"
      />

      <ComponentExample
        id={t("examples:icon.flipped.id")}
        title={t("examples:icon.flipped.title")}
        description={t("examples:icon.flipped.description")}
        examplePath="atoms/Icon/IconExampleFlipped"
      />

      <ComponentExample
        id={t("examples:icon.inverted.id")}
        title={t("examples:icon.inverted.title")}
        description={t("examples:icon.inverted.description")}
        examplePath="atoms/Icon/IconExampleInverted"
      />
    </>
  );
};

export default IconExamples;

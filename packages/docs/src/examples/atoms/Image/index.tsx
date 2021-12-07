import ComponentExample from "../../../components/ComponentDoc/ComponentExample";
import React from "react";
import useTranslation from "next-translate/useTranslation";

const ImageExamples = () => {
  const { t } = useTranslation();

  return (
    <>
      <ComponentExample
        id={t("examples:image.image.id")}
        title={t("examples:image.image.title")}
        description={t("examples:image.image.description")}
        examplePath="atoms/Image/ImageExampleImage"
      />

      <ComponentExample
        id={t("examples:image.hidden.id")}
        title={t("examples:image.hidden.title")}
        description={t("examples:image.hidden.description")}
        examplePath="atoms/Image/ImageExampleHidden"
      />

      <ComponentExample
        id={t("examples:image.rounded.id")}
        title={t("examples:image.rounded.title")}
        description={t("examples:image.rounded.description")}
        examplePath="atoms/Image/ImageExampleRounded"
      />

      <ComponentExample
        id={t("examples:image.circular.id")}
        title={t("examples:image.circular.title")}
        description={t("examples:image.circular.description")}
        examplePath="atoms/Image/ImageExampleCircular"
      />

      <ComponentExample
        id={t("examples:image.centered.id")}
        title={t("examples:image.centered.title")}
        description={t("examples:image.centered.description")}
        examplePath="atoms/Image/ImageExampleCentered"
      />

      <ComponentExample
        id={t("examples:image.bordered.id")}
        title={t("examples:image.bordered.title")}
        description={t("examples:image.bordered.description")}
        examplePath="atoms/Image/ImageExampleBordered"
      />

      <ComponentExample
        id={t("examples:image.lazy.id")}
        title={t("examples:image.lazy.title")}
        description={t("examples:image.lazy.description")}
        examplePath="atoms/Image/ImageExampleLazy"
      />

      <ComponentExample
        id={t("examples:image.autoHeight.id")}
        title={t("examples:image.autoHeight.title")}
        description={t("examples:image.autoHeight.description")}
        examplePath="atoms/Image/ImageExampleAutoHeight"
      />

      <ComponentExample
        id={t("examples:image.percentage.id")}
        title={t("examples:image.percentage.title")}
        description={t("examples:image.percentage.description")}
        examplePath="atoms/Image/ImageExamplePercentage"
      />

      <ComponentExample
        id={t("examples:image.progressive.id")}
        title={t("examples:image.progressive.title")}
        description={t("examples:image.progressive.description")}
        examplePath="atoms/Image/ImageExampleProgressive"
      />
    </>
  );
};

export default ImageExamples;

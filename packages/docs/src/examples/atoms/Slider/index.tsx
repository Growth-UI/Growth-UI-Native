import ComponentExample from "../../../components/ComponentDoc/ComponentExample";
import React from "react";
import useTranslation from "next-translate/useTranslation";

const SliderExamples = () => {
  const { t } = useTranslation();

  return (
    <>
      <ComponentExample
        id={t("examples:slider.slider.id")}
        title={t("examples:slider.slider.title")}
        description={t("examples:slider.slider.description")}
        examplePath="atoms/Slider/SliderExampleSlider"
      />

      <ComponentExample
        id={t("examples:slider.toggle.id")}
        title={t("examples:slider.toggle.title")}
        description={t("examples:slider.toggle.description")}
        examplePath="atoms/Slider/SliderExampleToggle"
      />

      <ComponentExample
        id={t("examples:slider.color.id")}
        title={t("examples:slider.color.title")}
        description={t("examples:slider.color.description")}
        examplePath="atoms/Slider/SliderExampleColor"
      />

      <ComponentExample
        id={t("examples:slider.state.id")}
        title={t("examples:slider.state.title")}
        description={t("examples:slider.state.description")}
        examplePath="atoms/Slider/SliderExampleState"
      />
    </>
  );
};

export default SliderExamples;

import ComponentExample from "../../../components/ComponentDoc/ComponentExample";
import React from "react";
import useTranslation from "next-translate/useTranslation";

const ChipExamples = () => {
  const { t } = useTranslation();

  return (
    <>
      <ComponentExample
        id={t("examples:chip.chip.id")}
        title={t("examples:chip.chip.title")}
        description={t("examples:chip.chip.description")}
        examplePath="atoms/Chip/ChipExampleChip"
      />

      <ComponentExample
        id={t("examples:chip.circular.id")}
        title={t("examples:chip.circular.title")}
        description={t("examples:chip.circular.description")}
        examplePath="atoms/Chip/ChipExampleCircular"
      />

      <ComponentExample
        id={t("examples:chip.icon.id")}
        title={t("examples:chip.icon.title")}
        description={t("examples:chip.icon.description")}
        examplePath="atoms/Chip/ChipExampleIcon"
      />

      <ComponentExample
        id={t("examples:chip.image.id")}
        title={t("examples:chip.image.title")}
        description={t("examples:chip.image.description")}
        examplePath="atoms/Chip/ChipExampleImage"
      />

      <ComponentExample
        id={t("examples:chip.outlined.id")}
        title={t("examples:chip.outlined.title")}
        description={t("examples:chip.outlined.description")}
        examplePath="atoms/Chip/ChipExampleOutlined"
      />

      <ComponentExample
        id={t("examples:chip.size.id")}
        title={t("examples:chip.size.title")}
        description={t("examples:chip.size.description")}
        examplePath="atoms/Chip/ChipExampleSize"
      />

      <ComponentExample
        id={t("examples:chip.color.id")}
        title={t("examples:chip.color.title")}
        description={t("examples:chip.color.description")}
        examplePath="atoms/Chip/ChipExampleColor"
      />
    </>
  );
};

export default ChipExamples;

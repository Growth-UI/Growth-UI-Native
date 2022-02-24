import ComponentExample from "../../../components/ComponentDoc/ComponentExample";
import React from "react";
import useTranslation from "next-translate/useTranslation";

const AvatarExamples = () => {
  const { t } = useTranslation();

  return (
    <>
      <ComponentExample
        id={t("examples:avatar.avatar.id")}
        title={t("examples:avatar.avatar.title")}
        description={t("examples:avatar.avatar.description")}
        examplePath="atoms/Avatar/AvatarExampleAvatar"
      />

      <ComponentExample
        id={t("examples:avatar.group.id")}
        title={t("examples:avatar.group.title")}
        description={t("examples:avatar.group.description")}
        examplePath="atoms/Avatar/AvatarExampleGroup"
      />
    </>
  );
};

export default AvatarExamples;

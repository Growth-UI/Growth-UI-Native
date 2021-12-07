import ComponentExample from "../../../components/ComponentDoc/ComponentExample";
import React from "react";
import useTranslation from "next-translate/useTranslation";

const CommentExamples = () => {
  const { t } = useTranslation();

  return (
    <>
      <ComponentExample
        id={t("examples:comment.comment.id")}
        title={t("examples:comment.comment.title")}
        description={t("examples:comment.comment.description")}
        examplePath="molecules/Comment/CommentExampleComment"
      />

      <ComponentExample
        id={t("examples:comment.collapsed.id")}
        title={t("examples:comment.collapsed.title")}
        description={t("examples:comment.collapsed.description")}
        examplePath="molecules/Comment/CommentExampleCollapsed"
      />
    </>
  );
};

export default CommentExamples;

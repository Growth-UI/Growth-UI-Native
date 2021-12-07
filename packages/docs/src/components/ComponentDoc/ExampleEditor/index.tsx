import CodeEditor from "../../../components/CodeEditor";
import ComponentDocContext from "../ComponentDocContext";
import React, { useContext } from "react";

const ExampleEditor = () => {
  const { sourceCode } = useContext(ComponentDocContext);

  return <CodeEditor value={sourceCode} />;
};

export default ExampleEditor;

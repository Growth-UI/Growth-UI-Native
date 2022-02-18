import ComponentControls from "../ComponentControls";
import ComponentDemo from "./ComponentDemo";
import ComponentDocContext from "../ComponentDocContext";
import ComponentExampleTitle from "./ComponentExampleTitle";
import ExampleEditor from "../ExampleEditor";
import React, { useState } from "react";
import styled from "styled-components";
import { getExampleSource } from "../../../utils";
import { Spacer } from "@growth-ui/react";

const Wrapper = styled.div`
  width: 100%;
  margin: 50px 0px;
`;

type Props = {
  description?: string;
  examplePath: string;
  id: string;
  title?: string;
};

const ComponentExample = (props: Props) => {
  const { examplePath } = props;
  const [showCode, setShowCode] = useState(false);
  const sourceCode = getExampleSource(examplePath);

  const handleShowCodeClick = () => setShowCode(!showCode);

  return (
    <Wrapper>
      <ComponentDocContext.Provider value={{ ...props, sourceCode, showCode }}>
        <ComponentExampleTitle />
        <Spacer size={50} />
        <ComponentDemo examplePath={examplePath} />
        <Spacer size={20} />
        <ComponentControls onShowCode={handleShowCodeClick} showCode={showCode} />
        <Spacer size={20} />
        {showCode && <ExampleEditor />}
      </ComponentDocContext.Provider>
    </Wrapper>
  );
};

export default ComponentExample;

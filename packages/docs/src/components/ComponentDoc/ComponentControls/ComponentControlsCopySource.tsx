import ComponentDocContext from "../ComponentDocContext";
import copy from "copy-to-clipboard";
import React, { useContext, useState } from "react";
import { Container, Icon } from "@growth-ui/react";

const ComponentControlsCopySource = () => {
  const [copied, setCopied] = useState(false);
  const { sourceCode } = useContext(ComponentDocContext);

  const handleCopy = () => {
    copy(sourceCode);
    setCopied(true);
  };

  return (
    <Container onClick={handleCopy}>
      <Icon cursor="pointer" color={copied ? "green-600" : undefined} name="file copy" />
    </Container>
  );
};

export default ComponentControlsCopySource;

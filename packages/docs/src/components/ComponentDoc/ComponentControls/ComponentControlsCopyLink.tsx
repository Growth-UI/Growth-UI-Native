import ComponentDocContext from "../ComponentDocContext";
import copy from "copy-to-clipboard";
import React, { useContext, useState } from "react";
import { Container, Icon } from "@growth-ui/react";
import { scrollToAnchor } from "../../../utils";
import { useRouter } from "next/router";

const ComponentControlsCopyLink = () => {
  const { id } = useContext(ComponentDocContext);
  const [copied, setCopied] = useState(false);
  const router = useRouter();

  const handleCopy = () => {
    const hashLink = `${window.location.href.replace(window.location.hash, "")}#${id}`;

    router.push(hashLink);
    scrollToAnchor();
    copy(hashLink);
    setCopied(true);
  };

  return (
    <Container onClick={handleCopy}>
      <Icon cursor="pointer" color={copied ? "green-600" : undefined} name="link" />
    </Container>
  );
};

export default ComponentControlsCopyLink;

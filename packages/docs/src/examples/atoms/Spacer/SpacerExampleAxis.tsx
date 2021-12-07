import Button from "@growth-ui/native/atoms/Button";
import React from "react";
import Row from "@growth-ui/native/atoms/Row";
import Spacer from "@growth-ui/native/atoms/Spacer";

const SpacerExampleSpacer = () => (
  <Row>
    <Button>Button</Button>
    <Spacer axis="horizontal" size={30} />
    <Button basic>Button</Button>
  </Row>
);

export default SpacerExampleSpacer;

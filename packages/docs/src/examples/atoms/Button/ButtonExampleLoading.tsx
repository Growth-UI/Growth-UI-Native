import Button from "@growth-ui/native/atoms/Button";
import React from "react";
import Row from "@growth-ui/native/atoms/Row";

const ButtonExampleLoading = () => (
  <Row>
    <Button loading>Btn</Button>

    <Button basic loading>
      Button
    </Button>

    <Button loading color="primary">
      Button!!!
    </Button>

    <Button loading color="secondary">
      Hello World
    </Button>

    <Button loading color="red-600">
      Button With Long Text
    </Button>
  </Row>
);

export default ButtonExampleLoading;

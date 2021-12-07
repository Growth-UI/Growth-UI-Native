import Button from "@growth-ui/native/atoms/Button";
import ButtonGroup from "@growth-ui/native/atoms/ButtonGroup";
import React from "react";
import { View } from "react-native";

const ButtonExampleGroup = () => (
  <View>
    <ButtonGroup>
      <Button>Private</Button>
      <Button basic>Public</Button>
    </ButtonGroup>

    <ButtonGroup>
      <Button>Private</Button>
      <Button color="primary">Public</Button>
    </ButtonGroup>

    <ButtonGroup rounded>
      <Button basic>Private</Button>
      <Button color="primary">Public</Button>
    </ButtonGroup>

    <ButtonGroup>
      <Button basic>Private</Button>
      <Button>Friends</Button>
      <Button color="primary">Public</Button>
    </ButtonGroup>
  </View>
);

export default ButtonExampleGroup;

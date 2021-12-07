import Button from "@growth-ui/native/atoms/Button";
import React from "react";
import Spacer from "@growth-ui/native/atoms/Spacer";
import { View } from "react-native";

const SpacerExampleSpacer = () => (
  <View>
    <Button>Button</Button>
    <Spacer size={30} />
    <Button basic>Button</Button>
  </View>
);

export default SpacerExampleSpacer;

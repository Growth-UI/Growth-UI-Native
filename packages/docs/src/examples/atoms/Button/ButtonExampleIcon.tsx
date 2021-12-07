import Button from "@growth-ui/native/atoms/Button";
import React from "react";
import Spacer from "@growth-ui/native/atoms/Spacer";
import { View } from "react-native";

const ButtonExampleIcon = () => (
  <View>
    <Button icon={{ name: "settings" }} />
    <Spacer size={10} />
    <Button icon={{ name: "send" }}>Send</Button>
    <Spacer size={10} />
    <Button icon={{ name: "send" }} iconPosition="right">
      Send
    </Button>
    <Spacer size={10} />
    <Button basic icon={{ name: "settings", color: "yellow-400" }} />
    <Spacer size={10} />
    <Button color="primary" icon={{ name: "star" }} />
    <Spacer size={10} />
    <Button color="pink-400" icon={{ name: "heart" }} />
  </View>
);

export default ButtonExampleIcon;

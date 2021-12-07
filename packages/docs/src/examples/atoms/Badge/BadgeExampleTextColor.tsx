import Badge from "@growth-ui/native/atoms/Badge";
import Icon from "@growth-ui/native/atoms/Icon";
import React from "react";
import Spacer from "@growth-ui/native/atoms/Spacer";
import { View } from "react-native";

const BadgeExampleTextColor = () => (
  <View>
    <Badge content={103} textColor="red-400">
      <Icon name="email" size={25} />
    </Badge>

    <Spacer size={30} />

    <Badge content={51} textColor="yellow-300">
      <Icon name="email" size={25} />
    </Badge>
  </View>
);

export default BadgeExampleTextColor;

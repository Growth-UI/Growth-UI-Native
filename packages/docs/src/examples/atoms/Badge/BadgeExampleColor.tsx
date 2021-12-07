import Badge from "@growth-ui/native/atoms/Badge";
import Icon from "@growth-ui/native/atoms/Icon";
import React from "react";
import Spacer from "@growth-ui/native/atoms/Spacer";
import { View } from "react-native";

const BadgeExampleColor = () => (
  <View>
    <Badge color="secondary" content={3}>
      <Icon name="email" size={25} />
    </Badge>

    <Spacer size={30} />

    <Badge color="yellow-500" content={7}>
      <Icon name="email" size={25} />
    </Badge>
  </View>
);

export default BadgeExampleColor;

import Badge from "@growth-ui/native/atoms/Badge";
import Icon from "@growth-ui/native/atoms/Icon";
import React from "react";
import Spacer from "@growth-ui/native/atoms/Spacer";
import { View } from "react-native";

const BadgeExampleMax = () => (
  <View>
    <Badge inline relaxed content={99}>
      <Icon name="email" size={25} />
    </Badge>

    <Spacer size={30} />

    <Badge inline relaxed content={100}>
      <Icon name="email" size={25} />
    </Badge>

    <Spacer size={30} />

    <Badge inline relaxed content={1010} max={999}>
      <Icon name="email" size={25} />
    </Badge>
  </View>
);

export default BadgeExampleMax;

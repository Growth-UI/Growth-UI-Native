import Badge from "@growth-ui/native/atoms/Badge";
import Icon from "@growth-ui/native/atoms/Icon";
import React from "react";
import { View } from "react-native";

const BadgeExampleBadge = () => (
  <View>
    <Badge content={3}>
      <Icon name="email" size={25} />
    </Badge>
  </View>
);

export default BadgeExampleBadge;

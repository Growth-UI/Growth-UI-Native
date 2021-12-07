import Badge from "@growth-ui/native/atoms/Badge";
import Icon from "@growth-ui/native/atoms/Icon";
import React from "react";
import Spacer from "@growth-ui/native/atoms/Spacer";
import { View } from "react-native";

const BadgeExampleOverlap = () => (
  <View>
    <Badge dot overlap>
      <Icon name="email" size={25} />
    </Badge>

    <Spacer size={30} />

    <Badge overlap content={51}>
      <Icon name="email" size={25} />
    </Badge>
  </View>
);

export default BadgeExampleOverlap;

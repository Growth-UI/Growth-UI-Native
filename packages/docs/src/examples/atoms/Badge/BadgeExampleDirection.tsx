import Badge from "@growth-ui/native/atoms/Badge";
import Icon from "@growth-ui/native/atoms/Icon";
import React from "react";
import Spacer from "@growth-ui/native/atoms/Spacer";
import { View } from "react-native";

const options = [
  {
    value: "top right",
  },
  {
    value: "top left",
  },
  {
    value: "bottom left",
  },
  {
    value: "bottom right",
  },
];

const BadgeExampleDirection = () => {
  return (
    <View>
      {options.map((option) => (
        <View key={option.value}>
          <Badge content={3} direction={option.value as any}>
            <Icon name="email" size={25} />
          </Badge>
          <Spacer size={30} />
        </View>
      ))}
    </View>
  );
};

export default BadgeExampleDirection;

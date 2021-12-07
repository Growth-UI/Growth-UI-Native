import Chip from "@growth-ui/native/atoms/Chip";
import React from "react";
import Spacer from "@growth-ui/native/atoms/Spacer";
import { View } from "react-native";

const colors = [
  "red-500",
  "yellow-600",
  "yellow-300",
  "green-300",
  "blue-300",
  "indigo-300",
  "purple-300",
];

const ChipExampleColor = () => (
  <View>
    {colors.map((color) => (
      <View key={color}>
        <Chip color={color as any} text={color} />
        <Spacer size={10} />
      </View>
    ))}
  </View>
);

export default ChipExampleColor;

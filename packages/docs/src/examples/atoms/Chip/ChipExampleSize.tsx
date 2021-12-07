import Chip from "@growth-ui/native/atoms/Chip";
import faker from "faker";
import React from "react";
import Spacer from "@growth-ui/native/atoms/Spacer";
import { View } from "react-native";

const sizes = ["mini", "tiny", "small", "medium", "large", "big", "huge", "massive"];

const ChipExampleSize = () => (
  <View>
    {sizes.map((size) => (
      <View key={size}>
        <Chip image={faker.image.animals()} size={size as any} text={size} />
        <Spacer size={10} />
      </View>
    ))}
  </View>
);

export default ChipExampleSize;

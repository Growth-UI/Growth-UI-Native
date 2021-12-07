import Chip from "@growth-ui/native/atoms/Chip";
import faker from "faker";
import React from "react";
import { View } from "react-native";

const ChipExampleImage = () => (
  <View>
    <Chip image={faker.image.animals()} text={faker.animal.bear()} />
  </View>
);

export default ChipExampleImage;

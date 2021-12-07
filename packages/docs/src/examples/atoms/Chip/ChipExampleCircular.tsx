import Chip from "@growth-ui/native/atoms/Chip";
import faker from "faker";
import React from "react";
import { View } from "react-native";

const ChipExampleCircular = () => (
  <View>
    <Chip circular text={faker.random.word()} />
  </View>
);

export default ChipExampleCircular;

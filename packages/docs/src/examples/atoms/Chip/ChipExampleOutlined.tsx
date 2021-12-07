import Chip from "@growth-ui/native/atoms/Chip";
import faker from "faker";
import React from "react";
import Spacer from "@growth-ui/native/atoms/Spacer";
import { View } from "react-native";

const ChipExampleImage = () => (
  <View>
    <Chip outlined text={faker.animal.bear()} />
    <Spacer size={15} />

    <Chip outlined color="primary" text={faker.animal.bear()} />
    <Spacer size={15} />

    <Chip outlined image={faker.image.animals()} text={faker.animal.bear()} />
  </View>
);

export default ChipExampleImage;

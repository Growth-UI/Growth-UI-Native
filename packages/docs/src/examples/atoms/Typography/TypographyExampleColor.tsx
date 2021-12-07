import faker from "faker";
import React from "react";
import Typography from "@growth-ui/native/atoms/Typography";
import { View } from "react-native";

const TypographyExampleColor = () => (
  <View>
    <Typography color="red-600">Red. {faker.lorem.words()}</Typography>
    <Typography color="yellow-600">Orange. {faker.lorem.words()}</Typography>
    <Typography color="yellow-300">Yellow. {faker.lorem.words()}</Typography>
    <Typography color="green-600">Green. {faker.lorem.words()}</Typography>
    <Typography color="blue-600">Blue. {faker.lorem.words()}</Typography>
    <Typography color="indigo-600">Indigo. {faker.lorem.words()}</Typography>
    <Typography color="purple-600">Purple. {faker.lorem.words()}</Typography>
  </View>
);

export default TypographyExampleColor;

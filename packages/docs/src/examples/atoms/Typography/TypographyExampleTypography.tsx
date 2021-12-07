import faker from "faker";
import React from "react";
import Typography from "@growth-ui/native/atoms/Typography";
import { View } from "react-native";

const TypographyExampleTypography = () => (
  <View>
    <Typography variant="h1">h1. Heading</Typography>
    <Typography variant="h2">h2. Heading</Typography>
    <Typography variant="h3">h3. Heading</Typography>
    <Typography variant="h4">h4. Heading</Typography>
    <Typography variant="h5">h5. Heading</Typography>
    <Typography variant="h6">h6. Heading</Typography>

    <Typography size={12}>12. {faker.lorem.words()}</Typography>
    <Typography size={14}>14. {faker.lorem.words()}</Typography>
    <Typography size={16}>16. {faker.lorem.words()}</Typography>
    <Typography size={24}>24. {faker.lorem.words()}</Typography>
    <Typography size={34}>34. {faker.lorem.words()}</Typography>
  </View>
);

export default TypographyExampleTypography;

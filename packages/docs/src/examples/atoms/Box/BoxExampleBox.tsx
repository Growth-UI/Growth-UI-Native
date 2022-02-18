import Box from "@growth-ui/native/atoms/Box";
import React from "react";
import { View } from "react-native";
import { Text } from "react-native";

const BoxExampleBox = () => (
  <View>
    <Box
      sx={{
        bg: "#ccc",
        p: 10,
        w: 300,
        mx: "auto",
      }}
    >
      <Text>Box</Text>
    </Box>
  </View>
);

export default BoxExampleBox;

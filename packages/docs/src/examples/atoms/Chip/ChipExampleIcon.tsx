import Chip from "@growth-ui/native/atoms/Chip";
import React from "react";
import Spacer from "@growth-ui/native/atoms/Spacer";
import { View } from "react-native";

const ChipExampleIcon = () => (
  <View>
    <Chip
      text="Tag"
      icon={{
        name: "close",
      }}
      iconPosition="right"
    />
    <Spacer size={15} />

    <Chip
      text="Mail"
      icon={{
        name: "email",
      }}
    />
    <Spacer size={15} />
  </View>
);

export default ChipExampleIcon;

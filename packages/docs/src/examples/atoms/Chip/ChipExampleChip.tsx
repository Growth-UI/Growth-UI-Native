import Chip from "@growth-ui/native/atoms/Chip";
import React from "react";
import Spacer from "@growth-ui/native/atoms/Spacer";
import { View } from "react-native";

const ChipExampleChip = () => (
  <View>
    <Chip icon={{ name: "email" }} text="23" />
    <Spacer size={15} />

    <Chip
      image="https://images.pexels.com/photos/6772971/pexels-photo-6772971.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      text="Joe"
    />
    <Spacer size={15} />

    <Chip text="React" />
    <Spacer size={15} />

    <Chip
      image="https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
      color="primary"
      text="Sung kihoon"
    >
      <Chip.Detail text="456" />
    </Chip>
    <Spacer size={15} />

    <Chip
      image="https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
      text="Sung kihoon"
      icon={{
        name: "close",
      }}
      iconPosition="right"
    />
    <Spacer size={15} />
  </View>
);

export default ChipExampleChip;

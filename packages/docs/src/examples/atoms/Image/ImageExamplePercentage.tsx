import faker from "faker";
import Image from "@growth-ui/native/atoms/Image";
import React from "react";
import { View } from "react-native";

const ImageExamplePercentage = () => (
  <View>
    <Image src={faker.image.animals()} />

    <View style={{ width: "80%" }}>
      <Image src={faker.image.animals()} />
    </View>

    <View>
      <Image centered src={faker.image.animals()} width="80%" />
    </View>
  </View>
);

export default ImageExamplePercentage;

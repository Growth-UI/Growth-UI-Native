import dynamic from "next/dynamic";
import faker from "faker";
import React from "react";
import { View } from "react-native";

const Image = dynamic(() => import("@growth-ui/native/atoms/Image"), { ssr: false });

const ImageExampleLazy = () => (
  <View>
    <Image lazy={false} src={faker.image.animals()} width={300} height={300} />
  </View>
);

export default ImageExampleLazy;

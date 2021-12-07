import dynamic from "next/dynamic";
import React from "react";
import { View } from "react-native";

const Image = dynamic(() => import("@growth-ui/native/atoms/Image"), { ssr: false });

const ImageExampleProgressive = () => (
  <View>
    <Image
      placeholder="https://react.growth-ui.com/images/small.jpg"
      src="https://react.growth-ui.com/images/large.jpg"
      width={300}
    />
  </View>
);

export default ImageExampleProgressive;

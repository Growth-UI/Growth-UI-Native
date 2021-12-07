import dynamic from "next/dynamic";
import React from "react";
import { View } from "react-native";

const Image = dynamic(() => import("@growth-ui/native/atoms/Image"), { ssr: false });

const ImageExampleAutoHeight = () => (
  <View>
    <Image
      centered
      src="https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      width={300}
    />
  </View>
);

export default ImageExampleAutoHeight;

// Photo by Roshan Kamath from Pexels

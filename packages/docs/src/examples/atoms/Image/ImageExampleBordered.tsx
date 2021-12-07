import dynamic from "next/dynamic";
import React from "react";
import { View } from "react-native";

const Image = dynamic(() => import("@growth-ui/native/atoms/Image"), { ssr: false });

const ImageExampleBordered = () => (
  <View>
    <Image
      bordered
      src="https://images.pexels.com/photos/3905859/pexels-photo-3905859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      width={300}
    />
  </View>
);

export default ImageExampleBordered;

// Photo by Polina Tankilevitch from Pexels

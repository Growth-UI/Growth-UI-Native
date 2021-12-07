import dynamic from "next/dynamic";
import React from "react";
import { View } from "react-native";

const Slider = dynamic(() => import("@growth-ui/native/atoms/Slider"), { ssr: false });

const SliderExampleToggle = () => (
  <View>
    <Slider toggle />
  </View>
);

export default SliderExampleToggle;

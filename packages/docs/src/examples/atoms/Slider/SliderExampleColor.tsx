import dynamic from "next/dynamic";
import React from "react";
import Spacer from "@growth-ui/native/atoms/Spacer";
import { View } from "react-native";

const Slider = dynamic(() => import("@growth-ui/native/atoms/Slider"), { ssr: false });

const SliderExampleColor = () => (
  <View>
    <Slider checked color="blue-300" />
    <Spacer size={30} />
    <Slider checked toggle color="red-500" />
    <Spacer size={30} />
    <Slider checked color="yellow-300" />
    <Spacer size={30} />
    <Slider checked toggle color="yellow-600" />
    <Spacer size={30} />
    <Slider checked color="pink-500" />
    <Spacer size={30} />
    <Slider checked toggle color="gray-600" />
    <Spacer size={30} />
    <Slider checked color="green-300" />
  </View>
);

export default SliderExampleColor;

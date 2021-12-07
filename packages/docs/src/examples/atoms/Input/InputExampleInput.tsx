import dynamic from "next/dynamic";
import React from "react";
import { View } from "react-native";

const Input = dynamic(() => import("@growth-ui/native/atoms/Input"), { ssr: false });

const InputExampleInput = () => {
  return (
    <View>
      <Input placeholder="Standard" />
    </View>
  );
};

export default InputExampleInput;

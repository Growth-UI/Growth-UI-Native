import { Spacer } from "@growth-ui/react";
import dynamic from "next/dynamic";
import React from "react";
import { View } from "react-native";

const Icon = dynamic(() => import("@growth-ui/native/atoms/Icon"), { ssr: false });

const IconExampleInverted = () => {
  return (
    <View>
      <Icon name="chevron left" inverted size={30} />
      <Spacer size={40} />
      <Icon name="democrat" color="blue-500" inverted size={30} />
      <Spacer size={40} />
      <Icon name="republican" color="red-500" inverted size={30} />
    </View>
  );
};

export default IconExampleInverted;

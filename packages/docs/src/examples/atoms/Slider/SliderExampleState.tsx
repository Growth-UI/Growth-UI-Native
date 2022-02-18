import dynamic from "next/dynamic";
import React, { useState } from "react";
import Row from "@growth-ui/native/atoms/Row";
import { Spacer } from "@growth-ui/react";

const Icon = dynamic(() => import("@growth-ui/native/atoms/Icon"), { ssr: false });
const Slider = dynamic(() => import("@growth-ui/native/atoms/Slider"), { ssr: false });

const SliderExampleState = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Row>
      <Slider onPress={(e, data) => setChecked(!!data.checked)} />
      <Spacer size={10} />
      <Icon name={checked ? "sun" : "partly sunny"} size={30} />
    </Row>
  );
};

export default SliderExampleState;

// import React from "react";
// import { Slider } from "@growth-ui/native";
// import { View } from "react-native";

import Button from "@growth-ui/native/atoms/Button";
import dynamic from "next/dynamic";
import faker from "faker";
import Image from "@growth-ui/native/atoms/Image";
import React, { useState } from "react";
import Spacer from "@growth-ui/native/atoms/Spacer";
import { View } from "react-native";

const Collapse = dynamic(() => import("@growth-ui/native/atoms/Collapse"), { ssr: false });

const IconExampleColor = () => {
  const [expanded, setExpaned] = useState(false);

  const expand = () => setExpaned(!expanded);

  return (
    <View>
      <Button basic onPress={expand}>
        👉 Click me 👈
      </Button>
      <Spacer size={30} />
      <Collapse expanded={expanded}>
        <Image lazy={false} src={faker.image.animals()} width={300} />
      </Collapse>
    </View>
  );
};

export default IconExampleColor;

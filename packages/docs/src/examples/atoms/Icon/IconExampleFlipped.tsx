import Button from "@growth-ui/native/atoms/Button";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { View } from "react-native";

const Icon = dynamic(() => import("@growth-ui/native/atoms/Icon"), { ssr: false });

const IconExampleFlipped = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <View>
      <Button
        onPress={() => {
          setFlipped(!flipped);
        }}
      >
        Flip
      </Button>

      <Icon name="chevron down" flipped={flipped} size={30} />
    </View>
  );
};

export default IconExampleFlipped;

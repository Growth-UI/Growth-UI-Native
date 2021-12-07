import Button from "@growth-ui/native/atoms/Button";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import Row from "@growth-ui/native/atoms/Row";
import Spacer from "@growth-ui/native/atoms/Spacer";
import { View } from "react-native";

const Icon = dynamic(() => import("@growth-ui/native/atoms/Icon"), { ssr: false });

const IconExampleRotated = () => {
  const [rotated, setRotated] = useState(false);
  const [rotateDirection, setRotateDirection] = useState<"clockwise" | "counterclockwise">(
    "clockwise"
  );

  return (
    <View>
      <Row>
        <Button
          onPress={() => {
            setRotated(!rotated);
            setRotateDirection("clockwise");
          }}
        >
          clockwise
        </Button>
        <Spacer size={15} />
        <Button
          onPress={() => {
            setRotated(!rotated);
            setRotateDirection("counterclockwise");
          }}
        >
          counter-clockwise
        </Button>
      </Row>

      <Icon name="chevron down" rotated={rotated} rotateDirection={rotateDirection} size={30} />
    </View>
  );
};

export default IconExampleRotated;

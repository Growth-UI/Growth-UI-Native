import Button from "@growth-ui/native/atoms/Button";
import React from "react";
import { View } from "react-native";

const ButtonExampleBasic = () => (
  <View>
    <Button basic>Basic</Button>
    <Button basic color="primary">
      Primary
    </Button>
    <Button basic color="secondary">
      Secondary
    </Button>
    <Button basic color="red-600">
      Red
    </Button>
    <Button basic color="yellow-600">
      Oragne
    </Button>
    <Button basic color="yellow-400">
      Yellow
    </Button>
    <Button basic color="green-600">
      Green
    </Button>
    <Button basic color="blue-600">
      Blue
    </Button>
    <Button basic color="indigo-600">
      Indigo
    </Button>
    <Button basic color="purple-600">
      Purple
    </Button>
  </View>
);

export default ButtonExampleBasic;

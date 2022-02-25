import Button from "@growth-ui/native/atoms/Button";
import React from "react";
import Row from "@growth-ui/native/atoms/Row";
import { View } from "react-native";

const RowExampleRow = () => {
  return (
    <View>
      <Row>
        <View style={{ padding: 3 }}>
          <Button>Button1</Button>
        </View>
        <View style={{ padding: 3 }}>
          <Button>Button2</Button>
        </View>
      </Row>
    </View>
  );
};

export default RowExampleRow;

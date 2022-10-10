import React, { FunctionComponent } from "react";
import { sx } from "../../utils";
import { SX } from "../../types";
import { View } from "react-native";

const Box: FunctionComponent<BoxProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <View
      style={{
        ...sx(props.sx),
      }}
      {...rest}
    >
      {children}
    </View>
  );
};

export interface BoxProps extends StrictBoxProps {
  [k: string]: any;
}

interface StrictBoxProps {
  /** Accepts all system properties. */
  sx?: SX;
}

export default Box;

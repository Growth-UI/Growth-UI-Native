import React, { FunctionComponent, useContext } from "react";
import theme from "../../theme";
import ThemeContext from "../../ThemeContext";
import { sx } from "../../utils";
import { SX } from "../../types";
import { View } from "react-native";

const Box: FunctionComponent<BoxProps> = (props) => {
  const { children, ...rest } = props;

  const { mode } = useContext(ThemeContext);

  return (
    <View
      style={{
        backgroundColor: theme[mode].backgroundColor,
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

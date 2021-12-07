import React, { FunctionComponent } from "react";
import { StyleSheet, View, Text } from "react-native";

function getHeight({ axis, size }: any) {
  return axis === "horizontal" ? 0 : size;
}
function getWidth({ axis, size }: any) {
  return axis === "vertical" ? 0 : size;
}

const Spacer: FunctionComponent<SpacerProps> = (props) => {
  const { axis, size, style, ...rest } = props;

  return (
    <View
      {...rest}
      style={StyleSheet.flatten([
        {
          width: getWidth({ axis, size }),
          height: getHeight({ axis, size }),
          minWidth: getWidth({ axis, size }),
          minHeight: getHeight({ axis, size }),
        },
        style,
      ])}
    >
      <Text />
    </View>
  );
};

export interface SpacerProps extends StrictSpacerProps {
  [k: string]: any;
}

interface StrictSpacerProps {
  /** Axis to be spaced. */
  axis?: "vertical" | "horizontal";

  /** The gap between the given direction. */
  size?: number;
}

export default Spacer;

import React, { FunctionComponent } from "react";
import { Animated, StyleProp, StyleSheet, ViewStyle } from "react-native";
import { HORIZONTALALIGNMENTS, VERTICALALIGNMENTS } from "../../types";

export const getHorizontalStyle = (horizontalAlign: HORIZONTALALIGNMENTS) => {
  switch (horizontalAlign) {
    case "center":
      return "center";
    case "left":
      return "flex-start";
    case "right":
      return "flex-end";
    case "space-around":
      return "space-around";
    case "space-between":
      return "space-between";
    case "space-evenly":
      return "space-evenly";
  }
};

export const getVerticalStyle = (verticalAlign: VERTICALALIGNMENTS) => {
  switch (verticalAlign) {
    case "baseline":
      return "baseline";
    case "bottom":
      return "flex-end";
    case "middle":
      return "center";
    case "top":
      return "flex-start";
    case "stretch":
      return "stretch";
  }
};

const Row: FunctionComponent<RowProps> = (props) => {
  const {
    children,
    horizontalAlign = "left",
    style = {},
    verticalAlign = "middle",
    wrap,
    ...rest
  } = props;

  return (
    <Animated.View
      {...rest}
      style={StyleSheet.flatten([
        {
          flexDirection: "row",
          flexWrap: wrap ? "wrap" : "nowrap",
          justifyContent: getHorizontalStyle(horizontalAlign),
          alignItems: getVerticalStyle(verticalAlign),
        },
        style,
      ])}
    >
      {children}
    </Animated.View>
  );
};

export interface RowProps extends StrictRowProps {
  [k: string]: any;
}

interface StrictRowProps {
  /** A row can have its columns aligned horizontally. */
  horizontalAlign?: HORIZONTALALIGNMENTS;

  /** Custom style. */
  style?: StyleProp<ViewStyle>;

  /** A row can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign?: VERTICALALIGNMENTS;

  /** How flex items wrap. */
  wrap?: boolean;
}

export default Row;

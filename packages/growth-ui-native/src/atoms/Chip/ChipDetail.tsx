import React, { FC } from "react";
import theme from "../../theme";
import Typography from "../Typography";
import { COLORS } from "../../types";
import { getFontSize } from "./helpers";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

const ChipDetail: FC<ChipDetailProps> = (props) => {
  const { children, color, containerStyle, outlined, size, text, ...rest } = props;

  return (
    <View
      {...rest}
      style={StyleSheet.flatten([
        styles.container,
        {
          backgroundColor: "rgba(0,0,0,.1)",
        },
        outlined && {
          backgroundColor: "transparent",
        },
        containerStyle,
      ])}
    >
      {text && (
        <Typography
          size={getFontSize(size)}
          style={StyleSheet.flatten([
            styles.typography,
            color && { color: outlined ? theme.colors[color as COLORS] : "white" },
          ])}
        >
          {text}
        </Typography>
      )}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    paddingHorizontal: 10,
  },
  typography: {
    fontWeight: "500",
    opacity: 0.8,
  },
});

export interface ChipDetailProps extends StrictChipDetailProps {
  [k: string]: any;
}

interface StrictChipDetailProps {
  /** Custom container style. */
  containerStyle?: StyleProp<ViewStyle>;

  /** The content of the component. */
  text?: string;
}

export default ChipDetail;

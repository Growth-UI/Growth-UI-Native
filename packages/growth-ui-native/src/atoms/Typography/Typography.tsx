import React, { FC, useContext } from "react";
import theme from "../../theme";
import ThemeContext from "../../ThemeContext";
import { COLORS, TEXTALIGNMENTS } from "../../types";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

const getVariantStyle = (variant?: TypographyProps["variant"]) => {
  const style: Record<string, any> = {
    fontWeight: "700",
  };

  if (variant === "h1") {
    style.fontSize = 40;
  }

  if (variant === "h2") {
    style.fontSize = 34;
  }

  if (variant === "h3") {
    style.fontSize = 28;
  }

  if (variant === "h4") {
    style.fontSize = 22;
  }

  if (variant === "h5") {
    style.fontSize = 18;
  }

  if (variant === "h6") {
    style.fontSize = 14;
  }

  return style;
};

const Typography: FC<TypographyProps> = (props) => {
  const { children, color, size, style = {}, textAlign, variant, ...rest } = props;

  const { mode } = useContext(ThemeContext);

  return (
    <Text
      {...rest}
      style={StyleSheet.flatten([
        {
          color: color ? theme.colors[color] || color : theme[mode].textColor,
          textAlign: textAlign || "left",
          flexShrink: 1,
        },
        variant && getVariantStyle(variant),
        size && { fontSize: size },
        style,
      ])}
    >
      {children}
    </Text>
  );
};

export interface TypographyProps extends StrictTypographyProps {
  [k: string]: any;
}

interface StrictTypographyProps {
  /** A typography can have different colors. */
  color?: COLORS;

  /** A typography may appear at different sizes. */
  size?: number;

  /** Custom style. */
  style?: StyleProp<TextStyle>;

  /** Align typography content. */
  textAlign?: TEXTALIGNMENTS;

  /** An element type to render as. */
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export default Typography;

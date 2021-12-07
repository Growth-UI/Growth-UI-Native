import isNil from "lodash/isNil";
import React, { FC, useContext } from "react";
import theme from "../../theme";
import ThemeContext from "../../ThemeContext";
import Typography from "../Typography";
import { COLORS } from "../../types";
import { GestureResponderEvent, StyleSheet, TouchableWithoutFeedback, View } from "react-native";

const computeMax = (content: number, max = 99) => {
  if (content > max) {
    return `${max}+`;
  }

  return `${content}`;
};

const translateX = (content: number, max?: number) => {
  const length = computeMax(content, max).length;

  if (length < 2) {
    return {
      marginHorizontal: -8,
    };
  }

  if (length <= 3) {
    return {
      marginHorizontal: -15,
    };
  }

  return {
    marginHorizontal: -23,
  };
};

const Badge: FC<BadgeProps> = (props) => {
  const {
    children,
    content = 0,
    color = "primary",
    direction = "top right",
    dot,
    max,
    onPress,
    overlap,
    overlapColor,
    textColor = "white",
  } = props;

  const { mode } = useContext(ThemeContext);

  const handlePress = (e: GestureResponderEvent) => {
    onPress && onPress(e, props);
  };

  return (
    <View style={{ alignSelf: "flex-start" }}>
      {children}
      <TouchableWithoutFeedback onPress={handlePress}>
        <>
          <View
            style={StyleSheet.flatten([
              styles.overlap,
              {
                backgroundColor: overlapColor
                  ? theme.colors[overlapColor]
                  : theme[mode].backgroundColor,
                marginVertical: -7,
              },
              translateX(content, max),
              dot && {
                minWidth: 12,
                height: 12,
                marginHorizontal: -3,
                marginVertical: -3,
              },
              overlap && {
                padding: 2,
              },
              direction === "bottom left" && {
                bottom: 0,
                left: 0,
              },
              direction === "bottom right" && {
                bottom: 0,
                right: 0,
              },
              direction === "top left" && {
                top: 0,
                left: 0,
              },
              direction === "top right" && {
                top: 0,
                right: 0,
              },
            ])}
          >
            <View
              style={StyleSheet.flatten([
                styles.badge,
                {
                  backgroundColor: theme.colors[color],
                },
                dot && {
                  minWidth: 10,
                  height: 10,
                  paddingHorizontal: 0,
                },
              ])}
            >
              {!dot && !isNil(content) && (
                <Typography color={textColor} size={11} style={{ fontWeight: "500" }}>
                  {computeMax(content, max)}
                </Typography>
              )}
            </View>
          </View>
        </>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    borderRadius: 500,
    minWidth: 20,
    height: 20,
    paddingHorizontal: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  overlap: {
    position: "absolute",
    borderRadius: 500,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
});

export interface BadgeProps extends StrictBadgeProps {
  [k: string]: any;
}

interface StrictBadgeProps {
  /** The content rendered within the badge.  */
  content?: number;

  /** The color of the badge. */
  color?: COLORS;

  /** A badge can appear to all corners. */
  direction?: "top left" | "top right" | "bottom left" | "bottom right";

  /** A badge with empty content. */
  dot?: boolean;

  /**
   * Max count to show.
   * @default 99
   */
  max?: number;

  /** Called upon press. */
  onPress?: (e: GestureResponderEvent, data: BadgeProps) => void;

  /** Wrapped shape the badge should overlap. */
  overlap?: boolean;

  /** The background color of the overlap. */
  overlapColor?: COLORS;

  /** The color of the text. */
  textColor?: COLORS;
}

export default Badge;

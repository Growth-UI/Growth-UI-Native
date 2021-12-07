import Icon, { IconProps } from "../Icon";
import isNil from "lodash/isNil";
import React, { FunctionComponent } from "react";
import Ripple from "../../addons/Ripple";
import Row from "../Row";
import theme from "../../theme";
import Typography, { TypographyProps } from "../Typography";
import { COLORS } from "../../types";
import {
  ActivityIndicator,
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";

const Button: FunctionComponent<ButtonProps> = (props) => {
  const {
    basic,
    buttonStyle,
    children,
    circular,
    color,
    containerStyle = {},
    disabled,
    fluid,
    icon,
    iconPosition = "left",
    loading,
    onPress,
    ripple = true,
    textStyle,
  } = props;

  const backgroundColor = color ? theme.colors[color] : "#e0e1e2";
  const borderRadius = circular ? 500 : 4;
  const themeColor = basic && color ? color : basic ? "black" : color ? "white" : "black";

  const handlePress = (event: GestureResponderEvent) => {
    if (disabled) return;

    if (onPress) {
      onPress(event, props);
    }
  };

  const renderIcon = () => {
    if (!icon) {
      return null;
    }

    const shouldMargin = !isNil(children);

    return (
      <View
        style={StyleSheet.flatten([
          shouldMargin && iconPosition === "left" && { marginRight: 7 },
          shouldMargin && iconPosition === "right" && { marginLeft: 7 },
        ])}
      >
        <Icon color={themeColor} {...icon} />
      </View>
    );
  };

  return (
    <View
      style={StyleSheet.flatten([
        { borderRadius, alignSelf: "flex-start", overflow: "hidden" },
        fluid && { width: "100%", alignSelf: "center" },
        containerStyle,
      ])}
    >
      <TouchableOpacity
        activeOpacity={1}
        style={StyleSheet.flatten([
          {
            positoin: "relative",
            cursor: "pointer",
            opacity: 0.85,
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderRadius,
            backgroundColor,
            borderColor: backgroundColor,
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
          },
          disabled && { cursor: "default", opacity: 0.6 },
          loading && { cursor: "default" },
          basic && { backgroundColor: "white" },
          buttonStyle,
        ])}
        onPress={handlePress}
      >
        {loading && (
          <ActivityIndicator
            color={basic ? "#999" : "#ccc"}
            style={StyleSheet.flatten([
              {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              },
            ])}
          />
        )}
        <Row horizontalAlign="space-between" wrap={false}>
          {iconPosition === "left" && renderIcon()}
          <Typography
            style={StyleSheet.flatten([
              {
                fontWeight: "600",
                color: theme.colors[themeColor],
              },
              loading && { opacity: 0 },
              textStyle,
            ])}
          >
            {children}
          </Typography>
          {iconPosition === "right" && renderIcon()}
        </Row>
      </TouchableOpacity>
      {ripple && !disabled && !loading && <Ripple color={backgroundColor} onPress={handlePress} />}
    </View>
  );
};

export interface ButtonProps extends StrictButtonProps {
  [k: string]: any;
}

interface StrictButtonProps {
  /** A basic button is less pronounced. */
  basic?: boolean;

  /** Custom button style. */
  buttonStyle?: StyleProp<ViewStyle>;

  /** A button can be circular. */
  circular?: boolean;

  /** A button can have different colors */
  color?: COLORS;

  /** Custom container style. */
  containerStyle?: StyleProp<ViewStyle>;

  /** A button can show it is currently unable to be interacted with. */
  disabled?: boolean;

  /** A button can take the width of its container. */
  fluid?: boolean;

  /** Icon to display inside the Input. */
  icon?: IconProps;

  /** An Icon can appear inside an Input on the left or right. */
  iconPosition?: "left" | "right";

  /** A button can show a loading indicator. */
  loading?: boolean;

  /** Called after user's press. */
  onPress?: (event: GestureResponderEvent, data: ButtonProps) => void;

  /** A ripple effect to give users feedback in a simple, elegant way. */
  ripple?: boolean;

  /** Custom text style. */
  textStyle?: TypographyProps["style"];
}

export default Button;

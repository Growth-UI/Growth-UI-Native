import Icon, { IconProps } from "../../atoms/Icon";
import React, { FC, useContext, useEffect, useRef, useState } from "react";
import Row from "../../atoms/Row";
import theme from "../../theme";
import ThemeContext from "../../ThemeContext";
import Typography from "../../atoms/Typography";
import { COLORS } from "../../types";
import {
  Animated,
  StyleSheet,
  GestureResponderEvent,
  TextStyle,
  ViewStyle,
  StyleProp,
  Pressable,
} from "react-native";

const CheckBox: FC<CheckBoxProps> = (props) => {
  const {
    backgroundColorAnimConfig,
    borderColorAnimConfig,
    checkboxAnimConfig,
    checked = false,
    color = "primary",
    filled,
    icon,
    radio,
    size = 25,
    styles,
    text,
    onPress,
  } = props;
  const [_checked, setChecked] = useState(checked);
  const { mode } = useContext(ThemeContext);

  const scaleAnim = useRef<Animated.Value>(new Animated.Value(_checked ? 1 : 0));
  const backgroundColorAnim = useRef<Animated.Value>(new Animated.Value(_checked ? 1 : 0));
  const borderColorAnim = useRef<Animated.Value>(new Animated.Value(_checked ? 1 : 0));

  useEffect(() => {
    setChecked(checked);
  }, [checked]);

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scaleAnim.current, {
        useNativeDriver: true,
        friction: 2,
        toValue: _checked ? 1 : 0,
        ...checkboxAnimConfig,
      }),
      Animated.timing(backgroundColorAnim.current, {
        useNativeDriver: false,
        toValue: _checked ? 1 : 0,
        duration: 300,
        ...backgroundColorAnimConfig,
      }),
      Animated.timing(borderColorAnim.current, {
        useNativeDriver: false,
        toValue: _checked ? 1 : 0,
        duration: 300,
        ...borderColorAnimConfig,
      }),
    ]).start();
  }, [_checked]);

  const handlePress = (e: GestureResponderEvent) => {
    if (onPress) onPress(e, { ...props, checked: !_checked });

    setChecked(!_checked);
  };

  const borderColorInterpolation = borderColorAnim.current.interpolate({
    inputRange: [0, 1],
    outputRange: [theme[mode].border, theme.colors[color]],
  });

  const backgroundColorInterpolation = backgroundColorAnim.current.interpolate({
    inputRange: [0, 1],
    outputRange: [theme[mode].backgroundColor, theme.colors[color]],
  });

  return (
    <Pressable onPress={handlePress} onStartShouldSetResponderCapture={() => true}>
      <Row>
        <Animated.View
          style={StyleSheet.flatten([
            {
              margin: 5,
              marginLeft: 10,
              marginRight: 10,
              borderWidth: 1,
              borderRadius: 4,
              alignItems: "center",
              backgroundColor: theme[mode].backgroundColor,
              borderColor: borderColorInterpolation,
              width: size,
              height: size,
            },
            filled && {
              backgroundColor: backgroundColorInterpolation,
            },
            radio && {
              borderRadius: 500,
            },
            styles?.checkbox,
          ])}
        >
          <Animated.View
            style={StyleSheet.flatten([
              {
                position: "absolute",
                top: size - size * (radio ? 2.03 : 1.275),
                transform: [
                  {
                    scale: scaleAnim.current,
                  },
                ],
              },
              styles?.iconContainer,
            ])}
          >
            <Icon
              color={filled ? "white" : color}
              size={radio ? size * 3 : size * 1.5}
              name={radio ? "dot" : "check"}
              {...icon}
            />
          </Animated.View>
        </Animated.View>
        {text && (
          <Typography size={size * 0.64} style={styles?.text}>
            {text}
          </Typography>
        )}
      </Row>
    </Pressable>
  );
};

export interface CheckBoxProps extends StrictCheckBoxProps {
  [k: string]: any;
}

export interface StrictCheckBoxProps {
  /** Custom background color animation config. */
  backgroundColorAnimConfig?: Animated.TimingAnimationConfig;

  /** Custom border color animation config. */
  borderColorAnimConfig?: Animated.TimingAnimationConfig;

  /** Custom checkbox animation config. */
  checkboxAnimConfig?: Animated.SpringAnimationConfig;

  /** Whether or not checkbox is checked. */
  checked?: boolean;

  /** A checkbox can have different colors. */
  color?: COLORS;

  /** A checkbox can be filled with color. */
  filled?: boolean;

  /** Add a custom Icon by name, props object. */
  icon?: IconProps;

  /** Called on press. */
  onPress?: (e: GestureResponderEvent, data: CheckBoxProps) => void;

  /** Format as a radio element. This means it is an exclusive option. */
  radio?: boolean;

  /** A checkbox can be different sizes. */
  size?: number;

  /** Custom styles. */
  styles?: {
    checkbox?: StyleProp<ViewStyle>;
    iconContainer?: StyleProp<TextStyle>;
    text?: StyleProp<TextStyle>;
  };

  /** The text that describes what the checkbox is for. */
  text?: string;
}

export default CheckBox;

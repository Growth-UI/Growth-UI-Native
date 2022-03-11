import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import Row from "../Row";
import theme from "../../theme";
import { COLORS } from "../../types";
import {
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  GestureResponderEvent,
} from "react-native";

const Slider: FC<SliderProps> = (props) => {
  const { checked = false, color, disabled, toggle, onPress } = props;
  const [_checked, _setChecked] = useState(checked);

  const colorAnim = useRef(new Animated.Value(_checked ? 1 : 0)).current;
  const transformAnim = useRef(new Animated.Value(_checked ? 32 : 0)).current;

  useEffect(() => {
    _setChecked(checked);
    animate(checked);
  }, [checked]);

  const animate = useCallback(
    (isChecked: boolean) => {
      Animated.parallel([
        Animated.timing(transformAnim, {
          duration: 300,
          toValue: isChecked ? 32 : 0,
          useNativeDriver: false,
        }),
        Animated.timing(colorAnim, {
          duration: 150,
          toValue: isChecked ? 1 : 0,
          useNativeDriver: false,
        }),
      ]).start();
    },
    [colorAnim, transformAnim, _checked]
  );

  const handePress = (e: GestureResponderEvent) => {
    if (disabled) {
      return;
    }

    animate(!_checked);
    _setChecked(!_checked);

    if (onPress) {
      onPress(e, { ...props, checked: !_checked });
    }
  };

  const colorInterpolation = useMemo(() => {
    return colorAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [theme.light.border, color ? theme.colors[color] : theme.colors.primary],
    });
  }, [color]);

  return (
    <TouchableWithoutFeedback onPress={handePress}>
      <Row
        style={StyleSheet.flatten([
          {
            cursor: disabled ? "default" : "pointer",
            width: 55,
            height: 24,
          },
        ])}
      >
        <Animated.View
          style={StyleSheet.flatten([
            {
              position: "absolute",
              width: 24,
              height: 24,
              backgroundColor: "#fff",
              zIndex: 2,
              transform: [
                {
                  translateX: transformAnim,
                },
              ],
              borderRadius: 500,
              borderWidth: 1,
              borderColor: colorInterpolation,
              shadowColor: colorInterpolation,
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.2,
              shadowRadius: 1.41,
              elevation: 2,
            },
          ])}
        />
        <Animated.View
          style={StyleSheet.flatten([
            {
              position: "absolute",
              width: 55,
              height: toggle ? 24 : 2,
              borderRadius: 500,
              backgroundColor: colorInterpolation,
            },
          ])}
        />
      </Row>
    </TouchableWithoutFeedback>
  );
};

export interface SliderProps extends StrictSliderProps {
  [k: string]: any;
}

interface StrictSliderProps {
  /** Whether or not slider is active. */
  checked?: boolean;

  /** A slider can be filled with different colors. */
  color?: COLORS;

  /** A slider can appear disabled and be unable to change states. */
  disabled?: boolean;

  /** Called when the user attempts to change the slider state. */
  onPress?: (e: GestureResponderEvent, data: SliderProps) => void;

  /** Format to show an on or off choice. */
  toggle?: boolean;
}

export default Slider;

/* eslint-disable react/display-name */
import Icon, { IconProps } from "../Icon";
import invoke from "lodash/invoke";
import React, { FC, forwardRef, useContext, useEffect, useRef, useState } from "react";
import Row from "../Row";
import theme from "../../theme";
import ThemeContext from "../../ThemeContext";
import Typography from "../Typography";
import { partitionNativeProps } from "../../utils";
import {
  Animated,
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";

const Input = forwardRef<TextInput, InputProps>((props, forwardedRef) => {
  const {
    adornment,
    adornmentColor,
    basic,
    containerStyle,
    disabled,
    error,
    feedback,
    label,
    labelStyle,
    icon,
    iconPosition = "left",
    inputStyle,
    placeholder,
    rounded,
    value,
    ...unhandled
  } = props;

  const { mode } = useContext(ThemeContext);

  const [text, setText] = useState<any>(value);
  const [isFocused, setIsFocused] = useState(false);

  const input = forwardedRef || useRef<TextInput>(null);
  const colorAnim = useRef(new Animated.Value(0)).current;
  const floatAnim = useRef(new Animated.Value(value ? -10 : 0)).current;
  const fontSizeAnim = useRef(new Animated.Value(value ? 12 : 14)).current;
  const borderAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setText(value as string);
  }, [value]);

  const handleChangeText = (text: string) => {
    setText(text);
    invoke(props, "onChangeText", text);
  };

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    if (disabled) {
      return true;
    }

    Animated.parallel([
      Animated.timing(colorAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(borderAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(fontSizeAnim, {
        toValue: 12,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(floatAnim, {
        toValue: -10,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: false,
      }),
    ]).start();

    setIsFocused(true);

    invoke(props, "onFocus", e, props);
  };

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    Animated.parallel([
      Animated.timing(colorAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(borderAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(fontSizeAnim, {
        toValue: text ? 12 : 14,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(floatAnim, {
        toValue: text ? -10 : 0,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(opacityAnim, {
        toValue: text ? 1 : 0,
        duration: 400,
        useNativeDriver: false,
      }),
    ]).start();

    setIsFocused(false);

    invoke(props, "onBlur", e, props);
  };

  const inputProps = () => {
    const [nativeInputProps, rest] = partitionNativeProps(unhandled);

    return [
      {
        ...nativeInputProps,
        onBlur: handleBlur,
        onChangeText: handleChangeText,
        onFocus: handleFocus,
        editable: !disabled,
        placeholder: label && !isFocused ? "" : placeholder,
        value: text,
      },
      rest,
    ];
  };

  const [nativeInputProps] = inputProps();

  const borderInterpolation = borderAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [theme[mode].border, theme.colors.primary],
  });

  const colorInterpolation = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [theme[mode].lightTextColor, theme.colors.primary],
  });

  return (
    <>
      <Animated.View
        style={StyleSheet.flatten([
          styles.container,
          {
            borderColor: borderInterpolation,
          },
          error && {
            borderColor: theme.error.borderColor,
            backgroundColor: theme.error.backgroundColor,
          },
          disabled && { opacity: 0.6 },
          rounded && { borderRadius: 500 },
          basic && {
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,
            borderRadius: 0,
            paddingLeft: 0,
          },
          containerStyle,
        ])}
      >
        {label && (
          <Animated.View
            style={StyleSheet.flatten([
              styles.label,
              basic && {
                left: 0,
              },
              labelStyle,
            ])}
          >
            <Animated.Text
              style={{
                color: error ? theme.error.textColor : colorInterpolation,
                fontSize: fontSizeAnim,
                transform: [{ translateY: floatAnim }],
              }}
            >
              {label}
            </Animated.Text>
          </Animated.View>
        )}
        <Row>
          {iconPosition === "left" && (
            <Animated.View
              style={StyleSheet.flatten([label ? styles.common : { paddingVertical: 15 }])}
            >
              {icon && <Icon {...icon} />}
            </Animated.View>
          )}
          <Animated.Text
            style={StyleSheet.flatten([
              {
                opacity: opacityAnim,
                color: adornmentColor || "black",
              },
              label ? styles.common : { paddingVertical: 15 },
            ])}
          >
            {adornment}
          </Animated.Text>
          <TextInput
            ref={input}
            selectionColor={theme.colors.primary}
            style={StyleSheet.flatten([
              styles.input,
              {
                color: error ? theme.error.textColor : theme[mode].textColor,
              },
              basic && {
                paddingLeft: 0,
              },
              label ? styles.common : { paddingVertical: 15 },
              inputStyle,
            ])}
            placeholderTextColor={theme[mode].lightTextColor}
            underlineColorAndroid="transparent"
            {...nativeInputProps}
          />
          {iconPosition === "right" && (
            <Animated.View
              style={StyleSheet.flatten([
                {
                  opacity: opacityAnim,
                },
                label ? styles.common : { paddingVertical: 15 },
              ])}
            >
              {icon && <Icon {...icon} />}
            </Animated.View>
          )}
        </Row>
      </Animated.View>
      {feedback && (
        <View style={styles.feedback}>
          <Typography
            style={{
              color: theme.error.textColor,
            }}
          >
            {feedback}
          </Typography>
        </View>
      )}
    </>
  );
}) as FC<InputProps>;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingHorizontal: 10,
    borderRadius: 6,
    borderWidth: 1,
    marginBottom: 10,
  },
  label: {
    position: "absolute",
    left: 10,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: "center",
  },
  input: {
    paddingLeft: 3,
    flex: 1,
  },
  feedback: {
    marginTop: -5,
    marginBottom: 10,
  },
  common: {
    paddingTop: 27,
    paddingBottom: 5,
  },
});

export interface InputProps extends StrictInputProps {
  [k: string]: any;
}

export interface StrictInputProps {
  /** This can be used to add a prefix, a suffix or an action to an element. */
  adornment?: string;

  /** Color of the adornmanet. */
  adornmentColor?: string;

  /** An Input can be a basic shape. */
  basic?: boolean;

  /** Custom container style */
  containerStyle?: StyleProp<ViewStyle>;

  /** An Input field can show that it is disabled. */
  disabled?: boolean;

  /** An Input field can show the data contains errors. */
  error?: boolean;

  /** Feedback to the user about the error. */
  feedback?: string;

  /** The label of the input used for layout. */
  label?: string;

  /** Custom label style */
  labelStyle?: StyleProp<ViewStyle>;

  /** Icon to display inside the Input. */
  icon?: IconProps;

  /** An Icon can appear inside an Input on the left or right. */
  iconPosition?: "left" | "right";

  /** Custom TextInput style. */
  inputStyle?: StyleProp<TextStyle>;

  /**
   * Called on text change.
   *
   * @param {text} string
   */
  onChangeText?: (text: string) => void;

  /** The input placeholder. */
  placeholder?: string;

  /** An Input field can be rounded shape. */
  rounded?: boolean;

  /** The input value */
  value?: string | number | boolean;
}

export default Input;

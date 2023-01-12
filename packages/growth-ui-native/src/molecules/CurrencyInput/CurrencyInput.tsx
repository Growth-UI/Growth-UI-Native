import Icon, { IconProps } from "../../atoms/Icon";
import React, { FC, useContext, useEffect, useRef, useState } from "react";
import Row, { RowProps } from "../../atoms/Row";
import theme from "../../theme";
import ThemeContext from "../../ThemeContext";
import Typography from "../../atoms/Typography";
import { formatValue, removeInvalidChars } from "./utils";
import {
  Animated,
  StyleSheet,
  View,
  Text,
  TextInput,
  StyleProp,
  TextStyle,
  ViewStyle,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputKeyPressEventData,
} from "react-native";

const CurrencyInput: FC<CurrencyInputProps> = (props) => {
  const {
    containerStyle,
    cursorAnim,
    cursorStyle,
    decimalsLimit = 2,
    defaultValue = 0,
    error,
    horizontalAlign = "center",
    icon,
    inputContainerStyle,
    inputProps,
    inputTextAnim,
    inputTextStyle,
    prefix,
    prefixStyle,
    separators = true,
    showClearIcon = true,
    size = 20,
    onBlur,
    onChange,
    onFocus,
  } = props;
  const { mode } = useContext(ThemeContext);
  const [values, setValues] = useState<Array<string>>([`${+defaultValue}`]);
  const [focused, setFocused] = useState(true);

  const ref = useRef<TextInput>(null);
  const opacityAnim = useRef(new Animated.Value(1));
  const transformAnims = useRef<Array<Animated.Value>>([new Animated.Value(0)]);

  useEffect(() => {
    setValues([`${+defaultValue}`]);
  }, [defaultValue]);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacityAnim.current, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
          ...cursorAnim,
        }),
        Animated.timing(opacityAnim.current, {
          toValue: focused ? 1 : 0,
          duration: 1000,
          useNativeDriver: true,
          ...cursorAnim,
        }),
      ])
    ).start();
  }, [focused]);

  useEffect(() => {
    if (transformAnims.current.length !== 0) {
      Animated.spring(transformAnims.current[values.length - 1], {
        toValue: 0,
        tension: 200,
        useNativeDriver: true,
        ...inputTextAnim,
      }).start();
    }
  }, [values]);

  const handleChange = (newValue: string) => {
    if (values.length === 1 && values[0] === "0" && (newValue === "0" || newValue === ".")) {
      transformAnims.current = [new Animated.Value(30)];
      onChange?.(0, props);

      return setValues(["0."]);
    }

    if (values.length === 1 && values[0] === "0" && newValue !== "0") {
      transformAnims.current = [new Animated.Value(30)];
      onChange?.(+newValue, props);

      return setValues([newValue]);
    }

    const newValues = [...values];
    newValues.push(newValue);

    const clensedValue = removeInvalidChars(newValues.join(""));
    const formattedValue = formatValue(clensedValue, {
      decimalsLimit,
      separators,
    });

    transformAnims.current = formattedValue.map((_, idx) => {
      if (idx === formattedValue.length - 1) {
        return new Animated.Value(30);
      }

      return new Animated.Value(0);
    });

    onChange?.(+clensedValue, props);
    setValues(formattedValue);
  };

  const handleFocus = (e: NativeSyntheticEvent<any>) => {
    setFocused(true);
    onFocus?.(e, props);
    ref.current?.focus?.();
  };

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocused(false);
    onBlur?.(e, props);
  };

  const handleKeyPress = ({
    nativeEvent: { key },
  }: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
    if (key === "Backspace" && values.length === 1) {
      transformAnims.current = [new Animated.Value(0)];
      onChange?.(0, props);

      return setValues(["0"]);
    }

    if (key === "Backspace") {
      const newValue = [...values];
      newValue.pop();

      const formattedValue = formatValue(removeInvalidChars(newValue.join("")), {
        decimalsLimit,
        separators,
      });

      const clensedValue = removeInvalidChars(formattedValue.join(""));

      transformAnims.current.pop();

      onChange?.(+clensedValue, props);
      setValues(formattedValue);
    }
  };

  const clearInput = () => {
    transformAnims.current = [new Animated.Value(0)];
    onChange?.(0, props);
    setValues(["0"]);
  };

  return (
    <Row
      verticalAlign="top"
      horizontalAlign={horizontalAlign}
      style={StyleSheet.flatten([{ overflow: "hidden" }, containerStyle])}
    >
      {prefix && (
        <Text
          style={StyleSheet.flatten([
            {
              color: theme[mode].lightTextColor,
              fontSize: size,
            },
            error && {
              color: theme.error.textColor,
            },
            prefixStyle,
          ])}
        >
          {prefix}
        </Text>
      )}
      {values.map((value, idx) => (
        <Animated.View
          key={idx}
          style={StyleSheet.flatten([
            {
              transform: [
                {
                  translateY: transformAnims.current[idx],
                },
              ],
            },
            inputContainerStyle,
          ])}
        >
          <Typography
            size={size * 2}
            variant="h6"
            style={StyleSheet.flatten([
              error && {
                color: theme.error.textColor,
              },
              inputTextStyle,
            ])}
            onPress={handleFocus}
          >
            {value}
          </Typography>
        </Animated.View>
      ))}
      <Animated.View
        style={StyleSheet.flatten([
          {
            width: 2,
            height: size * 2.5,
            marginHorizontal: 5,
            backgroundColor: "#2185d0",
            opacity: opacityAnim.current,
          },
          cursorStyle,
        ])}
      />
      <View
        style={{
          position: "absolute",
          opacity: 0,
        }}
      >
        <TextInput
          ref={ref}
          keyboardType="numeric"
          autoFocus={true}
          value=""
          onChangeText={handleChange}
          onKeyPress={handleKeyPress}
          onBlur={handleBlur}
          {...inputProps}
        />
      </View>
      {showClearIcon && <Icon name="close" size={size * 1.25} {...icon} onPress={clearInput} />}
    </Row>
  );
};

export interface CurrencyInputProps extends StrictCurrencyInputProps {
  [k: string]: any;
}

export interface StrictCurrencyInputProps {
  /** Custom outermost container style. */
  containerStyle?: StyleProp<ViewStyle>;

  /** Custom cursor style. */
  cursorStyle?: StyleProp<ViewStyle>;

  /** Custom cursor animation config. */
  cursorAnim?: Animated.TimingAnimationConfig;

  /** Limit length of decimals allowed. */
  decimalsLimit?: number;

  /** Default value. */
  defaultValue?: number;

  /** An Input field can show the data contains errors. */
  error?: boolean;

  /** Align the component horizontally. */
  horizontalAlign?: RowProps["horizontalAlign"];

  /** Shorthand for icon. */
  icon?: IconProps;

  /** Custom input container style. */
  inputContainerStyle?: StyleProp<ViewStyle>;

  /** Custom input props. */
  inputProps?: any;

  /** Custom input text animation config. */
  inputTextAnim?: Animated.SpringAnimationConfig;

  /** Custom input text style. */
  inputTextStyle?: StyleProp<TextStyle>;

  /** Called on blur. */
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>, data: CurrencyInputProps) => void;

  /** Called on change. */
  onChange?: (value: number, data: CurrencyInputProps) => void;

  /** Called on focus. */
  onFocus?: (e: NativeSyntheticEvent<any>, data: CurrencyInputProps) => void;

  /** An input can be descriptive. e.g) $ */
  prefix?: string;

  /** Custom prefix style. */
  prefixStyle?: StyleProp<TextStyle>;

  /** An input can format number with commas as thousands separators.  */
  separators?: boolean;

  /** Show clear icon that clears the input field. */
  showClearIcon?: boolean;

  /** An input can have different sizes. */
  size?: number;
}

export default CurrencyInput;

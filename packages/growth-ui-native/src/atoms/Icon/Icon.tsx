import React, { FC, useContext, useEffect, useRef } from "react";
import theme from "../../theme";
import ThemeContext from "../../ThemeContext";
import { COLORS, GrowthICONS } from "../../types";
import { createShorthandFactory } from "../../utils";
import { getIconComponent } from "./helpers";
import { isNil } from "lodash";
import {
  Animated,
  GestureResponderEvent,
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

const Icon: FC<IconProps> & IconComponents = (props) => {
  const {
    children,
    color,
    containerStyle,
    duration = 300,
    flipped,
    inverted,
    name,
    onPress,
    rotated,
    rotateDirection = "clockwise",
    size = 16,
    to = 90,
    ...rest
  } = props;

  const { mode } = useContext(ThemeContext);
  const reverseMode = mode === "dark" ? "light" : "dark";

  const rotationAnim = useRef(new Animated.Value(flipped || rotated ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(rotationAnim, {
      duration,
      toValue: flipped || rotated ? 1 : 0,
      useNativeDriver: true,
    }).start();
  }, [flipped, rotated]);

  const getIconColor = () => {
    if (inverted && color === "white") {
      return theme.light.iconColor;
    }

    if (inverted && color) {
      return theme.colors.white;
    }

    if (color) {
      return theme.colors[color] || color;
    }

    return theme[mode].iconColor;
  };

  const getBackgroundColor = () => {
    if (color && inverted) {
      return theme.colors[color];
    }

    if (inverted) {
      return theme[reverseMode].iconColor;
    }
  };

  const getShadow = () => {
    if (inverted) {
      return {
        shadowColor: theme[reverseMode].backgroundColor,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
      };
    }

    return {};
  };

  const computeRotationDegree = () => {
    if (!isNil(flipped)) {
      return {
        inputRange: [0, 1],
        outputRange: ["0deg", "-180deg"],
      };
    }

    if (!isNil(rotated) && rotateDirection === "clockwise") {
      return {
        inputRange: [0, 1],
        outputRange: ["0deg", `${to}deg`],
      };
    }

    if (!isNil(rotated) && rotateDirection === "counterclockwise") {
      return {
        inputRange: [0, 1],
        outputRange: ["0deg", `${to * -1}deg`],
      };
    }

    return {
      inputRange: [0, 1],
      outputRange: ["0deg", "0deg"],
    };
  };

  const handlePress = (e: GestureResponderEvent) => {
    onPress && onPress(e, props);
  };

  const renderSVGIcon = () => {
    if (children && React.Children.only(children)) {
      return children;
    }

    if (name) {
      return getIconComponent(name);
    }

    return null;
  };

  const IconComponent = renderSVGIcon();

  const rotationInterpolation = rotationAnim.interpolate(computeRotationDegree());

  return (
    <Animated.View
      {...rest}
      style={StyleSheet.flatten([
        {
          height: inverted ? size * 1.7 + 4 : size,
          width: inverted ? size * 1.7 + 4 : size,
          transform: [
            {
              rotate: rotationInterpolation,
            },
          ],
        },
        containerStyle,
      ])}
    >
      <Pressable onPress={handlePress}>
        <View
          style={StyleSheet.flatten([
            inverted && {
              borderRadius: size + 4,
              height: size * 1.7 + 4,
              width: size * 1.7 + 4,
              backgroundColor: getBackgroundColor(),
              alignItems: "center",
              justifyContent: "center",
              ...getShadow(),
            },
          ])}
        >
          {IconComponent && (
            <IconComponent
              name={name}
              color={getIconColor()}
              width={`${size}`}
              height={`${size}`}
            />
          )}
        </View>
      </Pressable>
    </Animated.View>
  );
};

Icon.create = createShorthandFactory(Icon, (name: GrowthICONS) => ({ name }));

interface IconComponents {
  create: ReturnType<typeof createShorthandFactory>;
}

export interface IconProps extends StrictIconProps {
  [k: string]: any;
}

interface StrictIconProps {
  /** Children. (Custom Icon) */
  children?: React.ReactNode;

  /** Color of the icon. */
  color?: COLORS;

  /** Custom container style */
  containerStyle?: StyleProp<ViewStyle>;

  /** Icon animation duration. */
  duration?: number;

  /** Icon can be flipped. */
  flipped?: boolean;

  /** Formatted to have its colors inverted for contrast. */
  inverted?: boolean;

  /** Name of the icon. */
  name: GrowthICONS;

  /** Called on pressed */
  onPress?: (e: GestureResponderEvent, data: IconProps) => void;

  /** Icon can be rotated. */
  rotated?: boolean;

  /** Icon can be rotated. */
  rotateDirection?: "clockwise" | "counterclockwise";

  /** Size of the icon. */
  size?: number;

  /** Icon can be roated up to customized degree. */
  to?: number;
}

export default Icon;

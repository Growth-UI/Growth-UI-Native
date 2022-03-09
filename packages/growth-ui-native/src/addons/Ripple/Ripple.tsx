import React, { FC, useEffect, useRef, useState } from "react";
import {
  StyleProp,
  StyleSheet,
  Animated,
  View,
  ViewStyle,
  TouchableWithoutFeedback,
  GestureResponderEvent,
} from "react-native";

const Ripple: FC<RippleProps> = (props) => {
  const { color = "#e0e1e2", duration = 805, onPress, ...rest } = props;

  const [ripples, setRipples] = useState<Record<string, number>[]>([]);

  const ref = useRef<View>(null);
  const opacityAnims = useRef<Animated.Value[]>([]).current;
  const scaleAnims = useRef<Animated.Value[]>([]).current;

  useEffect(() => {
    let mounted = true;
    let bounce: NodeJS.Timeout;

    if (ripples.length > 0 && mounted) {
      Animated.parallel([
        Animated.timing(opacityAnims[ripples.length - 1], {
          toValue: 0,
          duration,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnims[ripples.length - 1], {
          toValue: 2,
          duration,
          useNativeDriver: true,
        }),
      ]).start();

      bounce = setTimeout(() => {
        if (mounted) {
          opacityAnims.length = 0;
          scaleAnims.length = 0;
          setRipples([]);
          clearTimeout(bounce);
        }
      }, duration);
    }

    return () => {
      mounted = false;
      clearTimeout(bounce);
    };
  }, [ripples.length, duration]);

  const handlePress = (e: GestureResponderEvent) => {
    const { pageX, pageY } = e.nativeEvent;

    ref.current?.measure((_, __, w, h, left, top) => {
      const size = w > h ? w : h;
      const x = pageX - left - size / 2;
      const y = pageY - top - size / 2;

      const newRipple = {
        x,
        y,
        size,
      };

      opacityAnims.push(new Animated.Value(0.75));
      scaleAnims.push(new Animated.Value(0));

      setRipples([...ripples, newRipple]);
    });

    onPress && onPress(e);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View
        {...rest}
        ref={ref}
        style={StyleSheet.flatten([
          {
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 100,
          },
        ])}
      >
        {ripples.map(({ x, y, size }, index) => (
          <Animated.View
            key={index}
            style={StyleSheet.flatten([
              {
                position: "absolute",
                borderRadius: 500,
                top: y,
                left: x,
                width: size,
                height: size,
                backgroundColor: color,
                opacity: opacityAnims[index],
                transform: [
                  {
                    scale: scaleAnims[index],
                  },
                ],
              },
            ])}
          />
        ))}
      </View>
    </TouchableWithoutFeedback>
  );
};

// ======================================================
export interface RippleProps extends StrictRippleProps {
  [k: string]: any;
}

// ======================================================
export interface StrictRippleProps {
  /** A ripple may have different color. */
  color?: string;

  /** Durtation of the ripple effect. */
  duration?: number;

  /** Called after user's press. */
  onPress?: (event: GestureResponderEvent) => void;

  /** Custom style. */
  style?: StyleProp<ViewStyle>;
}

export default Ripple;

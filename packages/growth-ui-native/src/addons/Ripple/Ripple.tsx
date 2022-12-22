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
  const mounted = useRef(true);
  const opacityAnims = useRef<Animated.Value[]>([]);
  const scaleAnims = useRef<Animated.Value[]>([]);

  useEffect(() => {
    let bounce: any;

    if (ripples.length > 0) {
      Animated.parallel([
        Animated.timing(opacityAnims.current[ripples.length - 1], {
          toValue: 0,
          duration,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnims.current[ripples.length - 1], {
          toValue: 2,
          duration,
          useNativeDriver: true,
        }),
      ]).start();

      bounce = setTimeout(() => {
        if (mounted.current) {
          opacityAnims.current = [];
          scaleAnims.current = [];
          setRipples([]);
          clearTimeout(bounce);
        }
      }, duration);
    }

    return () => {
      if (bounce) {
        clearTimeout(bounce);
      }
    };
  }, [ripples, duration, opacityAnims, scaleAnims]);

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

      opacityAnims.current.push(new Animated.Value(0.75));
      scaleAnims.current.push(new Animated.Value(0));

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
                opacity: opacityAnims.current[index],
                transform: [
                  {
                    scale: scaleAnims.current[index],
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

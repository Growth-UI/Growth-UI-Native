import Icon, { IconProps } from "../../atoms/Icon";
import React, { Children, FC, useCallback, useEffect, useRef, useState } from "react";
import SpeedDialAction from "./SpeedDialAction";
import {
  Animated,
  GestureResponderEvent,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import { SX } from "../../types";
import { sx } from "../../utils";

const SpeedDial: FC<SpeedDialProps> & SpeedDialComponents = (props) => {
  const {
    children,
    color,
    containerStyle,
    icon,
    interval = 30,
    onClose,
    onOpen,
    open,
    overlayColor,
    transitionDuration = 150,
    ...rest
  } = props;
  const [isOpen, setIsOpen] = useState(open);
  const count = Children.count(children);

  const opacityAnim = useRef(new Animated.Value(!isOpen ? 1 : 0)).current;
  const actionAnims = useRef(new Array(count).fill(0).map(() => new Animated.Value(0))).current;

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacityAnim, {
        duration: transitionDuration,
        toValue: !isOpen ? 0 : 1,
        useNativeDriver: false,
      }),
      ...actionAnims.map((_, idx) =>
        Animated.timing(actionAnims[idx], {
          duration: transitionDuration,
          toValue: isOpen ? 1 : 0,
          useNativeDriver: false,
          delay: (count - (idx + 1)) * interval,
        })
      ),
    ]).start();
  }, [isOpen, transitionDuration]);

  const handlePress = (e: GestureResponderEvent) => {
    if (isOpen) {
      onClose?.(e, { ...props, open: false });
    } else {
      onOpen?.(e, { ...props, open: true });
    }

    setIsOpen(!isOpen);
  };

  const renderIcon = useCallback(() => {
    if (icon) {
      return <Icon color="white" size={25} {...icon} />;
    }

    return (
      <Icon
        color="white"
        name="plus"
        size={25}
        to={45}
        rotated={isOpen}
        rotateDirection="counterclockwise"
      />
    );
  }, [isOpen, icon]);

  return (
    <View {...rest} style={[styles.container, containerStyle]} pointerEvents="box-none">
      {/* For overlay  */}
      <Pressable
        onPress={handlePress}
        style={[StyleSheet.absoluteFillObject]}
        pointerEvents={isOpen ? "auto" : "none"}
        onStartShouldSetResponderCapture={() => true}
      >
        <Animated.View
          style={[
            StyleSheet.absoluteFillObject,
            {
              opacity: opacityAnim,
              backgroundColor: overlayColor || "transparent",
            },
          ]}
        />
      </Pressable>

      {/* SpeedDial */}
      <SafeAreaView pointerEvents="box-none" style={styles.safeArea}>
        {Children.map(children, (child, idx) => (
          <Animated.View
            pointerEvents={isOpen ? "auto" : "none"}
            key={idx}
            style={{
              opacity: actionAnims[idx],
            }}
          >
            {child}
          </Animated.View>
        ))}

        <Pressable
          style={StyleSheet.flatten([
            styles.speedDial,
            {
              backgroundColor: color || "#1976d2",
            },
            sx(props.sx),
          ])}
          onPress={handlePress}
          onStartShouldSetResponderCapture={() => true}
        >
          {renderIcon()}
        </Pressable>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    alignItems: "flex-end",
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
  },
  speedDial: {
    margin: 16,
    marginTop: 0,
    borderRadius: 500,
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
});

SpeedDial.Action = SpeedDialAction;

export interface SpeedDialComponents {
  Action: typeof SpeedDialAction;
}

// ======================================================
export interface SpeedDialProps extends StrictSpeedDialProps {
  [k: string]: any;
}

// ======================================================
export interface StrictSpeedDialProps {
  /** Color of the SpeedDial Fab. */
  color?: string;

  /** The icon to display in the SpeedDial Fab. */
  icon?: IconProps;

  /** Animation interval. */
  interval?: number;

  /** Called on close dial. */
  onClos?: (e: GestureResponderEvent, data: SpeedDialProps) => void;

  /** Called on open dial. */
  onOpen?: (e: GestureResponderEvent, data: SpeedDialProps) => void;

  /** If true, the component is shown. */
  open?: boolean;

  /** Overlay color to the speed dial. */
  overlayColor?: string;

  /** Accepts all system properties. */
  sx?: SX;

  /** The duration for the transition, in milliseconds. */
  transitionDuration?: number;
}

export default SpeedDial;

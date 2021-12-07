import React, { FC, useEffect, useRef, useState } from "react";
import { Animated, LayoutChangeEvent, StyleProp, StyleSheet, View, ViewStyle } from "react-native";

const Collapse: FC<CollapseProps> = (props) => {
  const { children, expanded = false, style = {}, ...rest } = props;

  const [height, setHeight] = useState(0);

  const ref = useRef<View>(null);
  const heightAnim = useRef(new Animated.Value(!expanded ? height : 0)).current;
  const opacityAnim = useRef(new Animated.Value(!expanded ? 1 : 0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(heightAnim, {
        duration: 400,
        toValue: !expanded ? 0 : height,
        useNativeDriver: false,
      }),
      Animated.timing(opacityAnim, {
        duration: 400,
        toValue: !expanded ? 0 : 1,
        useNativeDriver: false,
      }),
    ]).start();
  }, [expanded, height]);

  const handleLayout = (event: LayoutChangeEvent) => {
    setHeight(event.nativeEvent.layout.height);
  };

  return (
    <Animated.View
      {...rest}
      ref={ref}
      style={StyleSheet.flatten([
        {
          height: heightAnim,
          opacity: opacityAnim,
          overflow: "hidden",
        },
        style,
      ])}
    >
      {children}
      <View
        onLayout={handleLayout}
        pointerEvents="none"
        style={StyleSheet.flatten([
          {
            position: "absolute",
            opacity: 0,
            zIndex: -1,
          },
        ])}
      >
        {children}
      </View>
    </Animated.View>
  );
};

// ======================================================
export interface CollapseProps extends StrictCollapseProps {
  [k: string]: any;
}

// ======================================================
export interface StrictCollapseProps {
  /** If true, the component will transition in. */
  expanded?: boolean;

  /** Custom Style. */
  style?: StyleProp<ViewStyle>;
}

export default Collapse;

import ListContent from "./ListContent";
import React, {
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Ripple from "../../addons/Ripple";
import Row, { RowProps } from "../../atoms/Row";
import theme from "../../theme";
import ThemeContext from "../../ThemeContext";
import Typography from "../../atoms/Typography";
import { createChildren, ScreenWidth } from "../../utils";
import {
  Animated,
  GestureResponderEvent,
  PanResponder,
  PanResponderGestureState,
  Pressable,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

const ListItem: FC<ListItemProps> = (props) => {
  const {
    active,
    children,
    divided,
    index,
    isLast,
    leftContent,
    max = 0.6,
    onPress,
    padded,
    relaxed,
    rightContent,
    ripple,
    rippleColor = "#f5f5f5",
    style,
    swipeable,
    text,
    textStyle,
    verticalAlign,
  } = props;

  const { mode } = useContext(ThemeContext);

  const [rectWidth, setRectWidth] = useState<number>(ScreenWidth);
  const [leftItemWidth, setLeftItemWidth] = useState<number>(ScreenWidth / 3);
  const [rightItemWidth, setRightItemWidth] = useState<number>(ScreenWidth / 3);

  const panAnim = useRef(new Animated.Value(0)).current;
  const currValue = React.useRef(0);

  const newChildren = createChildren(children, { defaultProps: { isLast } });

  useEffect(() => {
    const listener = panAnim.addListener(({ value }) => {
      currValue.current = value;
    });

    return () => {
      panAnim.removeListener(listener);
    };
  }, [panAnim]);

  const handlePress = (e: GestureResponderEvent) => {
    onPress && onPress(e, props);

    slideAnimation(0);
  };

  const slideAnimation = useCallback(
    (toValue: number) => {
      Animated.spring(panAnim, {
        toValue,
        useNativeDriver: true,
      }).start();
    },
    [panAnim]
  );

  const handleSwipe = (_: GestureResponderEvent, { dx }: PanResponderGestureState) => {
    if (!swipeable || (dx > 0 && !leftContent) || (dx < 0 && !rightContent)) {
      return;
    }

    const sign = dx > 0 ? 1 : -1;
    const maxRangeToSwipe = sign * Math.min(Math.abs(dx), rectWidth * max);

    panAnim.setValue(maxRangeToSwipe);
  };

  const handleRelease = () => {
    if (Math.abs(currValue.current) >= rectWidth / 3) {
      slideAnimation(currValue.current > 0 ? leftItemWidth : -rightItemWidth);
    } else {
      slideAnimation(0);
    }
  };

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onPanResponderGrant: () => false,
        onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
          const { dx, dy } = gestureState;
          const swiping = dx > 2 || dx < -2 || dy > 2 || dy < -2;

          if (swiping) {
            return true;
          }

          return false;
        },
        onPanResponderTerminationRequest: () => false,
        onPanResponderMove: handleSwipe,
        onPanResponderRelease: handleRelease,
      }),
    [rectWidth, leftItemWidth, rightItemWidth]
  );

  return (
    <View
      style={StyleSheet.flatten([
        divided &&
          index !== 0 && {
            borderTopWidth: 1,
            borderColor: theme[mode].border,
          },
      ])}
    >
      <Row wrap={false} horizontalAlign="space-between" style={StyleSheet.flatten([styles.hidden])}>
        <View onLayout={({ nativeEvent }) => setLeftItemWidth(nativeEvent.layout.width)}>
          {leftContent}
        </View>
        <View style={{ flex: 0 }} />
        <View onLayout={({ nativeEvent }) => setRightItemWidth(nativeEvent.layout.width)}>
          {rightContent}
        </View>
      </Row>
      <Animated.View
        style={StyleSheet.flatten([
          {
            backgroundColor: theme[mode].backgroundColor,
            padding: text ? 3 : 8,
            transform: [
              {
                translateX: panAnim,
              },
            ],
            overflow: "hidden",
            zIndex: 2,
          },
          padded && { padding: 14 },
          relaxed && { padding: 20 },
          style,
        ])}
        onLayout={({ nativeEvent }) => setRectWidth(nativeEvent.layout.width)}
        {...panResponder.panHandlers}
      >
        <Pressable onPress={handlePress}>
          <Row verticalAlign={verticalAlign}>
            {text ? (
              <ListContent isLast={isLast}>
                <Typography
                  style={StyleSheet.flatten([
                    active && {
                      fontWeight: "bold",
                    },
                    textStyle,
                  ])}
                >
                  {text}
                </Typography>
              </ListContent>
            ) : (
              newChildren
            )}
          </Row>
        </Pressable>
        {ripple && <Ripple color={rippleColor} onPress={handlePress} />}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  hidden: {
    bottom: 0,
    left: 0,
    overflow: "hidden",
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 1,
    flex: 1,
  },
});

// ======================================================
export interface ListItemProps extends StrictListItemProps {
  [k: string]: any;
}

// ======================================================
export interface StrictListItemProps {
  /** A list item can active. */
  active?: boolean;

  /** A list can show divisions between content. */
  divided?: boolean;

  /** Left hidden item. */
  leftContent?: ReactNode;

  /** Max swipe range to allow.  */
  max?: number;

  /** Called after user's press. */
  onPress?: (event: GestureResponderEvent, data: ListItemProps) => void;

  /** A list item can relax its padding to provide more negative space. */
  padded?: boolean;

  /** A list item can relax its padding to provide even more negative space. */
  relaxed?: boolean;

  /** Right hidden item. */
  rightContent?: ReactNode;

  /** A ripple effect to give users feedback in a simple, elegant way. */
  ripple?: boolean;

  /** Custom style. */
  style?: StyleProp<ViewStyle>;

  /** A list item can be swipeable to show hidden items. */
  swipeable?: boolean;

  /** A simple text for an list. */
  text?: string;

  /** Custom text style. */
  textStyle?: StyleProp<TextStyle>;

  /** An element inside a item can be vertically aligned. */
  verticalAlign?: RowProps["verticalAlign"];
}

export default ListItem;

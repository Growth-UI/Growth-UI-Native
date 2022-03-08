import Icon, { IconProps } from "../../atoms/Icon";
import max from "lodash/max";
import Row from "../../atoms/Row";
import theme from "../../theme";
import ThemeContext from "../../ThemeContext";
import Typography from "../../atoms/Typography";
import { SX } from "../../types";
import { sx } from "../../utils";
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
import {
  Animated,
  LayoutChangeEvent,
  LayoutRectangle,
  Pressable,
  PanResponder,
  PanResponderGestureState,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  GestureResponderEvent,
  useWindowDimensions,
} from "react-native";

const Tab: FC<TabProps> = (props) => {
  const {
    activeIndex = 0,
    disableIndicator,
    indicatorStyle,
    indicatorAnimConfig,
    rounded,
    slideAnimationConfig,
    tabStyle,
    tabItemStyle,
    tabPaneStyle,
    panes,
    onTabChange,
  } = props;
  const { mode } = useContext(ThemeContext);
  const [index, setIndex] = useState(+activeIndex);
  const [tabItemLayouts, setTabItemLayouts] = React.useState<Record<number, LayoutRectangle>>({});

  const window = useWindowDimensions();
  const slideAnim = React.useRef(new Animated.Value(index * -window.width)).current;
  const indicatorAnim = useRef(new Animated.Value(index)).current;

  useEffect(() => {
    setIndex(+activeIndex);
  }, [activeIndex]);

  useEffect(() => {
    Animated.timing(indicatorAnim, {
      duration: 150,
      toValue: index,
      useNativeDriver: true,
      ...indicatorAnimConfig,
    }).start();
  }, [index, indicatorAnim]);

  const slideAnimation = useCallback(
    (toValue: number) => {
      Animated.spring(slideAnim, {
        toValue,
        useNativeDriver: true,
        ...slideAnimationConfig,
      }).start();
    },
    [slideAnim]
  );

  const handleSwipe = (_: GestureResponderEvent, { dx }: PanResponderGestureState) => {
    const { length } = panes;

    if ((dx > 0 && index <= 0) || (dx < 0 && index >= length - 1)) {
      return;
    }

    slideAnim.setValue(-window.width * index + dx);
  };

  const handleRelease = (e: GestureResponderEvent, { dx }: PanResponderGestureState) => {
    const { length } = panes;

    if ((index <= 0 && dx > 0) || (index >= length - 1 && dx < 0)) {
      return;
    }

    /**
     * Used below logic instead of Math.abs
     * because babel throws "Couldn't find interection error"
     */
    let abs = dx;
    if (dx < 0) abs *= -1;

    if (abs >= window.width * 0.15) {
      const nextIndex = dx > 0 ? index - 1 : index + 1;

      handleItemClick(nextIndex)(e);
    } else {
      slideAnimation(0);
    }
  };

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onPanResponderGrant: () => false,
        onMoveShouldSetPanResponderCapture: (_, gestureState) => {
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
    [index]
  );

  const indicatorTransitionInterpolate = useMemo(() => {
    const { length } = panes;

    if (length < 2) {
      return 0;
    }

    const inputRange = [...Array(length).keys()];
    const outputRange = Object.keys(tabItemLayouts).map((k: any) => tabItemLayouts[k].x - 1);

    if (inputRange.length !== outputRange.length) {
      return 0;
    }

    return indicatorAnim.interpolate({
      inputRange,
      outputRange,
    });
  }, [tabItemLayouts]);

  const handleLayout = (idx: number) => (e: LayoutChangeEvent) => {
    setTabItemLayouts({
      ...tabItemLayouts,
      [idx]: e.nativeEvent.layout,
    });
  };

  const handleItemClick = (idx: number) => (e: GestureResponderEvent) => {
    onTabChange?.(e, { ...props, activeIndex: idx });
    setIndex(idx);
    slideAnimation(idx * -window.width);
  };

  const HEIGHT = max(Object.keys(tabItemLayouts).map((k: any) => tabItemLayouts[k].height));

  return (
    <View style={{ flex: 1 }}>
      <Row
        verticalAlign="middle"
        style={StyleSheet.flatten([
          { backgroundColor: mode === "dark" ? "#363535" : "#e8e8e8" },
          rounded && { padding: 5, borderRadius: 500 },
          props.sx && sx(props.sx),
          tabStyle,
        ])}
      >
        {panes.map(({ title, icon }: any, idx: number) => (
          <Pressable
            key={idx}
            style={StyleSheet.flatten([
              styles.tabItem,
              rounded && { borderRadius: 500 },
              tabItemStyle,
            ])}
            onLayout={handleLayout(idx)}
            onPress={handleItemClick(idx)}
            onStartShouldSetResponderCapture={() => true}
          >
            {icon && (
              <Row horizontalAlign="center">
                <Icon size={25} {...icon} />
              </Row>
            )}
            {title && (
              <Typography
                textAlign="center"
                style={StyleSheet.flatten([idx === index && { fontWeight: "700" }])}
              >
                {title}
              </Typography>
            )}
          </Pressable>
        ))}
        {!disableIndicator && (
          <Animated.View
            style={StyleSheet.flatten([
              styles.activeIndicator,
              !rounded && {
                bottom: 0,
                backgroundColor: theme[mode].border,
                height: 2,
                width: tabItemLayouts[index]?.width || 0,
                transform: [{ translateX: indicatorTransitionInterpolate }],
              },
              rounded && {
                borderRadius: 500,
                borderWidth: 1,
                borderColor: theme[mode].border,
                backgroundColor: theme[mode].backgroundColor,
                width: (tabItemLayouts[index]?.width || 0) + 2,
                height: (HEIGHT || 0) + 2,
                top: 4,
                transform: [{ translateX: indicatorTransitionInterpolate }],
              },
              indicatorStyle,
            ])}
          />
        )}
      </Row>
      <Animated.View
        style={StyleSheet.flatten([
          {
            flex: 1,
            flexDirection: "row",
            width: window.width * panes.length,
            transform: [
              {
                translateX: slideAnim,
              },
            ],
            backgroundColor: theme[mode].backgroundColor,
          },
        ])}
        {...panResponder.panHandlers}
      >
        {panes.map(({ render, title }: any, idx: number) => (
          <View key={`${idx}-${title}`} style={StyleSheet.flatten([{ flex: 1 }, tabPaneStyle])}>
            {render(props)}
          </View>
        ))}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabItem: {
    flex: 1,
    backgroundColor: "transparent",
    padding: 10,
  },
  activeIndicator: {
    position: "absolute",
    zIndex: -1,
  },
});

// ======================================================
export interface TabProps extends StrictTabProps {
  [k: string]: any;
}

// ======================================================
export interface StrictTabProps {
  /** Index of the currently active tab. */
  activeIndex?: number | string;

  /** Disable the active indicator. */
  disableIndicator?: boolean;

  /** Additional styling for tab indicator. */
  indicatorStyle?: StyleProp<ViewStyle>;

  /** Define the indicator animation configurations. */
  indicatorAnimConfig?: Omit<Animated.TimingAnimationConfig, "toValue">;

  /** Called on tab change */
  onTabChange?: (e: GestureResponderEvent, data: TabProps) => void;

  /** Rounded shape. */
  rounded?: boolean;

  /** Define the slide animation configurations. */
  slideAnimationConfig?: Omit<
    Animated.SpringAnimationConfig & Animated.TimingAnimationConfig,
    "toValue"
  >;

  /** System props. */
  sx?: SX;

  /** Additional styling for tab  */
  tabStyle?: StyleProp<ViewStyle>;

  /** Additional styling for tab item  */
  tabItemStyle?: StyleProp<ViewStyle>;

  /** Additional styling for tab pane  */
  tabPaneStyle?: StyleProp<ViewStyle>;

  /** Array of objects describing each Tab item and Tab pane. */
  panes: Array<{
    title?: string;
    icon?: IconProps;
    render: (props: TabProps) => ReactNode;
  }>;
}

export default Tab;

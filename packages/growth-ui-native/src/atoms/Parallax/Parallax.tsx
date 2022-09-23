import React, { FC, ReactElement, ReactNode, useRef } from "react";
import { getStatusBarHeight } from "../../utils/status-bar-height";
import {
  Animated,
  Dimensions,
  View,
  StyleSheet,
  ListRenderItemInfo,
  RefreshControlProps,
} from "react-native";

const window = Dimensions.get("window");

const pivotPoint = (a: number, b: number) => a - b;

// Override `toJSON` of interpolated value because of
// an error when serializing style on view inside inspector.
const interpolate = (
  value: Animated.AnimatedInterpolation,
  opts: Animated.InterpolationConfigType
) => {
  const x = value.interpolate(opts);
  (x as any).toJSON = () => (x as any).__getValue();

  return x;
};

const Parallax: FC<ParallaxProps> = (props) => {
  const {
    data,
    headerHeight = 100,
    Background,
    FixedHeader,
    Header,
    parallaxHeaderHeight = 270,
    StickyHeader,
    onEndReached,
    renderItem,
    ...rest
  } = props;
  const scrollY = useRef(new Animated.Value(0)).current;
  const flatListReady = useRef(false);

  const offsetHeight = Header ? headerHeight : 0;
  const newData = StickyHeader ? [{}, {}, ...data] : data;

  const handleEndReached = () => {
    if (flatListReady.current) {
      onEndReached?.();
    }
  };

  /**
   * Renderer
   */
  const renderBackgroundImage = () => {
    const p = pivotPoint(parallaxHeaderHeight, headerHeight);

    return (
      <Animated.View
        style={[
          {
            width: window.width,
            height: parallaxHeaderHeight,
          },
          styles.backgroundImage,
        ]}
      >
        <View>{Background}</View>
      </Animated.View>
    );
  };

  const renderHeader = () => {
    const p = pivotPoint(parallaxHeaderHeight, headerHeight);

    return (
      <Animated.View
        style={[
          styles.headerStyle,
          {
            width: window.width,
            height: headerHeight,
            paddingTop: getStatusBarHeight(),
            opacity: interpolate(scrollY, {
              inputRange: [0, p],
              outputRange: [0, 1],
              extrapolate: "clamp",
            }),
          },
        ]}
      >
        {Header}
      </Animated.View>
    );
  };

  const renderFixedHeader = () => {
    return (
      <View
        style={{
          position: "absolute",
          top: getStatusBarHeight(),
          backgroundColor: "transparent",
          zIndex: 2,
        }}
      >
        {FixedHeader}
      </View>
    );
  };

  const renderListItem = ({ index, ...info }: ListRenderItemInfo<any>) => {
    if (StickyHeader && index === 0) {
      return (
        <View
          style={{
            marginTop: offsetHeight,
          }}
        >
          {StickyHeader}
        </View>
      );
    }

    if (StickyHeader && index === 1) return null;

    return renderItem({ index, ...info });
  };

  return (
    <>
      {Header && renderHeader()}
      {FixedHeader && renderFixedHeader()}
      {Background && renderBackgroundImage()}
      <Animated.FlatList
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        data={newData}
        onEndReachedThreshold={0.1}
        stickyHeaderIndices={StickyHeader ? [1] : []}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
          useNativeDriver: true,
          listener: () => {
            if (!flatListReady.current) {
              flatListReady.current = true;
            }
          },
        })}
        ListHeaderComponent={
          <View
            style={{
              paddingTop: StickyHeader ? parallaxHeaderHeight - offsetHeight : parallaxHeaderHeight,
            }}
          />
        }
        renderItem={renderListItem}
        onEndReached={handleEndReached}
        {...rest}
      />
    </>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    position: "absolute",
    backgroundColor: "white",
    top: 0,
    left: 0,
    zIndex: 1,
    overflow: "hidden",
  },
  backgroundImage: {
    position: "absolute",
    backgroundColor: "transparent",
    overflow: "hidden",
    top: 0,
    zIndex: -1,
  },
});

// ======================================================
export interface ParallaxProps extends StrictParallaxProps {
  [k: string]: any;
}

// ======================================================
export interface StrictParallaxProps {
  /** This is data that gets passed on to the FlatList Element. It is used to render items list. */
  data: Array<any>;

  /** The height of the header that renders on the very top of screen. */
  headerHeight?: number;

  /** Called once when the scroll position gets within onEndReachedThreshold of the rendered content. */
  onEndReached?: () => void;

  /**
   * How far from the end (in units of visible length of the list) the bottom edge of the
   * list must be from the end of the content to trigger the `onEndReached` callback.
   * Thus a value of 0.5 will trigger `onEndReached` when the end of the content is
   * within half the visible length of the list.
   */
  onEndReachedThreshold?: number;

  /** The height of parallax header. */
  parallaxHeaderHeight: number;

  /**
   * A RefreshControl component, used to provide pull-to-refresh
   * functionality for the ScrollView.
   */
  refreshControl?: ReactElement<RefreshControlProps>;

  /** Takes an item from data and renders it into the list */
  renderItem: (info: ListRenderItemInfo<any>) => ReactElement | null;

  /** The background of the parallax header. */
  Background?: ReactNode;

  /** The fixed header that will always be visible and fixed to the top of the view. */
  FixedHeader?: ReactNode;

  /** Rendered at the very top of the screen. */
  Header?: ReactNode;

  /** The sticky header that will stick to the bottom of Background Element when parallax header scrolls up. */
  StickyHeader?: ReactNode;
}

export default Parallax;

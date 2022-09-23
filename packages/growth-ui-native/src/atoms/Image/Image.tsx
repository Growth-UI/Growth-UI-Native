import isNil from "lodash/isNil";
import React, { FC, useContext, useEffect, useRef, useState } from "react";
import theme from "../../theme";
import ThemeContext from "../../ThemeContext";
import { Animated, ImageStyle, StyleProp, StyleSheet, View } from "react-native";
import { getImageHeightFitWidth, getImageWidthByPercentage } from "./helpers";
import { IntersectionObserver, partitionNativeProps, nativeImageProps } from "../../utils";

const Image: FC<ImageProps> = (props) => {
  const {
    bordered,
    centered,
    circular,
    height,
    hidden,
    lazy = true,
    placeholder,
    rounded,
    src,
    style,
    width = "100%",
    ...unhandledProps
  } = props;

  const { mode } = useContext(ThemeContext);

  const [state, setState] = useState<Record<string, any>>({
    loading: lazy,
    width,
    height: height || 0,
  });

  const ref = useRef<View>(null);
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (state.loading) {
      const observer = new IntersectionObserver((entry) => {
        const { isIntersecting } = entry;

        if (isIntersecting) {
          setState({ ...state, loading: false });
        }
      });

      observer.observe(ref);

      return () => observer.unobserve();
    }

    if (!state.loading) {
      (async function () {
        let newWidth = width;
        let newHeight = height;

        if (typeof width === "string") {
          newWidth = await getImageWidthByPercentage(ref.current!, width);
        }

        if (isNil(height)) {
          newHeight = await getImageHeightFitWidth(placeholder || src, newWidth as number);
        }

        setState({
          width: newWidth,
          height: newHeight,
        });
      })();
    }
  }, [state.loading, placeholder, src, width, height]);

  const handleImageLoad = () =>
    Animated.timing(opacityAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();

  const [imageProps, rest] = partitionNativeProps(unhandledProps, {
    nativeProps: nativeImageProps,
  });

  const imageStyle: Animated.AnimatedProps<StyleProp<ImageStyle>> = [
    {
      position: "absolute",
      width: state.width,
      height: state.height,
    },
    bordered && {
      borderWidth: 1,
      borderColor: theme[mode].border,
    },
    centered && {
      alignSelf: "center",
    },
    circular && { borderRadius: 500 },
    rounded && { borderRadius: 8 },
    style,
  ];

  return (
    <View
      {...rest}
      collapsable={false}
      ref={ref}
      style={StyleSheet.flatten([
        {
          position: "relative",
          width: state.width,
          height: state.height,
        },
        centered && { marginLeft: "auto", marginRight: "auto" },
        hidden && { display: "none" },
      ])}
    >
      {placeholder && (
        <Animated.Image
          {...imageProps}
          blurRadius={1}
          source={{
            uri: state.loading ? undefined : placeholder,
          }}
          style={StyleSheet.flatten([...imageStyle])}
        />
      )}
      <Animated.Image
        {...imageProps}
        source={{
          uri: state.loading ? undefined : src,
        }}
        style={StyleSheet.flatten([!isNil(placeholder) && { opacity: opacityAnim }, ...imageStyle])}
        onLoad={handleImageLoad}
      />
    </View>
  );
};

export interface ImageProps extends StrictImageProps {
  [k: string]: any;
}

interface StrictImageProps {
  /** An image may include a border to emphasize the edges of white or transparent content. */
  bordered?: boolean;

  /** An image can appear centered in a content block. */
  centered?: boolean;

  /** An image may appear circular. */
  circular?: boolean;

  /** An image's height. */
  height?: number;

  /** An image can be hidden. */
  hidden?: boolean;

  /** An image can be lazy-loaded. */
  lazy?: boolean;

  /** The src of the placeholder image */
  placeholder?: string;

  /** An image may appear rounded. */
  rounded?: boolean;

  /** The image source. */
  src: string;

  /** Custom Style. */
  style?: StyleProp<ImageStyle>;

  /** An image's width. */
  width?: number | string;
}

export default Image;

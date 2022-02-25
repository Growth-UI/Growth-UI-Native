import Typography from "../Typography";
import { DIRECTION, SX } from "../../types";
import { getTooltipStyle } from "./helpers";
import { isIOS, sx } from "../../utils";
import React, {
  FunctionComponent,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Dimensions,
  GestureResponderEvent,
  Modal,
  Platform,
  StatusBar,
  StyleProp,
  StyleSheet,
  TextStyle,
  Pressable,
  View,
  ViewStyle,
} from "react-native";

const Tooltip: FunctionComponent<TooltipProps> = (props) => {
  const {
    children,
    containerStyle,
    height = 40,
    position = "bottom center",
    skipAndroidStatusBar = false,
    textStyle,
    title,
    visible = false,
    width = 200,
    onPress,
    ...rest
  } = props;
  const [open, setOpen] = useState(false);
  const isMounted = useRef(false);
  const [dimensions, setDimensions] = useState({
    yOffset: 0,
    xOffset: 0,
    elementWidth: 0,
    elementHeight: 0,
  });
  const renderedElement = useRef<View>(null);

  const getElementPosition = useCallback(() => {
    renderedElement.current &&
      renderedElement.current.measure(
        (_frameOffsetX, _frameOffsetY, _width, _height, pageOffsetX, pageOffsetY) => {
          isMounted.current &&
            setDimensions({
              xOffset: pageOffsetX,
              yOffset:
                isIOS || skipAndroidStatusBar
                  ? pageOffsetY
                  : pageOffsetY -
                    Platform.select({
                      android: StatusBar.currentHeight,
                      ios: 20,
                      default: 0,
                    }),
              elementWidth: _width,
              elementHeight: _height,
            });
        }
      );
  }, [skipAndroidStatusBar]);

  /**
   * Calculate position of tooltip
   */
  const tooltipStyle = useMemo(
    () =>
      getTooltipStyle({
        ...dimensions,
        tooltipWidth: width,
        tooltipHeight: height,
        position,
        withPointer: false,
      }),
    [dimensions, position, width]
  );

  /**
   * Listen for element mount.
   */
  useEffect(() => {
    setOpen(visible);
  }, [visible]);

  /**
   * Listen for change in layout, i.e. Portrait or Landscape
   */
  useEffect(() => {
    isMounted.current = true;
    // Wait till element's position is calculated
    requestAnimationFrame(getElementPosition);
    Dimensions.addEventListener("change", getElementPosition);
    return () => {
      isMounted.current = false;
      Dimensions.removeEventListener("change", getElementPosition);
    };
  }, [getElementPosition]);

  const handleOnPress = useCallback(
    (e: GestureResponderEvent) => {
      getElementPosition();
      setOpen(!open);
      onPress?.(e, props);
    },
    [getElementPosition, open]
  );

  return (
    <View
      {...rest}
      collapsable={false}
      ref={renderedElement}
      style={StyleSheet.flatten([
        {
          position: "relative",
          alignSelf: "flex-start",
        },
      ])}
    >
      <Pressable onPress={handleOnPress} onStartShouldSetResponderCapture={() => true}>
        {children}
      </Pressable>
      <Modal transparent animationType="fade" visible={open}>
        <Pressable style={{ flex: 1 }} onPress={handleOnPress}>
          <View
            style={StyleSheet.flatten([
              {
                position: "absolute",
                width,
                height,
                backgroundColor: "rgba(97, 97, 97, 0.92)",
                borderRadius: 4,
                shadowColor: "#000",
                shadowOffset: { width: 1, height: 1 },
                shadowOpacity: 0.4,
                shadowRadius: 3,
                elevation: 5,
              },
              tooltipStyle,
              containerStyle,
              sx(props.sx),
            ])}
          >
            {typeof title === "string" ? (
              <Typography
                textAlign="center"
                style={StyleSheet.flatten([
                  { marginTop: "auto", marginBottom: "auto", color: "#fff" },
                  textStyle,
                ])}
              >
                {title}
              </Typography>
            ) : (
              title
            )}
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

export interface TooltipProps extends StrictTooltipProps {
  [k: string]: any;
}

interface StrictTooltipProps {
  /** Tooltip container height. Necessary in order to render the container in the correct place. */
  height?: number;

  /** Called when a press event happens. */
  onPress?: (e: GestureResponderEvent, data: TooltipProps) => void;

  /** Position for the tooltip. */
  position?: DIRECTION;

  /** Force skip StatusBar height when calculating element position. Pass true if Tooltip used inside react-native Modal component. */
  skipAndroidStatusBar?: boolean;

  /** Accepts all system properties. */
  sx?: SX;

  /** Tooltip title. Zero-length titles string are never displayed. */
  title: string | ReactNode;

  /** Custom container style. */
  containerStyle?: StyleProp<ViewStyle>;

  /** Custom text style. */
  textStyle?: StyleProp<TextStyle>;

  /** If true, the component is shown. */
  visible?: boolean;

  /** Tooltip container width. Necessary in order to render the container in the correct place. */
  width?: number;
}

export default Tooltip;

import React, { FC, ReactNode, useContext, useEffect, useRef, useState } from "react";
import theme from "../../theme";
import ThemeContext from "../../ThemeContext";
import { sx } from "../../utils";
import { SX } from "../../types";
import {
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  ViewStyle,
  StyleProp,
  GestureResponderEvent,
  NativeSyntheticEvent,
  Animated,
  Platform,
  Dimensions,
} from "react-native";

const windowHeight = Dimensions.get("window").height;

const Sheet: FC<SheetProps> = (props) => {
  const {
    children,
    containerStyle,
    direction = "bottom",
    duration = 400,
    open = false,
    overlayColor,
    safeAreaViewStyle,
    trigger,
    onClose,
    onOpen,
    ...rest
  } = props;
  const { mode } = useContext(ThemeContext);
  const [visible, setVisible] = useState(open);

  const transformAnim = useRef(
    new Animated.Value(open ? 0 : direction === "bottom" ? windowHeight : -windowHeight)
  ).current;

  useEffect(() => {
    setVisible(open);
  }, [open]);

  const handleClose = (e: GestureResponderEvent) => {
    Animated.timing(transformAnim, {
      duration,
      toValue: direction === "bottom" ? windowHeight : -windowHeight,
      useNativeDriver: false,
    }).start(() => {
      setVisible(false);
      onClose?.(e, { ...props, open: false });
    });
  };

  const handleOpen = (e: NativeSyntheticEvent<any>) => {
    Animated.timing(transformAnim, {
      duration,
      toValue: open ? 0 : direction === "bottom" ? windowHeight : -windowHeight,
      useNativeDriver: false,
    }).start();

    onOpen?.(e, { ...props, open: true });
  };

  return (
    <>
      {trigger && <Pressable onPress={handleOpen}>{trigger}</Pressable>}
      <Modal transparent statusBarTranslucent visible={visible} onShow={handleOpen}>
        <Pressable
          onPress={handleClose}
          style={StyleSheet.flatten([
            {
              flex: 1,
              backgroundColor: overlayColor || "rgba(0,0,0,0.25)",
            },
          ])}
          onStartShouldSetResponderCapture={() => true}
        />
        <Animated.View
          {...rest}
          style={StyleSheet.flatten([
            styles.container,
            {
              backgroundColor: theme[mode].backgroundColor,
              transform: [
                {
                  translateY: transformAnim,
                },
              ],
            },
            direction === "bottom" && {
              bottom: 0,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            },
            direction === "top" && {
              top: 0,
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
            },
            sx(props.sx),
            containerStyle,
          ])}
        >
          <SafeAreaView
            style={StyleSheet.flatten([
              styles.safeAreaView,
              direction === "top" &&
                Platform.OS === "android" && {
                  paddingTop: StatusBar.currentHeight,
                },
              safeAreaViewStyle,
            ])}
          >
            <ScrollView>{children}</ScrollView>
          </SafeAreaView>
        </Animated.View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    width: "100%",
  },
  safeAreaView: {
    flex: 1,
  },
});

// ======================================================
export interface SheetProps extends StrictSheetProps {
  [k: string]: any;
}

// ======================================================
export interface StrictSheetProps {
  /** Custom style for container. */
  containerStyle?: StyleProp<ViewStyle>;

  /** Direction of the sheet to show. */
  direction?: "bottom" | "top";

  /** Animation time takes to fully show the component. */
  duration?: number;

  /** Called on close. */
  onClose?: (e: GestureResponderEvent, data: SheetProps) => void;

  /** Called on open. */
  onOpen?: (e: NativeSyntheticEvent<any>, data: SheetProps) => void;

  /** If true, the component is shown. */
  open?: boolean;

  /** Overlay color. */
  overlayColor?: string;

  /** Custom style for SafeAreaView. */
  safeAreaViewStyle?: StyleProp<ViewStyle>;

  /** Accepts all system properties. */
  sx?: SX;

  /** A Component that triggers the component. */
  trigger?: ReactNode;
}

export default Sheet;

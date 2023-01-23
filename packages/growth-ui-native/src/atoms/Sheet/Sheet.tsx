import React, { FC, ReactNode, useCallback, useContext, useEffect, useRef, useState } from "react";
import theme from "../../theme";
import ThemeContext from "../../ThemeContext";
import { sx } from "../../utils";
import { SX } from "../../types";
import {
  Modal,
  Pressable,
  StyleSheet,
  ViewStyle,
  StyleProp,
  GestureResponderEvent,
  NativeSyntheticEvent,
  Animated,
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

    handleClose({} as any);
  }, [open]);

  const handleClose = useCallback(
    (e: GestureResponderEvent) => {
      Animated.timing(transformAnim, {
        duration,
        toValue: direction === "bottom" ? windowHeight : -windowHeight,
        useNativeDriver: true,
      }).start(() => {
        setVisible(false);
        onClose?.(e, { ...props, open: false });
      });
    },
    [onClose, direction]
  );

  const handleOpen = useCallback(
    (e: NativeSyntheticEvent<any>) => {
      Animated.timing(transformAnim, {
        duration,
        toValue: 0,
        useNativeDriver: true,
      }).start();

      onOpen?.(e, { ...props, open: true });
    },
    [onOpen, direction]
  );

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
          {children}
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

  /** Accepts all system properties. */
  sx?: SX;

  /** A Component that triggers the component. */
  trigger?: ReactNode;
}

export default Sheet;

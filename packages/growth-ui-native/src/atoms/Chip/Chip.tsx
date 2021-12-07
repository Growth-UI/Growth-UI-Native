import ChipDetail from "./ChipDetail";
import Icon, { IconProps } from "../Icon";
import Image from "../Image";
import React, { FC, useContext } from "react";
import theme from "../../theme";
import ThemeContext from "../../ThemeContext";
import Typography from "../Typography";
import { COLORS, SIZES } from "../../types";
import { createChildren } from "../../utils";
import { getFontSize, getSize } from "./helpers";
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native";

const Chip: FC<ChipProps> & ChipComponents = (props) => {
  const {
    children,
    circular,
    color,
    containerStyle,
    icon,
    iconPosition = "left",
    image,
    onPress,
    outlined,
    size,
    text,
  } = props;

  const { mode } = useContext(ThemeContext);

  const handlePress = (e: GestureResponderEvent) => {
    onPress && onPress(e, props);
  };

  // ========== Render ==========
  const renderIcon = () => {
    if (!icon) {
      return null;
    }

    return (
      <Icon
        size={getFontSize(size)}
        color={color && outlined ? color : color ? "white" : undefined}
        containerStyle={styles.icon}
        {...icon}
      />
    );
  };

  const renderImage = () => {
    if (!image) {
      return null;
    }

    return <Image src={image} width={getSize(size)} height={getSize(size)} />;
  };

  const newChildren = createChildren(children, { defaultProps: { color, outlined, size } });

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View
        style={StyleSheet.flatten([
          styles.container,
          {
            backgroundColor: mode === "dark" ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.08)",
          },
          !image && { paddingVertical: 5 },
          circular && {
            borderRadius: 500,
          },
          color && {
            backgroundColor: theme.colors[color],
          },
          outlined && {
            opacity: 1,
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: color ? theme.colors[color] : theme[mode].border,
          },
          containerStyle,
        ])}
      >
        {renderImage()}
        {iconPosition === "left" && renderIcon()}
        <Typography
          size={getFontSize(size)}
          style={StyleSheet.flatten([
            styles.typography,
            color && { color: outlined ? theme.colors[color] : "white" },
            icon && iconPosition === "left" && { paddingLeft: 0 },
            icon && iconPosition === "right" && { paddingRight: 0 },
          ])}
        >
          {text}
        </Typography>
        {newChildren}
        {iconPosition === "right" && renderIcon()}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
    borderRadius: 6,
    overflow: "hidden",
  },
  icon: {
    marginHorizontal: 5,
  },
  typography: {
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: "500",
  },
});

Chip.Detail = ChipDetail;

interface ChipComponents {
  Detail: typeof ChipDetail;
}

export interface ChipProps extends StrictChipProps {
  [k: string]: any;
}

interface StrictChipProps {
  /** Custom container style. */
  containerStyle?: StyleProp<ViewStyle>;

  /** Called upon press. */
  onPress?: (e: GestureResponderEvent, data: ChipProps) => void;

  /** Outline the chip. */
  outlined?: boolean;

  /** A chip can be circular shape. */
  circular?: boolean;

  /** A chip can have different colors */
  color?: COLORS;

  /** Shorthand for an icon. */
  icon?: IconProps;

  /** Positon of an icon. */
  iconPosition?: "left" | "right";

  /** The imgae element to display. */
  image?: string;

  /** A chip can be small or large */
  size?: SIZES;

  /** The content of the component. */
  text?: string;
}

export default Chip;

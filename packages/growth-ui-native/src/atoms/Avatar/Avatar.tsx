import AvatarGroup from "./AvatarGroup";
import Icon, { IconProps } from "../Icon";
import React, { FC, useContext } from "react";
import ThemeContext from "../../ThemeContext";
import Typography, { TypographyProps } from "../Typography";
import { Image, Pressable, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { sx } from "../../utils";
import { SX } from "../../types";
import theme from "../../theme";

const Avatar: FC<AvatarProps> & AvatarComponents = (props) => {
  const {
    circular,
    containerStyle,
    icon,
    index,
    innerContainerStyle,
    isGrouped,
    size = 40,
    src,
    text,
    textStyle,
    ...rest
  } = props;
  const { mode } = useContext(ThemeContext);

  const renderAvatar = () => {
    if (src) {
      return (
        <Image
          source={{
            uri: src,
            width: size,
            height: size,
          }}
        />
      );
    }

    if (icon) {
      return <Icon size={size / 1.4} {...icon} containerStyle={{ margin: "auto" }} />;
    }

    if (text) {
      return (
        <Typography
          textAlign="center"
          variant="h6"
          style={StyleSheet.flatten([{ marginTop: "auto", marginBottom: "auto" }, textStyle])}
        >
          {text}
        </Typography>
      );
    }
  };

  return (
    <Pressable {...rest} onStartShouldSetResponderCapture={() => true}>
      <View
        style={StyleSheet.flatten([
          {
            position: "relative",
            width: size,
            height: size,
            borderRadius: 7,
          },
          circular && {
            borderRadius: 500,
          },
          isGrouped && {
            position: "absolute",
            zIndex: index * -1,
            left: size * 0.77 * index,
            background: theme[mode].backgroundColor,
          },
          sx(props.sx),
          containerStyle,
        ])}
      >
        <View
          style={StyleSheet.flatten([
            {
              width: size,
              height: size,
              overflow: "hidden",
              margin: "auto",
              borderRadius: 7,
            },
            circular && {
              borderRadius: 500,
            },
            isGrouped && {
              width: size - 3,
              height: size - 3,
            },
            innerContainerStyle,
          ])}
        >
          {renderAvatar()}
        </View>
      </View>
    </Pressable>
  );
};

Avatar.Group = AvatarGroup;

interface AvatarComponents {
  Group: typeof AvatarGroup;
}

export interface AvatarProps extends StrictAvatarProps {
  [k: string]: any;
}

interface StrictAvatarProps {
  /** Avatar may appear circular. */
  circular?: boolean;

  /** Custom container style. */
  containerStyle?: StyleProp<ViewStyle>;

  /** Avatars contains simple icon */
  icon?: IconProps;

  /** Custom inner container style. */
  innerContainerStyle?: StyleProp<ViewStyle>;

  /** Size of the avatar */
  size?: number;

  /** The image source. */
  src?: string;

  /** Accepts all system properties. */
  sx?: SX;

  /** Avatars contains simple characters */
  text?: string;

  /** Custom text style. */
  textStyle?: TypographyProps["style"];
}

export default Avatar;

import React, { FC } from "react";
import Typography from "../../atoms/Typography";
import { partitionNativeProps } from "../../utils";
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { View } from "react-native";

const CommentText: FC<CommentTextProps> = (props) => {
  const { children, text, textStyle, ...unhandledProps } = props;

  const [textProps, rest] = partitionNativeProps(unhandledProps, {
    nativeProps: ["disabled", "onPress", "onLongPress"],
  });

  return (
    <View
      {...rest}
      style={StyleSheet.flatten([
        {
          marginTop: 5,
          marginBottom: 5,
        },
      ])}
    >
      {children || (
        <Typography style={textStyle} {...textProps}>
          {text}
        </Typography>
      )}
    </View>
  );
};

// ======================================================
export interface CommentTextProps extends StrictCommentTextProps {
  [k: string]: any;
}

// ======================================================
export interface StrictCommentTextProps {
  /** Shorthand for primary text. */
  text?: string;

  /** Custom text style. */
  textStyle?: StyleProp<TextStyle>;

  /** Custom style. */
  style?: StyleProp<ViewStyle>;
}

export default CommentText;

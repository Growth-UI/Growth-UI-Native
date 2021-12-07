import React, { FC } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

const CommentContent: FC<CommentContentProps> = (props) => {
  const { children, style, ...rest } = props;

  return (
    <View
      {...rest}
      style={StyleSheet.flatten([
        {
          flex: 1,
          marginLeft: 10,
        },
        style,
      ])}
    >
      {children}
    </View>
  );
};

// ======================================================
export interface CommentContentProps extends StrictCommentContentProps {
  [k: string]: any;
}

// ======================================================
export interface StrictCommentContentProps {
  style?: StyleProp<ViewStyle>;
}

export default CommentContent;

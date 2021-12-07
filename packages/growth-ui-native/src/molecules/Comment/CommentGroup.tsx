import React, { FC } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { View } from "react-native";

const CommentGroup: FC<CommentGroupProps> = (props) => {
  const { children, ...rest } = props;

  return <View {...rest}>{children}</View>;
};

// ======================================================
export interface CommentGroupProps extends StrictCommentGroupProps {
  [k: string]: any;
}

// ======================================================
export interface StrictCommentGroupProps {
  /** Custom Style. */
  style?: StyleProp<ViewStyle>;
}

export default CommentGroup;

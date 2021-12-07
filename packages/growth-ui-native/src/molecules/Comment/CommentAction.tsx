import React, { FC } from "react";
import Row from "../../atoms/Row";
import { StyleProp, ViewStyle } from "react-native";
import { StyleSheet } from "react-native";

const CommentAction: FC<CommentActionProps> = (props) => {
  const { children, style, ...rest } = props;

  return (
    <Row
      {...rest}
      style={StyleSheet.flatten([
        {
          cursor: "pointer",
          marginRight: 5,
        },
        style,
      ])}
    >
      {children}
    </Row>
  );
};

// ======================================================
export interface CommentActionProps extends StrictCommentActionProps {
  [k: string]: any;
}

// ======================================================
export interface StrictCommentActionProps {
  style?: StyleProp<ViewStyle>;
}

export default CommentAction;

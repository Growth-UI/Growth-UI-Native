import React, { FC } from "react";
import Typography from "../../atoms/Typography";
import { StyleProp, StyleSheet, TextStyle } from "react-native";

const CommentAuthor: FC<CommentAuthorProps> = (props) => {
  const { children, text, style, ...rest } = props;

  return (
    <>
      {children || (
        <Typography variant="h6" style={StyleSheet.flatten([{ marginRight: 5 }, style])} {...rest}>
          {text}
        </Typography>
      )}
    </>
  );
};

// ======================================================
export interface CommentAuthorProps extends StrictCommentAuthorProps {
  [k: string]: any;
}

// ======================================================
export interface StrictCommentAuthorProps {
  /** Shorthand for primary text. */
  text?: string;

  /** Custom style. */
  style?: StyleProp<TextStyle>;
}

export default CommentAuthor;

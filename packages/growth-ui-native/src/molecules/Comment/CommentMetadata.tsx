import React, { FC } from "react";
import Typography from "../../atoms/Typography";
import { StyleProp, TextStyle } from "react-native";

const CommentMetadata: FC<CommentMetadataProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <Typography color="gray-500" size={12} {...rest}>
      {children}
    </Typography>
  );
};

// ======================================================
export interface CommentMetadataProps extends StrictCommentMetadataProps {
  [k: string]: any;
}

// ======================================================
export interface StrictCommentMetadataProps {
  /** Custom Style. */
  style?: StyleProp<TextStyle>;
}

export default CommentMetadata;

import CommentAction from "./CommentAction";
import CommentActions from "./CommentActions";
import CommentAuthor from "./CommentAuthor";
import CommentAvatar from "./CommentAvatar";
import CommentContent from "./CommentContent";
import CommentExpander from "./CommentExpander";
import CommentGroup from "./CommentGroup";
import CommentMetadata from "./CommentMetadata";
import CommentText from "./CommentText";
import React, { FC } from "react";
import Row from "../../atoms/Row";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";

const Comment: FC<CommentProps> & CommentComponents = (props) => {
  const { children, style, ...rest } = props;

  return (
    <Row {...rest} verticalAlign="top" style={StyleSheet.flatten([{ paddingBottom: 20 }, style])}>
      {children}
    </Row>
  );
};

Comment.Action = CommentAction;
Comment.Actions = CommentActions;
Comment.Avatar = CommentAvatar;
Comment.Author = CommentAuthor;
Comment.Content = CommentContent;
Comment.Expander = CommentExpander;
Comment.Group = CommentGroup;
Comment.Metadata = CommentMetadata;
Comment.Text = CommentText;

interface CommentComponents {
  Action: typeof CommentAction;
  Actions: typeof CommentActions;
  Avatar: typeof CommentAvatar;
  Author: typeof CommentAuthor;
  Content: typeof CommentContent;
  Expander: typeof CommentExpander;
  Group: typeof CommentGroup;
  Metadata: typeof CommentMetadata;
  Text: typeof CommentText;
}

// ======================================================
export interface CommentProps extends StrictCommentProps {
  [k: string]: any;
}

// ======================================================
export interface StrictCommentProps {
  style?: StyleProp<ViewStyle>;
}

export default Comment;

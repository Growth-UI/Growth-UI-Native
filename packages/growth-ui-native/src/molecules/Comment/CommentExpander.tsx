import Collapse from "../../atoms/Collapse";
import React, { FC, useState } from "react";
import Row from "../../atoms/Row";
import Spacer from "../../atoms/Spacer";
import Typography from "../../atoms/Typography";
import { StyleSheet, View } from "react-native";
import {
  GestureResponderEvent,
  StyleProp,
  TouchableWithoutFeedback,
  ViewStyle,
} from "react-native";

const CommentExpander: FC<CommentExpanderProps> = (props) => {
  const { children, defaultExpanded = false, onPress, style, text, ...rest } = props;

  const [expanded, setExpanded] = useState(defaultExpanded);

  const handlePress = (e: GestureResponderEvent) => {
    e.preventDefault();

    onPress && onPress(e, { ...props, expanded: !expanded });

    setExpanded(!expanded);
  };

  const renderText = () => {
    if (typeof text === "string") {
      return (
        <TouchableWithoutFeedback onPress={handlePress}>
          <Row>
            <Typography size={13} style={{ opacity: 0.6 }}>
              {text}
            </Typography>
          </Row>
        </TouchableWithoutFeedback>
      );
    }

    return text;
  };

  return (
    <View
      {...rest}
      style={StyleSheet.flatten([
        {
          cursor: "pointer",
          marginRight: 5,
        },
        style,
      ])}
    >
      {renderText()}
      <Spacer size={20} />
      <Collapse expanded={expanded}>{children}</Collapse>
    </View>
  );
};

// ======================================================
export interface CommentExpanderProps extends StrictCommentExpanderProps {
  [k: string]: any;
}

// ======================================================
export interface StrictCommentExpanderProps {
  /** If true, the component will transition in. */
  defaultExpanded?: boolean;

  /** Called after user's press. */
  onPress?: (e: GestureResponderEvent, data: CommentExpanderProps) => void;

  /** Custom style. */
  style?: StyleProp<ViewStyle>;

  /** Shorthand for primary text. */
  text?: any;
}

export default CommentExpander;

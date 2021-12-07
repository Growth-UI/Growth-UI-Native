import React, {FC} from 'react';
import Row from '../../atoms/Row';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';

const CommentActions: FC<CommentActionsProps> = props => {
  const {children, style, ...rest} = props;

  return (
    <Row
      {...rest}
      style={StyleSheet.flatten([
        {
          marginVertical: 10,
          style,
        },
      ])}>
      {children}
    </Row>
  );
};

// ======================================================
export interface CommentActionsProps extends StrictCommentActionsProps {
  [k: string]: any;
}

// ======================================================
export interface StrictCommentActionsProps {
  style?: StyleProp<ViewStyle>;
}

export default CommentActions;

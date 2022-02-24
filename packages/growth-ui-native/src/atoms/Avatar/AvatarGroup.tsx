import Avatar from ".";
import React, { Children, FC } from "react";
import Row from "../Row";
import { createChildren } from "../../utils";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { sx } from "../../utils";
import { SX } from "../../types";

const AvatarGroup: FC<AvatarGroupProps> = (props) => {
  const { children, containerStyle, max, total } = props;
  const count = Children.count(children);
  let x = 0;

  if (total && total - count > 0) {
    x = total - count;
  }

  if (max && max < count) {
    x = count - max;
  }

  const newChildren = createChildren(Children.toArray(children).slice(0, max || count), {
    defaultProps: {
      isGrouped: true,
    },
  });

  return (
    <Row
      style={StyleSheet.flatten([
        {
          minHeight: 40,
        },
        containerStyle,
        sx(props.sx),
      ])}
    >
      {newChildren}
      {x && (
        <Avatar
          circular
          isGrouped
          text={`+${x}`}
          sx={{
            zIndex: (max || count) * -1,
            left: 40 * 0.77 * (max || count),
            bg: "rgb(189, 189, 189)",
          }}
          textStyle={{
            margin: "auto",
            color: "#fff",
            fontSize: 15,
          }}
        />
      )}
    </Row>
  );
};

export interface AvatarGroupProps extends StrictAvatarGroupProps {
  [k: string]: any;
}

interface StrictAvatarGroupProps {
  /** Custom container style. */
  containerStyle?: StyleProp<ViewStyle>;

  /** Max avatars to show before +x. */
  max?: number;

  /** Accepts all system properties. */
  sx?: SX;

  /** The total number of avatars. */
  total?: number;
}

export default AvatarGroup;

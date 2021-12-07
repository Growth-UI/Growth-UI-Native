import React, { FC } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

const ListContent: FC<ListContentProps> = (props) => {
  const { children, style, ...rest } = props;

  return (
    <View
      {...rest}
      style={StyleSheet.flatten([
        {
          flex: 1,
          paddingHorizontal: 7,
        },
        style,
      ])}
    >
      {children}
    </View>
  );
};

// ======================================================
export interface ListContentProps extends StrictListContentProps {
  [k: string]: any;
}

// ======================================================
export interface StrictListContentProps {
  /** Custom style. */
  style?: StyleProp<ViewStyle>;
}

export default ListContent;

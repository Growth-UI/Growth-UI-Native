import ListContent from "./ListContent";
import ListDescription from "./ListDescription";
import ListHeading from "./ListHeading";
import ListImage from "./ListImage";
import ListItem from "./ListItem";
import React, { FC } from "react";
import { createChildren } from "../../utils";
import { RowProps } from "../../atoms/Row";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

const List: FC<ListProps> & ListComponents = (props) => {
  const { children, ripple = true, style, ...rest } = props;

  const newChildren = createChildren(children, { defaultProps: { ...rest, ripple } });

  return (
    <View {...rest} style={StyleSheet.flatten([{ overflow: "hidden" }, style])}>
      {newChildren}
    </View>
  );
};

List.Content = ListContent;
List.Description = ListDescription;
List.Heading = ListHeading;
List.Image = ListImage;
List.Item = ListItem;

interface ListComponents {
  Content: typeof ListContent;
  Description: typeof ListDescription;
  Heading: typeof ListHeading;
  Image: typeof ListImage;
  Item: typeof ListItem;
}

// ======================================================
export interface ListProps extends StrictListProps {
  [k: string]: any;
}

// ======================================================
export interface StrictListProps {
  /** A list can show divisions between content. */
  divided?: boolean;

  /** A list can relax its padding to provide more negative space. */
  padded?: boolean;

  /** A list can relax its padding to provide even more negative space. */
  relaxed?: boolean;

  /** A ripple effect to give users feedback in a simple, elegant way. */
  ripple?: boolean;

  /** A ripple may appear as different color. */
  rippleColor?: string;

  /** Custom style. */
  style?: StyleProp<ViewStyle>;

  /** An element inside a item can be vertically aligned. */
  verticalAlign?: RowProps["verticalAlign"];
}

export default List;

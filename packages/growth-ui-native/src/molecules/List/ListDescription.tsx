import React, { FC } from "react";
import { StyleSheet } from "react-native";
import Typography, { TypographyProps } from "../../atoms/Typography";

const ListDescription: FC<ListDescriptionProps> = (props) => {
  const { children, style, ...rest } = props;

  return (
    <Typography size={12} style={StyleSheet.flatten([{ opacity: 0.6 }, style])} {...rest}>
      {children}
    </Typography>
  );
};

// ======================================================
export interface ListDescriptionProps extends StrictListDescriptionProps, TypographyProps {
  [k: string]: any;
}

// ======================================================
export interface StrictListDescriptionProps {}

export default ListDescription;

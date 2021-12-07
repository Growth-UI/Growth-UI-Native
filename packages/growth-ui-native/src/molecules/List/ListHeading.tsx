import React, { FC } from "react";
import Typography, { TypographyProps } from "../../atoms/Typography";

const ListHeading: FC<ListHeadingProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <Typography variant="h6" {...rest}>
      {children}
    </Typography>
  );
};

// ======================================================
export interface ListHeadingProps extends StrictListHeadingProps, TypographyProps {
  [k: string]: any;
}

// ======================================================
export interface StrictListHeadingProps {}

export default ListHeading;

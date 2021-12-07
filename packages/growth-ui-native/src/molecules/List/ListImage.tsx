import Image, { ImageProps } from "../../atoms/Image";
import React, { FC } from "react";

const ListImage: FC<ListImageProps> = (props) => {
  const { src = "", width = 35, ...rest } = props;

  return <Image rounded src={src} width={width} {...rest} />;
};

// ======================================================
export interface ListImageProps extends StrictListImageProps {
  [k: string]: any;
}

// ======================================================
export interface StrictListImageProps extends Partial<ImageProps> {}

export default ListImage;

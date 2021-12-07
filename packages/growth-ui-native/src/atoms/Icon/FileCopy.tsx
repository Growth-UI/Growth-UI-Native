import React from "react";
import { Svg, Path, SvgProps, Rect } from "react-native-svg";

export default function FileCopy(props: SvgProps) {
  return (
    <Svg viewBox="0 0 24 24" height="20" width="20" fill="currentColor" {...props}>
      <Rect width="24" height="24" fill="none"></Rect>
      <Path d="M3 7c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h11c.55 0 1-.45 1-1s-.45-1-1-1H4V8c0-.55-.45-1-1-1zm12.59-5.41c-.38-.38-.89-.59-1.42-.59H8c-1.1 0-1.99.9-1.99 2L6 17c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V7.83c0-.53-.21-1.04-.59-1.41l-4.82-4.83zM14 7V2.5L19.5 8H15c-.55 0-1-.45-1-1z"></Path>
    </Svg>
  );
}

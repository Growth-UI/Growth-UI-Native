import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

export default function Paperclip(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 24 24"
      height="25"
      width="25"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <Path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"></Path>
    </Svg>
  );
}

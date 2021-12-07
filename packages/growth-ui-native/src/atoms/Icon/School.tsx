import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

export default function School(props: SvgProps) {
  return (
    <Svg viewBox="0 0 512 512" height="25" width="25" fill="currentColor" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M32 192L256 64l224 128-224 128L32 192z"
      />
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M112 240v128l144 80 144-80V240m80 128V192M256 320v128"
      />
    </Svg>
  );
}

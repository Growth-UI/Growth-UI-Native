import React from "react";
import { Circle, Svg, Path, SvgProps } from "react-native-svg";

export default function Location(props: SvgProps) {
  return (
    <Svg viewBox="0 0 512 512" height="25" width="25" fill="currentColor" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"
      />
      <Circle
        cx="256"
        cy="192"
        r="48"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </Svg>
  );
}

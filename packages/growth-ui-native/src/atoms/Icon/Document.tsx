import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

export default function Document(props: SvgProps) {
  return (
    <Svg viewBox="0 0 24 24" height="25" width="25" {...props}>
      <Path d="M17.75 2c1.2 0 2.17.93 2.24 2.1l.01.16v15.5c0 1.19-.93 2.16-2.1 2.24H6.25c-1.2 0-2.17-.92-2.24-2.1L4 19.76V4.25c0-1.18.93-2.16 2.1-2.24h11.65zm-10 5a.75.75 0 1 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5zM7 11.75c0 .41.34.75.75.75h8.5a.75.75 0 0 0 0-1.5h-8.5a.75.75 0 0 0-.75.75zM7.75 15a.75.75 0 1 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5z"></Path>
    </Svg>
  );
}

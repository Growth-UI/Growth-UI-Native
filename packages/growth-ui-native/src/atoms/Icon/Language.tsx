import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

export default function Language(props: SvgProps) {
  return (
    <Svg viewBox="0 0 28 28" height="25" width="25" fill="currentColor" {...props}>
      <Path d="M12.75 2a.75.75 0 0 0 0 1.5h5.75v2.8c0 1.75-1.75 3.2-3.75 3.2a.75.75 0 0 0 0 1.5C17.31 11 20 9.13 20 6.3V2.76a.75.75 0 0 0-.75-.75h-6.5zM10.7 7.46a.75.75 0 0 0-1.4 0l-7.24 17.5a.75.75 0 0 0 1.38.58l2.09-5.04h8.94l2.1 5.04a.75.75 0 0 0 1.38-.58l-2.2-5.31a.75.75 0 0 0-.15-.36L10.7 7.46zM13.84 19h-7.7L10 9.7l3.85 9.3zM22.25 2c.42 0 .75.34.75.75V8.5h2.25a.75.75 0 1 1 0 1.5H23v9.25a.75.75 0 0 1-1.5 0V9.3a.8.8 0 0 1 0-.1V2.75c0-.41.34-.75.75-.75z"></Path>
    </Svg>
  );
}

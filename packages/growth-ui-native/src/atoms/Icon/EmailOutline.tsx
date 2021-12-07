import React from "react";
import { G, Svg, Path, SvgProps } from "react-native-svg";

export default function EmailOutline(props: SvgProps) {
  return (
    <Svg viewBox="0 0 24 24" height="25" width="25" fill="currentColor" {...props}>
      <G data-name="Layer 2">
        <Path
          d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 01-1-1V7.25l7.4 5.55a1 1 0 00.6.2 1 1 0 00.6-.2L20 7.25V17a1 1 0 01-1 1z"
          data-name="email"
        />
      </G>
    </Svg>
  );
}

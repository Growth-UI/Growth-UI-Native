import React from "react";
import { Path, Svg, SvgProps } from "react-native-svg";

export default function QrCode(props: SvgProps) {
  return (
    <Svg viewBox="0 0 28 28" height="25" width="25" fill="currentColor" {...props}>
      <Path d="M18.33 15v3.33h3.34v3.34H25V25h-3.33v-3.33h-3.34V25H15v-3.33h3.33v-3.34H15V15h3.33zm-7.83 0a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 3 22.5v-5A2.5 2.5 0 0 1 5.5 15h5zm0 2h-5a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5zm-.75 1.25v3.5h-3.5v-3.5h3.5zM25 15v3.33h-3.33V15H25zM10.5 3A2.5 2.5 0 0 1 13 5.5v5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 3 10.5v-5A2.5 2.5 0 0 1 5.5 3h5zm12 0A2.5 2.5 0 0 1 25 5.5v5a2.5 2.5 0 0 1-2.5 2.5h-5a2.5 2.5 0 0 1-2.5-2.5v-5A2.5 2.5 0 0 1 17.5 3h5zm-12 2h-5a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5zm12 0h-5a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5zm-.75 1.25v3.5h-3.5v-3.5h3.5zm-12 0v3.5h-3.5v-3.5h3.5z"></Path>
    </Svg>
  );
}

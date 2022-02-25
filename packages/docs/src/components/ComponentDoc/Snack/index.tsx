import Context from "../../Context";
import React, { useContext } from "react";

type Props = {
  id: string;
};

export default function Snack({ id }: Props) {
  const { darkMode } = useContext(Context);

  return (
    <iframe
      srcDoc={
        darkMode
          ? `<div data-snack-id="${id}" data-snack-platform="web" data-snack-preview="true" data-snack-theme="dark" style="overflow:hidden;background:#212121;border:1px solid var(--color-border);border-radius:4px;height:505px;width:100%"></div>
<script async src="https://snack.expo.dev/embed.js"></script>`
          : `<div data-snack-id="${id}" data-snack-platform="web" data-snack-preview="true" data-snack-theme="light" style="overflow:hidden;background:#F9F9F9;border:1px solid var(--color-border);border-radius:4px;height:505px;width:100%"></div>
<script async src="https://snack.expo.dev/embed.js"></script>`
      }
      width="100%"
      height="550px"
      frameBorder={0}
      id={id}
    />
  );
}

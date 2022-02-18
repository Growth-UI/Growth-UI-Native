import pick from "lodash/pick";
import { SX } from "../types";

export default function palette(props: SX = {}) {
  const paletteProps = pick(props, ["color", "bg"]);

  return Object.keys(paletteProps).reduce((acc, cur) => {
    if (cur === "bg") {
      return {
        ...acc,
        background: paletteProps[cur],
      };
    }

    return {
      ...acc,
      [cur]: paletteProps[cur as keyof typeof paletteProps],
    };
  }, {});
}

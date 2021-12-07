import { SIZES } from "../../types";

export const getSize = (size?: SIZES) => {
  switch (size) {
    case "mini":
      return 15;
    case "tiny":
      return 18;
    case "small":
      return 20;
    case "medium":
      return 23;
    case "large":
      return 27;
    case "big":
      return 30;
    case "huge":
      return 35;
    case "massive":
      return 45;
    default:
      return 23;
  }
};

export const getFontSize = (size?: SIZES) => {
  switch (size) {
    case "mini":
      return 10;
    case "tiny":
      return 11;
    case "small":
      return 13;
    case "medium":
      return 14;
    case "large":
      return 17;
    case "big":
      return 20;
    case "huge":
      return 25;
    case "massive":
      return 35;
    default:
      return 14;
  }
};

import { DIRECTION } from "../../types";
import { StyleProp, ViewStyle } from "react-native";

type Options = {
  yOffset: number;
  xOffset: number;
  elementWidth: number;
  elementHeight: number;
  position: DIRECTION;
  tooltipWidth: number;
  tooltipHeight: number;
  withPointer: boolean;
};

export function getTooltipStyle({
  position,
  xOffset,
  yOffset,
  elementHeight,
  elementWidth,
  tooltipWidth,
  tooltipHeight,
  withPointer,
}: Options): StyleProp<ViewStyle> {
  switch (position) {
    case "bottom center":
      return {
        top: yOffset + elementHeight,
        left: xOffset + (elementWidth - tooltipWidth) / 2,
        transform: [
          {
            translateY: 10,
          },
        ],
      };
    case "bottom left":
      return {
        top: yOffset + elementHeight,
        left: xOffset,
        transform: [
          {
            translateY: 10,
          },
        ],
      };

    case "bottom right":
      return {
        top: yOffset + elementHeight,
        left: xOffset + elementWidth - tooltipWidth,
        transform: [
          {
            translateY: 10,
          },
        ],
      };

    case "top center":
      return {
        top: yOffset - tooltipHeight,
        left: xOffset + (elementWidth - tooltipWidth) / 2,
        transform: [
          {
            translateY: -10,
          },
        ],
      };

    case "top left":
      return {
        top: yOffset - tooltipHeight,
        left: xOffset,
        transform: [
          {
            translateY: -10,
          },
        ],
      };

    case "top right":
      return {
        top: yOffset - tooltipHeight,
        left: xOffset + elementWidth - tooltipWidth,
        transform: [
          {
            translateY: -10,
          },
        ],
      };

    case "right center":
      return {
        top: yOffset + (elementHeight - tooltipHeight) / 2,
        left: xOffset + elementWidth,
        transform: [
          {
            translateX: 10,
          },
        ],
      };

    case "left center":
      return {
        top: yOffset + (elementHeight - tooltipHeight) / 2,
        left: xOffset - tooltipWidth,
        transform: [
          {
            translateX: -10,
          },
        ],
      };
  }
}

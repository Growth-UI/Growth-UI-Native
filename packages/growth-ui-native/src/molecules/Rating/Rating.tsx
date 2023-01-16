import Icon from "../../atoms/Icon";
import React, { FC, useEffect, useState } from "react";
import Row from "../../atoms/Row";
import { COLORS } from "../../types";

const Rating: FC<RatingProps> = (props) => {
  const {
    count = 5,
    defaultRating = 3,
    disabled = false,
    selectedColor = "yellow-400",
    size = 25,
    onChange,
  } = props;
  const [rating, setRating] = useState(defaultRating);
  const [color, setColor] = useState(selectedColor);

  useEffect(() => {
    setRating(defaultRating);
    setColor(selectedColor);
  }, [selectedColor, defaultRating]);

  const handleRating = (rating: number) => () => {
    if (disabled) return;

    setRating(rating);

    if (onChange) onChange(rating);
  };

  return (
    <Row>
      {new Array(count).fill(0).map((_, idx) => {
        const isSelected = idx + 1 <= rating;
        const isHalf = idx + 1 === count - Math.floor(count - rating);
        const isNotSelected = idx + 1 > rating;

        if (isSelected)
          return (
            <Icon
              name="star fill"
              color={color}
              size={size}
              key={idx}
              onPress={handleRating(idx + 1)}
            />
          );
        if (isHalf)
          return (
            <Icon name="star half" color={color} size={size} onPress={handleRating(idx + 1)} />
          );
        if (isNotSelected)
          return (
            <Icon name="star" color={color} size={size} key={idx} onPress={handleRating(idx + 1)} />
          );
      })}
    </Row>
  );
};

export interface RatingProps {
  [k: string]: any;

  /** Total number of ratings to displayDefault is 5 */
  count?: number;

  /** Initial value for the ratingDefault is 4 */
  defaultRating?: number;

  /** Whether the rating can be modiefied by the userDefault is false */
  disabled?: boolean;

  /** Color value for filled stars. Default is yellow-400 */
  selectedColor?: COLORS;

  /** Size of rating icon is 25 */
  size?: number;

  /** Called on rating change. */
  onChange?: (rating: number) => void;
}

export default Rating;

import invoke from "lodash/invoke";
import { DATE_MASK } from "../../../../types";
import { maskedDateFormatter } from "../masks";
import { removeInvalidChars } from "../removeInvalidChars";
import { useEffect, useRef, useState } from "react";
import {
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  TextInputSelectionChangeEventData,
} from "react-native";

interface MaskedInputProps extends StrictMaskedInputProps {
  [k: string]: any;
}

interface StrictMaskedInputProps {
  defaultValue?: string;
  mask: DATE_MASK;
}

export function useMaskedInput(props: MaskedInputProps) {
  const { defaultValue = "", mask } = props;

  const reachedMask = useRef(false);
  const start = useRef(0);
  const end = useRef(0);
  const [inputValue, setInputValue] = useState(defaultValue);

  useEffect(() => {
    handleChange(defaultValue);
  }, [defaultValue, mask]);

  const handleChange = (text: string) => {
    const withoutInvalidChars = removeInvalidChars(text);
    const formattedValue = maskedDateFormatter(withoutInvalidChars, mask);

    if (reachedMask.current) {
      const at = start.current - 1;

      if (at < 0) {
        reachedMask.current = false;
        return;
      }

      const rString = inputValue.split("");

      rString[start.current] = "";
      rString[at] = "";
      start.current = at;
      end.current = at;
      reachedMask.current = false;

      setInputValue(rString.join(""));

      invoke(props, "onChange", formattedValue, props);
    } else {
      setInputValue(formattedValue);
      invoke(props, "onChange", formattedValue, props);
    }
  };

  const handleKeyPress = ({
    nativeEvent: { key },
  }: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
    if (key !== "Backspace") {
      return;
    }

    if (
      start.current > 0 &&
      Number.isNaN(+inputValue[start.current]) &&
      start.current === end.current
    ) {
      reachedMask.current = true;
    }
  };

  const handleSelectionChange = ({
    nativeEvent: { selection },
  }: NativeSyntheticEvent<TextInputSelectionChangeEventData>) => {
    start.current = selection.start;
    end.current = selection.end;
  };

  return {
    inputProps: {
      onChangeText: (text: string) => handleChange(text),
      onKeyPress: handleKeyPress,
      onSelectionChange: handleSelectionChange,
      value: inputValue,
    },
    handleChange,
  };
}

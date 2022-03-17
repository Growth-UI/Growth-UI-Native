import { addSeparators } from "./addSeparators";
import { isDecimalLimitReached } from "./isDecimalLimitReached";
import { isNil } from "./isNil";
import { trimLeadingZeros } from "./trimLeadingZeros";

type Options = {
  separators?: boolean;
  decimalsLimit?: number;
};

export function formatValue(
  value: string,
  { separators = true, decimalsLimit = Infinity }: Options
) {
  let formattedValue: string | Array<string> = value;
  formattedValue = trimLeadingZeros(formattedValue);

  const [integer, decimal] = formattedValue.split(".");

  formattedValue = integer.split("");

  if (separators) {
    formattedValue = addSeparators(formattedValue);
  }

  if (!isNil(decimal)) {
    const lastInt = formattedValue.pop();
    formattedValue.push(`${lastInt}.`);
    const decimalArray = decimal.split("");

    if (isDecimalLimitReached(decimal, decimalsLimit)) {
      decimalArray.pop();
      return [...formattedValue, ...decimalArray];
    }

    return [...formattedValue, ...decimalArray];
  }

  return formattedValue;
}

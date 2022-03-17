import { isNil } from './isNil';
import { padZeros } from './padZeros';

export function fixedDecimalValue(value: string, max: number, fixed?: number) {
  const split = value.split('.');

  if (!fixed && isNil(split[1])) {
    return value;
  }

  let integer = split[0];
  let decimals = isNil(split[1]) ? '' : split[1];

  const count = decimals.length;

  /**
   * '55' => '.55' => ['', '55']
   */
  if (integer === '') {
    integer = '0';
  }

  if (count > max) {
    return `${integer}.${decimals.substring(0, max)}`;
  }

  if (fixed && count < fixed) {
    decimals = padZeros(decimals, fixed - count);
  }

  return `${integer}.${decimals}`;
}

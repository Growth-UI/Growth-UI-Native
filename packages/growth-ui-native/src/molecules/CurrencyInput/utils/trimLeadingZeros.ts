import { isNil } from './isNil';

export function trimLeadingZeros(value: string) {
  const split = value.split('.');

  const decimals = split[1];
  let integer = split[0];

  if (isNil(integer)) {
    return value;
  }

  if (integer.length === 1) {
    return value;
  }

  integer = integer.replace(/^0+/, '');

  if (integer.length === 0) {
    integer = '0';
  }

  if (isNil(decimals)) {
    return integer;
  }

  return `${integer}.${decimals}`;
}

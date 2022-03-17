export function isDecimalLimitReached(value: string, decimalsLimit = Infinity) {
  return value.length > decimalsLimit;
}

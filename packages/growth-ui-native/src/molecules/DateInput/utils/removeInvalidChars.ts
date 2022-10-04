export function removeInvalidChars(value: string, symbol = '') {
  const allowedChars = new Set([symbol, '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' ']);

  return value
    .split('')
    .filter((char) => allowedChars.has(char))
    .join('');
}

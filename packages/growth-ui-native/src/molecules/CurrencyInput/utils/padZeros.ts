export function padZeros(value: string, count: number) {
  while (count !== 0) {
    value += '0';
    count -= 1;
  }

  return value;
}

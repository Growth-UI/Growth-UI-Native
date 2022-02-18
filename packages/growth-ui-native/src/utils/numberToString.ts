export function numberToString(value: any) {
  const type = typeof value;

  if (type === "number") {
    return `${value}px`;
  }

  return value || "";
}

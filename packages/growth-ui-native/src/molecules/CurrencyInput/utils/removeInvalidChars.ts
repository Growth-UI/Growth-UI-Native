export const removeInvalidChars = (value: string): string => {
  let count = 0;
  const numericalChar = new Set([".", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);

  return value
    .split("")
    .filter((char) => {
      if (count >= 1 && char === ".") {
        return false;
      }

      if (char === ".") {
        count += 1;
      }

      return numericalChar.has(char);
    })
    .join("");
};

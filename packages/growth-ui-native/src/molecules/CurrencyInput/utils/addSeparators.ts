export const addSeparators = (value: Array<string>, separator = ",") => {
  const { length } = value;
  const integerWithSeparators = value;

  let count = 1;

  for (let i = length - 1; i >= 0; i--) {
    if (count % 4 === 0) {
      count = 1;
      integerWithSeparators[i] = `${value[i]}${separator}`;
    } else {
      integerWithSeparators[i] = value[i];
    }

    count += 1;
  }

  return integerWithSeparators;
};

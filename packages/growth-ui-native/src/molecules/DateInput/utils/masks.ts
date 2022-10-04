import { DATE_MASK } from '../../../types';

const maskedFormatter = (value: string, mask: string, symbol: string) => {
  if (!mask || !value) return '';

  let symbolCount = 0;

  return value
    .split('')
    .map((char, i) => {
      if (i > mask.length - 1 - symbolCount) {
        return '';
      }

      const maskChar = mask[i + symbolCount];
      const nextMaskChar = mask[i + symbolCount + 1];

      if (maskChar === symbol && char !== symbol) {
        return '';
      }

      if (maskChar !== symbol && char === symbol) {
        return '';
      }

      if (nextMaskChar === symbol) {
        symbolCount += 1;
        return char + symbol;
      }

      return char;
    })
    .join('');
};

export const maskedDateFormatter = (value: string, mask: DATE_MASK) => {
  const symbol = getMaskSymbol(mask);

  const [dateMask, hoursMask] = mask.split(' ');
  const { length } = dateMask;
  const hours = value.substring(length - 2);

  // format hours
  const formattedHours = maskedFormatter(hours.trim(), hoursMask, ':');

  // format date
  const formattedDate = maskedFormatter(value.substring(0, length - 1), dateMask, symbol);

  if (!formattedHours) return formattedDate;

  return `${formattedDate} ${formattedHours}`;
};

export const getMaskSymbol = (mask: DATE_MASK) => {
  if (mask.includes('/')) return '/';

  if (mask.includes('-')) return '-';

  return '.';
};

export const countMaskSymbol = (mask: DATE_MASK, symbol: string) => {
  return mask.split(symbol).length - 1;
};

export const masks: Record<DATE_MASK, boolean> = {
  'mm/dd/yyyy hh:mm:ss': true,
  'mm/dd/yyyy': true,
  'mm-dd-yyyy': true,
  'mm-dd-yyyy hh:mm:ss': true,
  'mm.dd.yyyy': true,
  'mm.dd.yyyy hh:mm:ss': true,
  'mm/yyyy': true,
  'mm/yyyy hh:mm:ss': true,
  'mm-yyyy': true,
  'mm-yyyy hh:mm:ss': true,
  'mm.yyyy': true,
  'mm.yyyy hh:mm:ss': true,
  'mm/yy': true,
  'mm/yy hh:mm:ss': true,
  'mm-yy': true,
  'mm-yy hh:mm:ss': true,
  'mm.yy': true,
  'mm.yy hh:mm:ss': true,
  'yyyy/mm/dd': true,
  'yyyy/mm/dd hh:mm:ss': true,
  'yyyy-mm-dd': true,
  'yyyy-mm-dd hh:mm:ss': true,
  'yyyy.mm.dd': true,
  'yyyy.mm.dd hh:mm:ss': true,
  'yyyy/mm': true,
  'yyyy/mm hh:mm:ss': true,
  'yyyy-mm': true,
  'yyyy-mm hh:mm:ss': true,
  'yyyy.mm': true,
  'yyyy.mm hh:mm:ss': true,
  'yy/mm': true,
  'yy/mm hh:mm:ss': true,
  'yy-mm': true,
  'yy-mm hh:mm:ss': true,
  'yy.mm': true,
  'yy.mm hh:mm:ss': true,
  'dd.mm.yyyy': true,
  'dd.mm.yyyy hh:mm:ss': true,
  'dd/mm/yyyy': true,
  'dd/mm/yyyy hh:mm:ss': true,
  'dd-mm-yyyy': true,
  'dd-mm-yyyy hh:mm:ss': true,
  'mm/dd': true,
  'mm/dd hh:mm:ss': true,
  'mm-dd': true,
  'mm-dd hh:mm:ss': true,
  'mm.dd': true,
  'mm.dd hh:mm:ss': true,
  'dd.mm': true,
  'dd.mm hh:mm:ss': true,
  'dd-mm': true,
  'dd-mm hh:mm:ss': true,
  'dd/mm': true,
  'dd/mm hh:mm:ss': true,
};

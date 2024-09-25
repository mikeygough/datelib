export const months: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const mons: string[] = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const days: string[] = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const dys: string[] = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
];

type maskCodesLayout = Record<string, string>;

export const maskCodes: maskCodesLayout = {
  Y: 'year',
  y: 'yr',
  M: 'month',
  m: 'mon',
  D: 'date',
  d: 'date',
  L: 'day',
  l: 'dy',
  '#': 'fancyDate',
  H: 'hours',
  h: 'hours',
  I: 'mins',
  i: 'mins',
  S: 'secs',
  s: 'secs',
};

type unitType = 'year' | 'month' | 'day';

export function formatTimeDiff(diff: number, unit: unitType): string {
  const absDiff = Math.abs(diff);
  const plural = absDiff !== 1 ? 's' : '';
  if (diff < 0) {
    return `${absDiff} ${unit}${plural} ago`;
  } else if (diff > 0) {
    return `${diff} ${unit}${plural} from now`;
  }
  return 'today';
}

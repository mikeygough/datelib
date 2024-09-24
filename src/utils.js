const months = [
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

const mons = [
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

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const dys = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const maskCodes = {
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

function formatTimeDiff(diff, unit) {
  const absDiff = Math.abs(diff);
  const plural = absDiff !== 1 ? 's' : '';
  if (diff < 0) {
    return `${absDiff} ${unit}${plural} ago`;
  } else if (diff > 0) {
    return `${diff} ${unit}${plural} from now`;
  }
  return 'today';
}

module.exports = {
  months,
  mons,
  days,
  dys,
  maskCodes,
  formatTimeDiff,
};

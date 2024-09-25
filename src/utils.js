"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maskCodes = exports.dys = exports.days = exports.mons = exports.months = void 0;
exports.formatTimeDiff = formatTimeDiff;
exports.months = [
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
exports.mons = [
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
exports.days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];
exports.dys = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
];
exports.maskCodes = {
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
    var absDiff = Math.abs(diff);
    var plural = absDiff !== 1 ? 's' : '';
    if (diff < 0) {
        return "".concat(absDiff, " ").concat(unit).concat(plural, " ago");
    }
    else if (diff > 0) {
        return "".concat(diff, " ").concat(unit).concat(plural, " from now");
    }
    return 'today';
}

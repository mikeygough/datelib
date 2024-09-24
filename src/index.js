"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
/**
 * A class representing a custom date object with various utility methods.
 */
var D = /** @class */ (function () {
    /**
     * Create a D instance.
     * @param {...any} args - The arguments passed to the Date constructor.
     */
    function D() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._date = new (Date.bind.apply(Date, __spreadArray([void 0], args, false)))();
    }
    Object.defineProperty(D.prototype, "year", {
        /**
         * Get the full year of the date.
         * @returns {number} The full year (e.g., 2024).
         */
        get: function () {
            return this._date.getFullYear();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "yr", {
        /**
         * Get the last two digits of the year.
         * @returns {number} The last two digits of the year (e.g., 24 for 2024).
         */
        get: function () {
            return this._date.getFullYear() % 100;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "month", {
        /**
         * Get the full name of the month.
         * @returns {string} The full name of the month (e.g., "January").
         */
        get: function () {
            return utils_1.months[this._date.getMonth()];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "mon", {
        /**
         * Get the abbreviated month name.
         * @returns {string} The abbreviated month name (e.g., "Jan").
         */
        get: function () {
            return utils_1.mons[this._date.getMonth()];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "day", {
        /**
         * Get the full name of the day of the week.
         * @returns {string} The full name of the day (e.g., "Monday").
         */
        get: function () {
            return utils_1.days[this._date.getDay()];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "dy", {
        /**
         * Get the abbreviated name of the day of the week.
         * @returns {string} The abbreviated name of the day (e.g., "Mon").
         */
        get: function () {
            return utils_1.dys[this._date.getDay()];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "date", {
        /**
         * Get the day of the month.
         * @returns {number} The day of the month (1-31).
         */
        get: function () {
            return this._date.getDate();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "fancyDate", {
        /**
         * Get the formatted day of the month with ordinal suffix (e.g., "1st", "2nd").
         * @returns {string} The formatted date with an ordinal suffix.
         */
        get: function () {
            var dateNum = String(this.date);
            var lastDigit = dateNum.slice(-1);
            // exceptions
            if ([11, 12, 13].includes(this.date)) {
                return "".concat(dateNum, "th");
            }
            switch (lastDigit) {
                case '1':
                    return "".concat(dateNum, "st");
                case '2':
                    return "".concat(dateNum, "nd");
                case '3':
                    return "".concat(dateNum, "rd");
                default:
                    return "".concat(dateNum, "th");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "hours", {
        /**
         * Get the current hour in 24-hour format.
         * @returns {number} The hour of the day (0-23).
         */
        get: function () {
            return this._date.getHours();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "mins", {
        /**
         * Get the current minutes.
         * @returns {number} The minutes (0-59).
         */
        get: function () {
            return this._date.getMinutes();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "secs", {
        /**
         * Get the current seconds.
         * @returns {number} The seconds (0-59).
         */
        get: function () {
            return this._date.getSeconds();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Format the date according to a given mask.
     * The mask uses specific characters (e.g., 'Y' for year, 'M' for month, 'D' for day).
     * @param {string} [mask='Y M D'] - The format mask.
     * @returns {string} The formatted date string.
     */
    D.prototype.format = function (mask) {
        if (mask === void 0) { mask = 'Y M D'; }
        var returnStr = '';
        for (var _i = 0, mask_1 = mask; _i < mask_1.length; _i++) {
            var char = mask_1[_i];
            if (utils_1.maskCodes.hasOwnProperty(char)) {
                var evaluated = String(eval("this.".concat(utils_1.maskCodes[char])));
                // pad
                if (['D', 'H', 'I', 'S'].includes(char)) {
                    evaluated = evaluated.padStart(2, '0');
                }
                returnStr += evaluated;
            }
            else {
                returnStr += char;
            }
        }
        return returnStr;
    };
    /**
     * Get the time difference between the current date and the instance date.
     * Returns a string representing the difference in years, months, or days.
     * @returns {string} The time difference (e.g., "2 years ago", "5 months from now").
     */
    D.prototype.when = function () {
        var currentDate = new Date();
        var timeDiff = this._date.getTime() - currentDate.getTime();
        var dayDiff = Math.round(timeDiff / 1000 / 60 / 60 / 24);
        var monthDiff = Math.round(dayDiff / 30);
        var yearDiff = Math.round(dayDiff / 365.25);
        if (Math.abs(yearDiff) > 0) {
            return (0, utils_1.formatTimeDiff)(yearDiff, 'year');
        }
        if (Math.abs(monthDiff) > 0) {
            return (0, utils_1.formatTimeDiff)(monthDiff, 'month');
        }
        if (Math.abs(dayDiff) > 0) {
            return (0, utils_1.formatTimeDiff)(dayDiff, 'day');
        }
        return 'today';
    };
    return D;
}());
module.exports = D;

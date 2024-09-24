import {
  months,
  mons,
  days,
  dys,
  maskCodes,
  formatTimeDiff,
} from './utils';

/**
 * A class representing a custom date object with various utility methods.
 */
class D {
  private _date: Date;

  /**
   * Create a D instance.
   * @param {...any} args - The arguments passed to the Date constructor.
   */
  constructor(...args: ConstructorParameters<typeof Date>) {
    this._date = new Date(...args);
  }

  /**
   * Get the full year of the date.
   * @returns {number} The full year (e.g., 2024).
   */
  get year(): number {
    return this._date.getFullYear();
  }

  /**
   * Get the last two digits of the year.
   * @returns {number} The last two digits of the year (e.g., 24 for 2024).
   */
  get yr(): number {
    return this._date.getFullYear() % 100;
  }

  /**
   * Get the full name of the month.
   * @returns {string} The full name of the month (e.g., "January").
   */
  get month(): string {
    return months[this._date.getMonth()];
  }

  /**
   * Get the abbreviated month name.
   * @returns {string} The abbreviated month name (e.g., "Jan").
   */
  get mon(): string {
    return mons[this._date.getMonth()];
  }

  /**
   * Get the full name of the day of the week.
   * @returns {string} The full name of the day (e.g., "Monday").
   */
  get day(): string {
    return days[this._date.getDay()];
  }

  /**
   * Get the abbreviated name of the day of the week.
   * @returns {string} The abbreviated name of the day (e.g., "Mon").
   */
  get dy(): string {
    return dys[this._date.getDay()];
  }

  /**
   * Get the day of the month.
   * @returns {number} The day of the month (1-31).
   */
  get date(): number {
    return this._date.getDate();
  }

  /**
   * Get the formatted day of the month with ordinal suffix (e.g., "1st", "2nd").
   * @returns {string} The formatted date with an ordinal suffix.
   */
  get fancyDate(): string {
    const dateNum = String(this.date);
    const lastDigit = dateNum.slice(-1);
    // exceptions
    if ([11, 12, 13].includes(this.date)) {
      return `${dateNum}th`;
    }
    switch (lastDigit) {
      case '1':
        return `${dateNum}st`;
      case '2':
        return `${dateNum}nd`;
      case '3':
        return `${dateNum}rd`;
      default:
        return `${dateNum}th`;
    }
  }

  /**
   * Get the current hour in 24-hour format.
   * @returns {number} The hour of the day (0-23).
   */
  get hours(): number {
    return this._date.getHours();
  }

  /**
   * Get the current minutes.
   * @returns {number} The minutes (0-59).
   */
  get mins(): number {
    return this._date.getMinutes();
  }

  /**
   * Get the current seconds.
   * @returns {number} The seconds (0-59).
   */
  get secs(): number {
    return this._date.getSeconds();
  }

  /**
   * Format the date according to a given mask.
   * The mask uses specific characters (e.g., 'Y' for year, 'M' for month, 'D' for day).
   * @param {string} [mask='Y M D'] - The format mask.
   * @returns {string} The formatted date string.
   */
  format(mask = 'Y M D'): string {
    let returnStr = '';
    for (const char of mask) {
      if (maskCodes.hasOwnProperty(char)) {
        let evaluated = String(eval(`this.${maskCodes[char]}`));
        // pad
        if (['D', 'H', 'I', 'S'].includes(char)) {
          evaluated = evaluated.padStart(2, '0');
        }
        returnStr += evaluated;
      } else {
        returnStr += char;
      }
    }
    return returnStr;
  }

  /**
   * Get the time difference between the current date and the instance date.
   * Returns a string representing the difference in years, months, or days.
   * @returns {string} The time difference (e.g., "2 years ago", "5 months from now").
   */
  when(): string {
    const currentDate = new Date();
    const timeDiff = this._date.getTime() - currentDate.getTime();
    const dayDiff = Math.round(timeDiff / 1000 / 60 / 60 / 24);
    const monthDiff = Math.round(dayDiff / 30);
    const yearDiff = Math.round(dayDiff / 365.25);

    if (Math.abs(yearDiff) > 0) {
      return formatTimeDiff(yearDiff, 'year');
    }

    if (Math.abs(monthDiff) > 0) {
      return formatTimeDiff(monthDiff, 'month');
    }

    if (Math.abs(dayDiff) > 0) {
      return formatTimeDiff(dayDiff, 'day');
    }

    return 'today';
  }
}

module.exports = D;

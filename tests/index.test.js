const D = require('../src/index');
const {
  months,
  mons,
  days,
  dys,
  maskCodes,
} = require('../src/utils');

const today = new Date();
const bDay = new D(2020, 0, 1, 10, 30, 45); // Jan 1, 2020, 10:30:45
const tomorrow = new Date(today);
const yesterday = new Date(today);
tomorrow.setDate(today.getDate() + 1);
yesterday.setDate(today.getDate() - 1);
const dTomorrow = new D(tomorrow);
const dYesterday = new D(yesterday);
const dToday = new D(today);

// Helper functions for readability
const isWithinRange = (value, lower, upper) =>
  value >= lower && value <= upper;

// Year and Month tests
describe('D Class Date Methods', () => {
  test('D.year should return the full year', () => {
    expect(dToday.year).toBe(today.getFullYear());
  });

  test('D.yr should return the last two digits of the year', () => {
    expect(dToday.yr).toBe(today.getFullYear() % 100);
    expect(bDay.yr).toBe(20);
  });

  test('D.month should return the full month name', () => {
    expect(bDay.month).toBe(months[0]); // January
  });

  test('D.mon should return the abbreviated month name', () => {
    expect(bDay.mon).toBe(mons[0]); // Jan
  });
});

// Day and Date tests
describe('D Class Day Methods', () => {
  test('D.day should return the full name of the day of the week', () => {
    expect(bDay.day).toBe(days[3]); // Wednesday
  });

  test('D.dy should return the abbreviated day of the week', () => {
    expect(bDay.dy).toBe(dys[3]); // Wed
  });

  test('D.date should return the day of the month', () => {
    expect(bDay.date).toBe(1);
  });

  test('D.fancyDate should return the day of the month with the ordinal suffix', () => {
    expect(bDay.fancyDate).toBe('1st');
    const secondDay = new D(2020, 0, 2);
    expect(secondDay.fancyDate).toBe('2nd');
    const thirdDay = new D(2020, 0, 3);
    expect(thirdDay.fancyDate).toBe('3rd');
    const eleventhDay = new D(2020, 0, 11);
    expect(eleventhDay.fancyDate).toBe('11th');
  });
});

// Time (Hours, Minutes, Seconds) tests
describe('D Class Time Methods', () => {
  test('D.hours should return the correct hour (24-hour format)', () => {
    expect(bDay.hours).toBe(10);
  });

  test('D.mins should return the correct minutes', () => {
    expect(bDay.mins).toBe(30);
  });

  test('D.secs should return the correct seconds', () => {
    expect(bDay.secs).toBe(45);
  });
});

// Format tests
describe('D Class Format Method', () => {
  test('D.format() should return a default formatted date string', () => {
    expect(bDay.format()).toBe('2020 January 01');
  });

  test('D.format(mask) should format the date based on custom masks', () => {
    expect(bDay.format('y/m/d')).toBe('20/Jan/1');
    expect(bDay.format('H:I:S')).toBe('10:30:45');
    expect(bDay.format('h:i:s')).toBe('10:30:45'); // same because not using 12-hour format
    expect(bDay.format('Y-M-D h:I:S')).toBe(
      '2020-January-01 10:30:45'
    );
    expect(bDay.format('M #')).toBe('January 1st');
  });

  test('D.format() should handle leading zeroes correctly', () => {
    const tenthDay = new D(2020, 0, 10, 5, 9, 7); // Jan 10, 2020, 05:09:07
    expect(tenthDay.format('D H:I:S')).toBe('10 05:09:07');
  });
});

// When() method tests (time difference)
describe('D Class When Method', () => {
  test('D.when() should return correct time difference for past dates', () => {
    expect(dYesterday.when()).toBe('1 day ago');
    expect(bDay.when()).toBe('5 years ago'); // Assuming today is 2025 or later
  });

  test('D.when() should return "today" for the current date', () => {
    expect(dToday.when()).toBe('today');
  });

  test('D.when() should return correct time difference for future dates', () => {
    expect(dTomorrow.when()).toBe('1 day from now');
  });
});

// Edge Cases
describe('Edge Case Handling', () => {
  test('D.format should handle non-standard characters in the mask', () => {
    expect(bDay.format('Y~M~D')).toBe('2020~January~01');
  });

  test('D.when() should handle leap years correctly', () => {
    const leapYear = new D(2024, 1, 29); // Feb 29, 2024 (leap year)
    const yearFromNow = new D(
      new Date(
        today.getFullYear() + 1,
        today.getMonth(),
        today.getDate()
      )
    );
    expect(yearFromNow.when()).toBe('1 year from now');
  });
});

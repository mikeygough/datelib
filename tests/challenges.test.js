const {
  consecutiveDates,
  consecutiveDatesStretch,
  orderDates,
  orderDatesStretch,
  nextDate,
  nextDateStretch,
  whensYourParty,
  whensYourPartyStretch,
} = require('../src/challenges');

// setup
const today = new Date();
const tomorrow = new Date(today);
const yesterday = new Date(today);
tomorrow.setDate(today.getDate() + 1);
yesterday.setDate(today.getDate() - 1);

describe('consecutiveDates', () => {
  const cases = [
    {
      input: [new Date(2019, 0, 1), 3, 1],
      expected: [
        new Date(2019, 0, 1),
        new Date(2019, 0, 2),
        new Date(2019, 0, 3),
      ],
    },
  ];

  cases.forEach(({ input, expected }) => {
    test(`returns ${expected} for ${input}`, () => {
      // compare millisecond times instead of object reference
      const actual = consecutiveDates(...input).map((date) =>
        date.getTime()
      );
      const expectedTimes = expected.map((date) => date.getTime());
      expect(actual).toEqual(expectedTimes);
    });
  });
});

describe('consecutiveDatesStretch', () => {
  const cases = [
    {
      input: [new Date(2019, 0, 1), 3, 1, 'year'],
      expected: [
        new Date(2019, 0, 1),
        new Date(2020, 0, 1),
        new Date(2021, 0, 1),
      ],
    },
  ];

  cases.forEach(({ input, expected }) => {
    test(`returns ${expected} for ${input}`, () => {
      const actual = consecutiveDatesStretch(...input).map((date) =>
        date.getTime()
      );
      const expectedTimes = expected.map((date) => date.getTime());
      expect(actual).toEqual(expectedTimes);
    });
  });
});

describe('orderDates', () => {
  const cases = [
    {
      input: [[tomorrow, yesterday, today]],
      expected: [yesterday, today, tomorrow],
    },
  ];

  cases.forEach(({ input, expected }) => {
    test(`returns ${expected} for ${input}`, () => {
      const actual = orderDates(...input).map((date) =>
        date.getTime()
      );
      const expectedTimes = expected.map((date) => date.getTime());
      expect(actual).toEqual(expectedTimes);
    });
  });
});

describe('orderDatesStretch', () => {
  const cases = [
    {
      input: [[tomorrow, yesterday, today]],
      expected: {
        past: [yesterday],
        present: [today],
        future: [tomorrow],
      },
    },
  ];

  cases.forEach(({ input, expected }) => {
    test(`returns ${expected} for ${input}`, () => {
      const actual = orderDatesStretch(...input);

      expect(actual.past.map((date) => date.getTime())).toEqual(
        expected.past.map((date) => date.getTime())
      );
      expect(actual.present.map((date) => date.getTime())).toEqual(
        expected.present.map((date) => date.getTime())
      );
      expect(actual.future.map((date) => date.getTime())).toEqual(
        expected.future.map((date) => date.getTime())
      );
    });
  });
});

describe('nextDate', () => {
  const cases = [
    {
      input: [[tomorrow, yesterday, today]],
      expected: tomorrow,
    },
  ];

  cases.forEach(({ input, expected }) => {
    test(`returns ${expected} for ${input}`, () => {
      const actual = nextDate(...input).getTime();
      const expectedTimes = expected.getTime();
      expect(actual).toEqual(expectedTimes);
    });
  });
});

describe('nextDateStretch', () => {
  const cases = [
    {
      input: [[tomorrow, yesterday, today]],
      expected: 'Your appointment is in 1 day.',
    },
  ];

  cases.forEach(({ input, expected }) => {
    test(`returns ${expected} for ${input}`, () => {
      const actual = nextDateStretch(...input);
      const expectedTimes = expected;
      expect(actual).toEqual(expectedTimes);
    });
  });
});

describe('whensYourParty', () => {
  const cases = [
    {
      input: [new Date('September, 15, 2024'), 2025],
      expected: 'Mon',
    },
  ];

  cases.forEach(({ input, expected }) => {
    test(`returns ${expected} for ${input}`, () => {
      const actual = whensYourParty(...input);
      const expectedTimes = expected;
      expect(actual).toEqual(expectedTimes);
    });
  });
});

describe('whensYourPartyStretch', () => {
  const cases = [
    {
      input: [new Date('September, 15, 2022')],
      expected: ['Thur', 'Fri', 'Sun'],
    },
  ];

  cases.forEach(({ input, expected }) => {
    test(`returns ${expected} for ${input}`, () => {
      const actual = whensYourPartyStretch(...input);
      const expectedTimes = expected;
      expect(actual).toEqual(expectedTimes);
    });
  });
});

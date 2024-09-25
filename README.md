# datelib

![npm bundle size](https://img.shields.io/bundlephobia/min/%40mikeygough%2Fdatelib)

![NPM Version](https://img.shields.io/npm/v/%40mikeygough%2Fdatelib)

datelib is a JS library for dates.

this library includes the D object with several date helper methods. D wraps the traditional `Date` object and provides programmer convenienances including:

- D.year

- D.yr

- D.month

- D.mon

- D.dy

- D.date

- D.getfancyDate [this is a helper method for D.format()]

- D.hours

- D.mins

- D.secs

- D.format()

- D.when()

### testing notes

this repository includes unit tests. the tests are helpful for understanding how each function should perform. if you add a new function, please add a corresponding test.

run all tests with:

`npm test`

generate a test coverage report with:

`npm jest --coverage`

#### additional notes

dates in JS are represented as the number of milliseconds since Thursday, January 1, 1970, 12:00 AM. this is called the unix Epoch.

each day takes 86,400 seconds.

86,400 / 60 -> minutes

86,400 / 60 / 60 -> hours

86,400 / 60/ 60 / 24 -> days

javascript breaks it down to the millisecond, so 86,400,000 milliseconds in a day!

# datelib

a JS library for dates.

`npm test` to run all tests

`npm jest --coverage` to run test coverage report

#### notes

dates in JS are represented as the number of milliseconds since Thursday, January 1, 1970, 12:00 AM. this is called the unix Epoch.

each day takes 86,400 seconds.

86,400 / 60 -> minutes

86,400 / 60 / 60 -> hours

86,400 / 60/ 60 / 24 -> days

javascript breaks it down to the millisecond, so 86,400,000 milliseconds in a day!

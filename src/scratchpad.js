const today = new Date();
console.log(today);

// number of milliseconds since 1970
console.log(today.getTime());

// years since 1970
console.log(today / 1000 / 60 / 60 / 24 / 365.25);
console.log(today / 1000 / 86400 / 365.25);

// fake birthday
const birthday = new Date('Jan 1, 2001');
console.log(birthday);

// age in seconds
console.log(`age in seconds ${(today - birthday) / 1000}`);

// age in minutes
console.log(`age in minutes ${(today - birthday) / 1000 / 60}`);

// age in hours
console.log(`age in hours ${(today - birthday) / 1000 / 60 / 60}`);

// age in days
console.log(
  `age in days ${(today - birthday) / 1000 / 60 / 60 / 24}`
);

// age in years
console.log(
  `age in years ${(today - birthday) / 1000 / 60 / 60 / 24 / 365.25}`
);

// get the components from a date
// note that months are zero-indexed.
console.log(
  birthday.getFullYear(),
  birthday.getMonth(),
  birthday.getDate()
);

// you may do something like this to get the month...
const months = [
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

console.log(months[birthday.getMonth()]);

// you may do something like this to get the day of the week...
// note that day of the week is also zero-indexed
const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

console.log(days[birthday.getDay()]);

// offsets
const date = new Date(); // start with a date
const startDate = new Date(date); // copy
const dueDate = new Date(date); // copy

// start date is seven days ago
startDate.setDate(date.getDate() - 7);
// due date is three days from now
dueDate.setDate(date.getDate() + 3);

console.log(`Start Date: ${startDate}`);
console.log(`Due Date: ${dueDate}`);

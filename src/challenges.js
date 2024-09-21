// challenge 1
function consecutiveDates(date, repeat, offset) {
  const dates = [];
  for (let i = 0; i < repeat; i++) {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + i * offset);
    dates.push(newDate);
  }
  return dates;
}

// challenge 1 - stretch
function consecutiveDatesStretch(
  date,
  repeat = 1,
  offset = 1,
  unit = 'day'
) {
  const dates = [];
  for (let i = 0; i < repeat; i++) {
    const newDate = new Date(date);
    switch (unit) {
      case 'day':
        newDate.setDate(date.getDate() + i * offset);
        break;
      case 'month':
        newDate.setMonth(date.getMonth() + i * offset);
        break;
      case 'year':
        newDate.setFullYear(date.getFullYear() + i * offset);
        break;
    }
    dates.push(newDate);
  }
  return dates;
}

// challenge 2
function orderDates(dates) {
  const newDates = [...dates];
  return newDates.sort((a, b) => a - b);
}

// challenge 2 - stretch
function orderDatesStretch(dates) {
  const today = new Date();
  const y = today.getFullYear();
  const m = today.getMonth();
  const d = today.getDate();

  const datesObj = {
    past: [],
    present: [],
    future: [],
  };

  dates.forEach((date) => {
    if (
      y === date.getFullYear() &&
      m === date.getMonth() &&
      d === date.getDate()
    ) {
      datesObj['present'].push(date);
    } else if (date < today) {
      datesObj['past'].push(date);
    } else {
      datesObj['future'].push(date);
    }
  });

  return datesObj;
}

// challenge 3
function nextDate(dates) {
  const orderedDates = orderDates(dates);
  const now = new Date();
  for (let i = 0; i < orderedDates.length; i++) {
    const date = orderedDates[i];
    if (date > now) {
      return date;
    }
  }
}

// challenge 3 - stretch
function nextDateStretch(dates) {
  const orderedDates = orderDates(dates);
  const now = new Date();
  for (let i = 0; i < orderedDates.length; i++) {
    const date = orderedDates[i];
    if (date > now) {
      const timeDiff = date - now;
      const dayDiff = Math.round(timeDiff / 1000 / 60 / 60 / 24);
      return `Your appointment is in ${dayDiff} ${
        dayDiff != 1 ? 'days' : 'day'
      }.`;
    }
  }
}

// challenge 4
function whensYourParty(date, year) {
  const newBday = new Date(date);
  newBday.setFullYear(year);
  const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
  return days[newBday.getDay()];
}

// challenge 4 - stretch
function whensYourPartyStretch(date) {
  const days = [];
  const currentYear = new Date().getFullYear();
  const birthYear = date.getFullYear();
  const age = currentYear - birthYear + 1;
  for (let i = 0; i < age; i++) {
    const oldBirthday = new Date(date);
    days.push(whensYourParty(oldBirthday, birthYear + i));
  }
  return days;
}

module.exports.consecutiveDates = consecutiveDates;
module.exports.consecutiveDatesStretch = consecutiveDatesStretch;
module.exports.orderDates = orderDates;
module.exports.orderDatesStretch = orderDatesStretch;
module.exports.nextDate = nextDate;
module.exports.nextDateStretch = nextDateStretch;
module.exports.whensYourParty = whensYourParty;
module.exports.whensYourPartyStretch = whensYourPartyStretch;

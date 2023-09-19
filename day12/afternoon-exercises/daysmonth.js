const daysMonths = () => {
  let month = Number(prompt("Give me your month number, eg. March 3, ...:"));
  switch (month) {
    case 2:
      document.write("28 days in this month!");
      break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      document.write("31 days in this month!");
      break;
    default:
      document.write("30 days in this month!");
      break;
  }
};

daysMonths();

// other solution:
// const month = Number(prompt('Enter a month number: '));
// let days = 31;

// if (month === 2) {
//   days = 28;
// } else if (month === 4) {
//   days = 30;
// } else if (month === 6) {
//   days = 30;
// } else if (month === 9) {
//   days = 30;
// } else if (month === 11) {
//   days = 30;
// }

// document.write('Month ' + month + ' has ' + days + ' days');

// and another one:

// const month = Number(prompt('Enter a month number: '));
// let days = 31;

// if (month === 2) {
//   days = 28;
// } else if (
//   month === 4 || month === 6 || month === 9 || month === 11
// ) {
//   days = 30;
// }

// document.write('Month ' + month + ' has ' + days + ' days');

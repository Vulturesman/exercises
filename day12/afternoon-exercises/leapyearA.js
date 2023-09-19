// const leapYear = () => {
//   const year = Number(prompt("Write me your desired year: "));

//   if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if (year % 400 === 0) {
//         document.write("This year " + year + " is a leap year.");
//       } else {
//         document.write("This year " + year + " is NOT a leap year.");
//       }
//     } else {
//       document.write("This year " + year + " is a leap year.");
//     }
//   } else {
//     document.write("This year " + year + " is NOT a leap year.");
//   }
// };

// leapYear();

// ------------------------------
// Leap year 2 + 3

// In your program for a leap year, output the result using document.write. However, you can only call the function twice in the whole program.

// In your program for a leap year you can only call document.write twice in the whole program. Also, you can only use two logical operators.

const leapYear = () => {
  const year = Number(prompt("Write me your desired year: "));

  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    document.write(year + " is a leap year");
  } else {
    document.write(year + " is NOT a leap year");
  }
};

leapYear();

document.qu;

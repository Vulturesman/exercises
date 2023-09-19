const temperature = () => {
  const temp1 = Number(prompt("What was the temperatue at 8am?"));
  const temp2 = Number(prompt("What was the temperatue at 4pm?"));
  const temp3 = Number(prompt("What was the temperatue at midnight?"));

  if (temp1 > temp2 && temp1 > temp3) {
    document.write(
      "The highest temperature was at 8am, it showed " + temp1 + "°C."
    );
  } else if (temp2 > temp1 && temp2 > temp3) {
    document.write(
      "The highest temperature was at 4pm, it showed " + temp2 + "°C."
    );
  } else if (temp3 > temp1 && temp3 > temp2) {
    document.write(
      "The highest temperature was at midnight, it showed " + temp3 + "°C."
    );
  } else {
    document.write(
      "Maybe you put some similar temperatures, just to check here are the measurements: " +
        temp1 +
        " " +
        temp2 +
        " " +
        temp3
    );
  }
};

temperature();

// --------------------------
// possible solution:

// 'use strict';

// const temp1 = Number(prompt('Enter first temperature:'));
// const temp2 = Number(prompt('Enter second temperature:'));
// const temp3 = Number(prompt('Enter third temperature:'));

// let tempMax = 0;

// if (temp1 > temp2) {
//   if (temp1 > temp3) {
//     tempMax = temp1;
//   } else {
//     tempMax = temp3
//   }
// } else {
//   if (temp2 > temp3) {
//     tempMax = temp2;
//   } else {
//     tempMax = temp3
//   }
// }

// document.write('Highest temperature: ' + tempMax);

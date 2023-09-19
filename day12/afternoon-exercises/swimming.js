const swimming = () => {
  const swimmerA = prompt("Write the name of first swimmer:");
  const swimmerB = prompt("Write the name of second swimmer:");
  const swimmerC = prompt("Write the name of third swimmer:");

  const time1 = Math.floor(Math.random() * (60 - 45) + 45);
  const time2 = Math.floor(Math.random() * (60 - 45) + 45);
  const time3 = Math.floor(Math.random() * (60 - 45) + 45);

  if (time1 > time2 && time1 > time3) {
    document.write(swimmerA + " was the fastest with time: " + time1);
  } else if (time2 > time1 && time2 > time3) {
    document.write(swimmerB + " was the fastest with time: " + time2);
  } else if (time3 > time1 && time3 > time2) {
    document.write(swimmerC + " was the fastest with time: " + time3);
  }
};

swimming();

// ------------------------------------------
// correct solution with goal:
// Write a webpage that simulates a classic Olympic discipline swimming 100 m freestyle. The swimmers in this discipline regularly achieve times below 50 seconds. Your webpage should ask for three names of swimmers. Then it generates three random times between 45 and 60 seconds that represent the swimmers' swimming times. Then it outputs who won the gold medal, who won the silver one, and who won the bronze one. Run the webpage several times to check it is generating different results every time.

// 'use strict';

// const swimmerOne = prompt('Enter the swimmers name:');
// const swimmerTwo = prompt('Enter the next swimmers name:');
// const swimmerThree = prompt('Enter the another swimmers name:');

// const randomTime = (min, max) => {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const timeOne = randomTime(45, 60);
// const timeTwo = randomTime(45, 60);
// const timeThree = randomTime(45, 60);

// if (timeOne > timeTwo && timeOne > timeThree) {

//     document.write('1. ' + swimmerOne  + ' (Gold)');

//     if (timeTwo > timeThree) {
//         document.write('2. ' + swimmerTwo + ' (Silver)');
//         document.write('3. ' + swimmerThree + ' (Bronze)');
//     } else {
//         document.write('2. ' + swimmerThree + ' (Silver)');
//         document.write('3. ' + swimmerTwo + ' (Bronze)');
//     }
// } else if (timeTwo > timeOne && timeTwo > timeThree) {

//     document.write('1. ' + swimmerTwo + ' (Gold)');

//     if (timeOne > timeThree) {
//         document.write('2. ' + swimmerOne + ' (Silver)');
//         document.write('3. ' + swimmerThree + ' (Bronze)');
//     } else {
//         document.write('2. ' + swimmerThree + ' (Silver)');
//         document.write('3. ' + swimmerOne + ' (Bronze)');
//     }
// } else if (timeThree > timeOne && timeThree > timeTwo) {

//     document.write('1. ' + swimmerThree + ' (Gold)');

//     if (timeOne > timeTwo) {
//         document.write('2. ' + swimmerOne + ' (Silver)');
//         document.write('3. ' + swimmerTwo + ' (Bronze)');
//     } else {
//         document.write('2. ' + swimmerTwo + ' (Silver)');
//         document.write('3. ' + swimmerOne + ' (Bronze)');
//     }
// } else {
//     document.write('Something went wrong.');
// }

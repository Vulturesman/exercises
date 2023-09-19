const busTickets = () => {
  const age = Number(prompt("Please enter your age:"));
  const price = 12;
  const disc35 = 35;
  const disc65 = 65;
  const disc100 = 100;
  const other = 50;
  if (age < 6) {
    document.write("You are a small offspring, you go for free!");
  } else if (age >= 6 && age <= 15) {
    const discount = Math.round(price * (disc35 / 100));
    document.write("You are a pupil, your charge is: EUR " + discount);
  } else if (age >= 16 && age <= 26) {
    const discount = Math.round(price * (disc65 / 100));
    document.write("You are a student, your charge is: EUR " + discount);
  } else if (age >= 37 && age <= 64) {
    const discount = Math.round(price * (disc100 / 100));
    document.write("You are an adult, your charge is: EUR " + discount);
  } else {
    const discount = Math.round(price * (other / 100));
    document.write("You are almost dead, your charge is: EUR " + discount);
  }
};

busTickets();

// -------------------------
// possible solution:

// 'use strict';
// const age = Number(prompt('Please enter your age:'));
// const basePrice = 12;
// let price = 0;

// if (age < 6) {
//   price = 0;
// } else if (age <= 15) {
//   price = basePrice * 0.35;
// } else if (age <= 26) {
//   price = basePrice * 0.65;
// } else if (age <= 64) {
//   price = basePrice;
// } else {
//   price = basePrice * 0.5
// }

// document.write('TIcket price: ' + price);

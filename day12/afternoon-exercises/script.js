// I have 10000 EUR. Every year the amount I have gains interest in the size of 2.8%.
// Use a while loop to print one line (into the console) for every year until my money is doubled (>= 20000), showing how much money will I have each year.

// let money = 10000;

// const interest = 2.8;

// while (money < 20000) {
//     money += money * interest / 100;
//     console.log(money);
// }





// breaking a loop

// let i = 0;
// while (i < 10) {
//     i++;
//     console.log(i);
 
//     if (i == 5) {
//         break; // the loop stops after i reaches 2
//     }
// }





// skipping iteration

// const interest = 2.8;
// let money = 10000;
// let year = 2023;

// while (money < 20000) {
// year++;
// if (year < 2027) {
// continue;
// }

// money += money * (interest / 100);
// console.log(year + ' ' + money.toFixed(2));

// if (year >= 2031) {
//     break;
// }
// }






const interest = 2.8;
let money = 10000;
let year = 2023;

for (let i = 0; i < 6; i++) {
    money += money * (interest / 100);
    year++;
    console.log(year + ' ' + money.toFixed(2)); 
}
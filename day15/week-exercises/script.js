let page = 1;
const limit = 10;

const number = 12;

const verdict = number % 2 ? "odd" : "even";
/* remainder from number / 2 is 0 (false) = even,
remainder from number / 2 is 1 (true) = odd....

or
const verdict = number % 2 == 0 ? 'even' : 'odd'

*/

console.log(verdict);

const logMyAge = () => {
  console.log(`My age is 33 years.`);
};

logMyAge();

const greet = (who) => {
  console.log(`Hello, ${who}!!!`);
};

greet("Jakub");

const redBox = document.getElementById("red-box");
console.log(redBox);

const greenBox = document.querySelector(".box.box--green");
console.log(greenBox);

const boxes = document.querySelectorAll(".box");
console.log(boxes);

const getBoxByColor = (color) => {
  // optional -> return document.querySelector(".box--" + color);
  return document.querySelector(`.box--${color}`);
};

// const getBoxByColor = (color) => {
//   const findBox = document.querySelector(`.box--${color}`);
//   return console.log(findBox);
// };

console.log(getBoxByColor("red"));

const liElements = document.querySelectorAll("ul.cars li");
console.log(liElements);

/*
Using the HTML from the previous exercise, define a new empty array in a variable called brands.
Loop through the <li> elements, extract their contents with .innerText and add every brand name as a new element of the array brands.
Then log the value of the array brands into the console.

*/

const brands = [];

liElements.forEach((item) => {
  brands.push(item.innerText);
});

console.log(brands);

/*
Modify the code from the previous exercise so that the looping ends when the array brands already has 3 elements. Use .length and break; to do that.

*/

let brands2 = [];
const liElements2 = document.querySelectorAll("ul.cars li");
for (let i = 0; i < liElements2.length; i++) {
  if (brands2.length == 3) {
    break;
  }
  brands2.push(liElements2[i].innerText);
}

console.log(brands2);

/*
Modify the code from the previous exercise so that when during the looping you encounter the brand Ford, it will be skipped and not added to the array. Use continue; to do that.

*/

let brands3 = [];
const liElements3 = document.querySelectorAll("ul.cars li");
for (let i = 0; i < liElements3.length; i++) {
  if (liElements[i].innerText == "Ford") {
    continue;
  }
  brands3.push(liElements3[i].innerText);
}

console.log(brands3);

// Take the following code and put it into your code:

const cart = {
  total: {
    amount: 91.6,
    currency: "CZK",
  },
  items: [
    {
      name: "Apples",
      amount: "2kg",
      price: 62.6,
    },
    {
      name: "Cinnamon",
      amount: 1,
      price: 29,
    },
  ],
};

// Try to name the data types of the following:
/*
cart = object;
cart.total = object;



*/

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
    {
      name: "testik",
      amount: 3,
      price: 17,
    },
  ],
};

// Try to name the data types of the following:
/*
cart = object;
cart.total = object;
cart.total.amount = number;
cart.items = array;
cart.items[0] = object;
cart.items[0].name = string;
cart.items[0].amount = string;
cart.items[1].amount = number;
*/

let stringifyCart = JSON.stringify(cart);
console.log(stringifyCart);

const shopping_cart = JSON.parse(stringifyCart);
console.log(shopping_cart);

/*
Declare a variable named cheapest and initialize it with the value null.
Then use .forEach to loop through the array shopping_cart.items. Your goal is to find the cheapest of the products in the cart and put it into the variable cheapest.
In the end, log the value of cheapest into the console. It should show this object:
{
    name: 'Cinnamon',
    amount: 1,
    price: 29
}
*/

let cheapest = null;
shopping_cart.items.forEach((item) => {
  if (cheapest === null || item.price < cheapest.price) {
    cheapest = item;
  }
});
console.log(cheapest);

/*
In your HTML code, create a new button like this:
<button class="remove-cheapest">Remove cheapest product</button>
Write JavaScript code so that when the button is clicked, the cheapest of the products in the shopping_cart constant is found and removed from shopping_cart.items.
Also after clicking of the button, log the value of shopping_cart into the console. You should see the object of "Cinnamon" disappear.

buttonRemove.addEventListener();
*/

const buttonRemove = document.querySelector("button.remove-cheapest");

buttonRemove.addEventListener("click", () => {
  let cheapest2 = null;
  let cheapest2Index = null;
  shopping_cart.items.forEach((item, index) => {
    if (cheapest2 === null || item.price < cheapest2.price) {
      cheapest2 = item;
      cheapest2Index = index;
    }
  });
  shopping_cart.items.splice(cheapest2Index, 1);

  console.log(shopping_cart);
});

/*
In the HTML of your page, add this element:
<ul class="items"></ul>
Declare a function displayItems which will accept one argument - an object similar to the one that we have in constants cart and shopping_cart.
The function is supposed to create HTML <li> elements within the <ul class="items"> element, one for each of the items in the cart.
Then call the function, passing the shopping_cart to it as argument like this: displayItems(shopping_cart).
The resulting HTML might look like this.
<ul class="items">
    <li class="items__item">Apples (2kg)</li>
    <li class="items__item">Cinnamon (1)</li>
</ul>

*/

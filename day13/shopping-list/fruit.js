// 'string';
// "also a string";
// `a string too`;

// const value = 'hello';

// `a string too which ${value} can container values`;
// 'a string too which ' + value + 'can cotain values';

// fruits.forEach((element, index) => {
//   console.log("The element: ", element);
//   console.log("The index: ", index);

//   ul.innerHTML += `<li>${element.name}</li>`;
// });

const fruits = [
  {
    name: "apple",
    count: 13,
  },
  {
    name: "pear",
    count: 2,
  },
  {
    name: "banana",
    count: 3,
  },
  {
    name: "orange",
    count: 2,
  },
  {
    name: "mango",
    count: 1,
  },
];

console.log(fruits);

// for (let u = 0; u < 10; u++) {
//     console.log(u);
// }

// find the ul element on the page
const ul = document.querySelector(".list");

// looping with a for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(i);

  console.log(fruits[i]);

  continue;

  // append a `<li>XXX</li>` to its innerHTML
  // where XXX is the name of the fruit
  ul.innerHTML += `<li>${fruits[i].name}</li>`;

  break;

  // same as the line above:
  // ul.innerHTML += '<li>' + fruits[i].name + '</li>';

  // same as the line above:
  // ul.innerHTML = ul.innerHTML + '<li>' + fruits[i].name + '</li>';
}

// a function:
() => {};

fruits.forEach((element, index) => {
  console.log("The element: ", element);

  console.log("Its index: ", index);

  ul.innerHTML += `<li>${element.name}</li>`;
});

fruits.every((element, index) => {
  ul.innerHTML += `<li>${element.name}</li>`;

  if (element.name === "banana") {
    return false;
  }

  return true;
});

fruits.some((element, index) => {
  ul.innerHTML += `<li>${element.name}</li>`;

  if (element.name === "pear") {
    return true;
  }
});

// const myFunction = (foo, bar) => {

//     ul.innerHTML += `<li>${foo.name}</li>`;

//     if (foo.name === 'pear') {
//         return true;
//     }
// }

// myFunction({
//     name: 'pear',
//     count:  2
// }, 1);

const arrayOfResults = fruits.map((element, index) => {
  return `<li>${index + 1}: ${element.name}</li>`;
});

console.log(arrayOfResults);

const vegetables = [
  {
    name: "potatoes",
    count: 5,
    unit: "kg",
  },
  {
    name: "tomatoes",
    count: 0.5,
    unit: "kg",
  },
  {
    name: "carrots",
    count: 1,
    unit: "bunch",
  },
];

const merged_array = fruits.concat(vegetables);

console.log(merged_array);

const valuesWithUnit = merged_array.filter((element, index) => {
  if (element.unit === undefined) {
    return false; // these values will be excluded from the result
  } else {
    return true; // these values will be included in the result
  }
});

console.log(valuesWithUnit);

const firstElementWithBunchUnit = valuesWithUnit.find((element, index) => {
  if (element.unit === "bunch") {
    return true;
  } else {
    return false;
  }
});

console.log(firstElementWithBunchUnit);

console.log(arrayOfResults);

const html = arrayOfResults.join("");

console.log(html);

ul.innerHTML = html;

const fruits2 = [
  {
    name: "apple",
    count: 13,
  },
  {
    name: "pear",
    count: 2,
  },
  {
    name: "banana",
    count: 3,
  },
  {
    name: "orange",
    count: 2,
  },
  {
    name: "mango",
    count: 1,
  },
];

const vegetables2 = [
  {
    name: "potatoes",
    count: 5,
    unit: "kg",
  },
  {
    name: "tomatoes",
    count: 0.5,
    unit: "kg",
  },
  {
    name: "carrots",
    count: 1,
    unit: "bunch",
  },
];

const result = fruits
  .concat(vegetables)
  .map((element) => {
    element.unit = element.unit || "piece";
    return element;
  })
  .filter((element) => {
    return element.count > 1;
  });

const lis = document.querySelectorAll("li");
console.log(lis);

const h1 = document.querySelectorAll("h1");
h1.forEach((headline) => {
  console.log(headline.innerHTML);
});

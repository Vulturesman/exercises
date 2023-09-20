const fruits = [
  {
    name: "apple",
    count: 4,
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

// looping with a for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);

  // find the ul element on the page
  const ul = document.querySelector(".list");
  console.log(ul);

  // append a <li>XXX</li> to its innerHTML
  // where XXX is the name of the fruit

  ul.innerHTML += `<li>${fruits[i].name}</li>`;

  //   or ul.innerHTML += '<li>' + fruits[i].name + '</li>'

  // or ul.innerHTML = ul.innerHTML + '<li>' + fruits[i].name + '</li>'
}

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

fruits.every((element, index) => {
  ul.innerHTML += `<li>${element.name}</li>`;

  if (element.name === "banana") {
    return false;
  }
  return true;
});

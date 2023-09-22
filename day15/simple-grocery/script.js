const groceryList = [
  "apples",
  "bananas",
  "milk",
  "bread",
  "pineapple",
  "chicken breasts",
  "iPhone15",
  "spaghetti",
  "oranges",
  "wheels",
  "tickets",
];

const listDiv = document.querySelector(".list");

groceryList.forEach((groceryItem) => {
  listDiv.innerHTML += `<div class="item">${groceryItem}</div>`;
});

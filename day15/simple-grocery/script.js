const groceryList = [
  {
    name: "apples",
    amount: "4",
  },
  {
    name: "bananas",
    amount: "10",
  },
  {
    name: "milk",
    amount: "1",
  },
  {
    name: "bread",
    amount: "2",
  },
  {
    name: "pineapple",
    amount: "7",
  },
  {
    name: "chicken breasts",
    amount: "2",
  },
  {
    name: "iPhone15",
    amount: "1",
  },
  {
    name: "spaghetti",
    amount: "4",
  },
  {
    name: "oranges",
    amount: "4",
  },
  {
    name: "wheels",
    amount: "2",
  },
  {
    name: "tickets",
    amount: "10",
  },
];

const listDiv = document.querySelector(".list");

groceryList.forEach((groceryItem) => {
  listDiv.innerHTML += `<div class="item">${groceryItem.name}, pieces: ${groceryItem.amount}</div>`;
});

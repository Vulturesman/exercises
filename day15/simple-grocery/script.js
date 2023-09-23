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

const generateList = () => {
  listDiv.innerHTML = "";
  groceryList.forEach((groceryItem) => {
    listDiv.innerHTML += `<div class="item">${groceryItem.name}, pieces: ${groceryItem.amount} <span class="delete">X</span></div>`;
  });
};

generateList();

const addItem = () => {
  const newText = document.getElementById("newItem").value;
  const newAmount = document.getElementById("newAmount").value;

  groceryList.push({
    name: newText,
    amount: newAmount,
  });

  generateList();
};

const deleteItem = document.querySelectorAll(".delete");
deleteItem.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    groceryList.splice(i, 1);
    generateList();
  });
});

/* possible solution:
----
 listDiv.innerHTML += `<div class="item">${newText}, pieces: ${newAmount} <span class="delete">X</span></div>`;

----

const btnAdd = document.querySelector('#btn-add');
btnAdd.addEventListener('click', (e) => {
  const itemName = document.querySelector('#name-input').value;
  const itemAmount = document.querySelector('#amount-input').value;
  items.push(
    { 
      name: itemName,
      amount: itemAmount,
    }
  );
  renderItems();
  e.preventDefault();
});

renderItems();

*/

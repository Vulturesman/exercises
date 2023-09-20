const shoppingList = ["spaghetti", "passata", "onions", "salsiccia"];

console.log(shoppingList);

console.log(shoppingList[3]); // salsiccia
console.log(shoppingList[2]); // third element

// changing the value of the fourth element:
shoppingList[3] = "salami";

console.log(shoppingList);

shoppingList[4] = "oregano";

console.log(shoppingList);

shoppingList[8] = "basil";

console.log(shoppingList);

// "push" a value at the end of the array
shoppingList.push("salt");

console.log(shoppingList);

// prepend a value to the beginning of the array
shoppingList.unshift("cheese");

console.log(shoppingList);

// insert a value at index 2, remove 0 elements starting at index 2
shoppingList.splice(2, 0, "pepper", "spices", "whatever else");

console.log(shoppingList);

// at index 2, remove 1 element and add nothing
shoppingList.splice(2, 1);

console.log(shoppingList);

// at index 8 remove 3 elements
console.log(shoppingList.splice(8, 3));

console.log(shoppingList);

console.log(shoppingList.length);

// remove all elements from an array
// const removedElements = shoppingList.splice(0, shoppingList.length);
// shoppingList = []; // if shoppingList is not a constant

console.log(shoppingList);
console.log(removedElements);

// remove an element from the END of the array
const previouslyLastElement = shoppingList.pop();

console.log(shoppingList);

console.log(previouslyLastElement);

// remove an element from the BEGINNING of the array
shoppingList.shift();

console.log(shoppingList);

console.log(shoppingList.splice(1, 2));

console.log(shoppingList);

const emptyArray = [];

console.log(emptyArray.pop());

let item = null;
while (item !== undefined) {
  item = shoppingList.shift();

  console.log(item);
}

console.log(shoppingList);

console.log(shoppingList.length);

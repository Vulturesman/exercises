const list = document.querySelectorAll("li");

// const arrayOfLists = Array.from(list);

// console.log(arrayOfLists);

// for (let i = 0; i < arrayOfLists.length; i++) {
//   console.log(list);
// }

list.forEach((list_item) => {
  console.log(list_item);
});

const element = document.querySelector("div.main");
const class_name = element.getAttribute("class");
console.log(class_name);

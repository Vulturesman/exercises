// Create a paragraph element with some text and append it to the document body.

const par = document.createElement("p");
par.innerText = "Hello";
document.body.appendChild(par);

// Set the paragraph to have a class with value "main-p" and set colour to blue.

par.className = "main-p";
par.style.color = "blue";

// Try out the elementFromHTML function above and create any element you would like together with it's parent element, in-line styling and classes.

const ul = document.querySelector("ul");

const elementFromHTML = (html) => {
  const div = document.createElement("div"); // creates an element in the memory (not displayed)
  div.innerHTML = html;
  return div.firstChild;
};

// ...

const li = elementFromHTML(
  `<li class="element complex-element">A <strong>rather</strong> complex <a href="#">element</a></li>`
);

ul.appendChild(li);

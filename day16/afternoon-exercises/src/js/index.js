import { Product } from "./Product";

console.log(Product);

const offer = [
  new Product("Tooth", 21990, 1),
  new Product("Hand", 10990, 2),
  new Product("MacBook", 44990, 1),
  new Product("iPhone", 23990, 1),
  new Product("SodaStream", 2990, 2),
  new Product("Marshall DSL 100HR", 31999, 3),
  new Product("Jack Daniels", 429, 150),
];

console.log(offer);

const productList = document.querySelector(".product-list");

offer.forEach((item) => {
  const offerDiv = document.createElement("div");
  offerDiv.className = "product";
  offerDiv.innerHTML = ``;
});

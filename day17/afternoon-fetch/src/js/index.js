/* Idea 1: Cat facts
Use the API endpoints at catfact.ninja
Create a page with a nice cat image and a big button saying "Give me another cat fact".
When the user clicks the button, a random fact is loaded from the API and shown.
*/

const loadData = async () => {
  const response = await fetch("https://catfact.ninja/fact");
  const data = await response.json();

  const catsHTML = document.querySelector("p.cats_p");
  catsHTML.innerHTML = "";
  const result = data.fact;

  catsHTML.innerHTML = result;
};

const button = document.querySelector("#cat_btn");
button.addEventListener("click", () => {
  loadData();
});

/* ------------------------------------
Idea 2: Cryptocurrency prices
Use the API endpoint at https://api2.binance.com/api/v3/ticker/24hr
Create a page showing the current price of your favorite cryptocurrency. Attach the loading of the data to a interval so that it refreshes every couple of seconds. */

const loadCrypto = async (change) => {
  const response = await fetch(" https://api2.binance.com/api/v3/ticker/24hr");
  const data = await response.json();

  const cryptoHTML = document.querySelector(".crypto");
  const parCrypto = document.createElement("p");
  cryptoHTML.appendChild(parCrypto);

  const findElement = data.find((symbol) => {
    parCrypto.innerHTML === "change";
  });
};

setInterval(loadCrypto("SYSBTC"), 10000);

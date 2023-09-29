const button = document.querySelector(".button");
const quote = document.querySelector(".quote");
const img = document.querySelector("img");

const getJoke = async () => {
  const url = "https://api.chucknorris.io/jokes/random";
  const data = await fetch(url);
  const response = await data.json();

  console.log(response);

  quote.textContent = response.value;
  img.src = response.icon_url; //img not working, but just for ilustration
};

button.addEventListener("click", () => {
  getJoke();
});

/*

const button = document.querySelector(".button");
const quote = document.querySelector(".quote");
const img = document.querySelector("img");

class Joke {
    constructor(joke){
        this.joke = joke
    }
}

const getJoke = async () => {
  const url = "https://api.chucknorris.io/jokes/random";

  const myData = new Joke("The wall apologize to Chuck Norris when he walks through it.")

  const options = {
    'method': 'POST',
    'body': JSON.stringify({
        joke: myJoke.joke
    })
    'headers': {'Content-Type': 'application/json'}
  }

  const data = await fetch(url, options);
  const response = await data.json();

  console.log(response);

  quote.textContent = response.value;
  img.src = response.icon_url; //img not working, but just for ilustration
};

button.addEventListener("click", () => {
  getJoke();
});

*/

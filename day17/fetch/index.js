const url = "https://classes.codingbootcamp.cz/assets/classes/602/guardian.php";

// fetch(url); // this will just link the data to retrieve them, this sends request to server, server prepares data and send it back

// const resultOfFetch = fetch(url); // what is the return value??

// console.log(resultOfFetch); // promise -> pending / not direcdtly the data/response -> PREVIEW in fetch/XHR in Network shows still nothing

const loadData = async () => {
  /* async is linked to await */
  const response = await fetch(url);
  console.log(response);

  //   const resultOfJsonCall = response.json();
  //   console.log(resultOfJsonCall); // response.json is returning just a promise

  const resultofAwaitedJsonCall = await response.json();
  console.log(resultofAwaitedJsonCall); // await is again getting data, this time array
};

/* now instead of promise, you gat response (data) 
PREVIEW in fetch/XHR in Network shows still nothing */

loadData();

// in short

const loadData2 = async () => {
  console.log("C");
  const response = await fetch(url);
  const data = await response.json();

  console.log(response);
  console.log(data);
  console.log("D");
};
console.log("A");

loadData2();

console.log("B");

/* it will log A C B D -> loadData2 is just defined, then it goes to log A, then calling function, it takes C, then it is waiting for promise from fetch, it ends/skips the function and goes to the first line after calling of function, it logs B, and once the promise is dealt, it goes back to the function and logs D */

// -------------------------------------------
/*
Run a fetch AJAX GET request call onto this url: https://classes.codingbootcamp.cz/assets/classes/602/guardian.php using async - await and place the response object into a constant.
const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/602/guardian.php');
Log the response into the console.
Then get the data from the response with another await:
const data = await response.json();
Now log the response data into the console.
*/

const loadData10 = async () => {
  const response = await fetch(
    "https://classes.codingbootcamp.cz/assets/classes/602/guardian.php"
  );
  const data = await response.json();
};

loadData10();

// Use fetch to retrieve data from the URL https://classes.codingbootcamp.cz/assets/classes/602/guardian.php?cat=science
// Log the response data into the console and try to make sense of its structure.
// Then use JavaScript and HTML elements creation to display a list of current science articles from the Guardian!

const loadData20 = async () => {
  const response = await fetch(
    "https://classes.codingbootcamp.cz/assets/classes/602/guardian.php?cat=science"
  );
  const data = await response.json();

  return data;
};

loadData20().then((data) => {
  const ul = document.createElement("ul");
  document.body.appendChild(ul);

  data.data.channel.item.forEach((i) => {
    const li = document.createElement("li");
    ul.appendChild(li);

    li.innerHTML = `${i.title} with link<a href="${i.link}">HERE</a>`;
  });
});

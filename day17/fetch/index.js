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

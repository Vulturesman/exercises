const btn = document.getElementById("myButton");

btn.addEventListener("click", () => {
  console.log("Hi from box");
});

const link = document.getElementById("link");

link.addEventListener("click", (event) => {
  event.preventDefault();
  window.location = "https://www.bbc.com";
});

// all key pressed goes to console
document.addEventListener("keyup", (e) => {
  console.log(e.key);
});

setTimeout(() => {
  console.log("hello borce, 2 seconds have passed");
}, 2000);

let x = 1;
const intervalIdentifier = setInterval(() => {
  x++;
  console.log("hello, interval every 5 seconds");
  if (x == 3) {
    clearInterval(intervalIdentifier);
  }
}, 5000);

// -------------
// To cancel a timeout or an interval, we need to keep its identifier. Both setTimeout and setInterval return their identifiers.

// const timeout_id = setTimeout(() => {
//     console.log('hello');
// }, 5000);

// // stop the timeout
// clearTimeout(timeout_id);

// const interval_id = setInterval(() => {
//     console.log('hello');
// }, 5000);

// // stop the interval
// clearInterval(interval_id);

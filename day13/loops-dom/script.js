// Find all the image elements and log them, one by one, into the console.

const images = document.querySelectorAll(".gallery img");

images.forEach((image) => {
  console.log(image);
});

// Extract the src attributes (URLs) of the images and log them, one by one, into the console.

const source = document.querySelectorAll(".gallery img");

source.forEach((src) => {
  const srcValue = src.getAttribute("src");
  console.log(srcValue);
});

// Extract the alt attributes and log them, one by one, into the console.

images.forEach((image) => {
  const altValue = image.getAttribute("alt");
  console.log(altValue);
});

// Declare an empty array in a variable urls.
// As you are looping through the images, build an array of the images' URLs (push the URLs inside) and log the new array into the console.

const urls = [];
console.log(urls);

images.forEach((sources) => {
  urls.push(sources.getAttribute("src"));
});
console.log(urls);

// Declare an empty array in a variable alts.
// As you are looping through the images, build an array of the images' alt tags and log the new array into the console.

const alt = [];
console.log(alt);

images.forEach((image) => {
  alt.push(image.getAttribute("alt"));
});

console.log(alt);

// Count the number of images and log it into the console.

console.log(images.length);

// Having the array of image URLs, use the array method .slice to make a new array of only the first 3 values and log it into the console.

console.log(urls.slice(0, 3));

// Do the same thing as in the previous exercise, but using a for loop and break:
// Declare a new empty array in a variable first.
// Loop through the array urls with a for loop. Inside the loop push every element (one URL) to the array first.
// In the right moment, call break;
// Log the resulting array first into the console.

const first = [];

let i = 0;
for (let i = 0; i < urls.length; i++) {
  first.push(urls[i]);

  if (first.length === 3) {
    // if there are exactly 3 values, it stops... basically like i < 3
    break;
  }
}

console.log(first);

// Having the array of image URLs, use the array method .slice to make a new array of only the last 3 values and log it into the console.

const images2 = document.querySelectorAll(".gallery img");
const urls2 = [];

images2.forEach((image) => {
  urls2.push(image.getAttribute("src"));
});
console.log(urls2.slice(-3));

// Do the same thing as in the previous exercise, but using a for loop and continue:
// Declare a new empty array in a variable last.
// Loop through the array urls with a for loop. Inside the loop push every element (one URL) to the array last.
// Under the correct conditions, call continue; to prevent pushing elements into last.
// Log the resulting array last into the console.

const images3 = document.querySelectorAll(".gallery img");
const urls3 = [];

images3.forEach((image) => {
  urls3.push(image.getAttribute("src"));
});
console.log(urls3);

const last = [];
for (let i = 0; i < urls3.length; i++) {
  if (i < urls3.length - 3) {
    continue;
  }
  last.push(urls3[i]);
}

console.log(last);

// Having the array of alt tags, use the array method .filter to make a new array of only the elements that contain the word cat.
// Here is a condition that checks if a string contains the word cat:

const images7 = document.querySelectorAll(".gallery img");
const tags = [];

images7.forEach((image) => {
  tags.push(image.getAttribute("alt"));
});

console.log(tags);

const noCats = tags.filter((tag) => {
  return !tag.match(/cat/i);
});

console.log(noCats);

// Using JavaScript, use innerHTML to create a list item in the <ul> there, one for each image, with the alt tag as the contents of the <li>.

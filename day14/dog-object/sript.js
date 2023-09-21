const dog = {
  name: "Johnnie Walker", //string
  color: "blue",
  weight: {
    //object
    beforeEat: 75,
    afterEat: 80,
  },
  favouriteFood: ["chicken", "human hand"], //array
  medals: [
    {
      first: 2019,
      second: 2020,
      third: 2021,
    },
    {
      fourth: 2022,
      fifth: 2023,
    },
  ],
};

// Looping through properties of an object

for (let whatever in dog) {
  console.log(dog[whatever]); // for let in
}

for (let color in dog) {
  console.log(dog["color"]);
}

// dog.name  - this is the same as below
// dog['name']

const colors = ["blue", "red", "dark"]; // for let of

for (let value of colors) {
  console.log(value);
}

const text = "Lorem ipsum";
for (let value of text) {
  console.log(value);
}

// Looping through keys

Object.keys(dog).forEach((key) => {
  console.log(dog[key]); // the value behind the current key
});

// Looping through values

Object.values(dog).forEach((value) => {
  console.log(value);
});

// JSON encoding to JSON string
let dataInString = JSON.stringify(dog);
console.log(dog);
console.log(dataInString);

// JSON decoding to an object
let dataInObject = JSON.stringify(dog);
let parsedData = JSON.parse(dataInObject);
console.log(parsedData);

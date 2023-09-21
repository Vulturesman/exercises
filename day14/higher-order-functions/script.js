const myFunction = () => {
  console.log("hi");
};

const myFunctionTwo = () => {
  return myFunction;
};

const myFunctionThree = (myFunction) => {};

const dog = {
  name: "John",
  actions: {
    run: () => {
      console.log("is running");
    },
  },
};

console.log(dog.actions.run);
dog.actions.run();

// -----------------------------------
// Copy the code to your .js file, call addition function and console.log the result.
const addition = (number1, number2) => {
  return number1 + number2;
};

console.log(addition(1, 2));

// ------------------
// Copy the code to your .js file, call the second function in the calculator_functions array and console.log the result.

const calculator_functions = [
  (number1, number2) => {
    return number1 + number2;
  },

  (number1, number2) => {
    return number1 - number2;
  },
];

console.log(calculator_functions[1](100, 20));

// ------------------------
// Copy the code to your .js file, call addition function and console.log the result.

const calculator = {
  functions: {
    addition: (number1, number2) => number1 + number2,
  },
};

console.log(calculator.functions.addition(1200, 750));

// ----------------------------
// Copy the code to your .js file, call whatShouldIDo function.

let currentWeather = "rainy";
const whatShouldIDo = (weather) => {
  if (weather == "sunny") {
    return () => {
      console.log("Going for a walk");
    };
  } else if (weather == "rainy") {
    return () => {
      console.log("Nap time");
    };
  }
};

console.log(whatShouldIDo(currentWeather));
whatShouldIDo("rainy")(); // aditional parentheses needed to call a function inside a function

// ----------------------
// Copy the code to your .js file, call move function.

const run = () => {
  return "running";
};

const walk = () => {
  return "walking like a pro";
};

const move = (movement) => {
  return console.log(movement());
};

move(run);
move(walk);

/*
1. movement() => run()
2. run() => 'running'
*/

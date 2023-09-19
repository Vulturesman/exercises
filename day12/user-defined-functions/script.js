const square = (number) => {
  return console.log(number * number + " square");
};

square(10);

const hypotenuse = (a, b) => {
  return console.log(Math.sqrt(a) + Math.sqrt(b));
};

hypotenuse(5, 4);

const abs = (number) => {
  if (number >= 0) {
    return console.log(number);
  }

  return console.log(-number);
};

abs(-10);

const salary = (pay, hours, days) => {
  return console.log(pay * hours * days + " EUR per month.");
};

salary(30, 8, 20);

// --------------
// or
// const salary = (pay, hours, days) => {
//   return pay * hours * days;
// };

const taxedSalary = (salary, tax) => {
  return console.log(salary * (1 - tax / 100));
};

taxedSalary(5000, 20);

// --------------
// or
// const taxed_salary = (salary, tax) => {
//   return salary * (1 - tax / 100);
// };

const max3 = (a, b, c) => {
  if (a > b && a > c) {
    return console.log("The biggest number is a: " + a);
  } else if (b > a && b > c) {
    return console.log("The biggest number is b: " + b);
  } else {
    return console.log("The biggest number is c: " + c);
  }
};

max3(67, 20, 9);

// -------------------------------
// or
// const max3 = (a, b, c) => {
//   if (a > b) {
//     if (a > c) {
//       return a;
//     }
//     return c;
//   }

//   if (b > c) {
//     return b;
//   }

//   return c;
// }

const spread3 = (a, b, c) => {
  if (a > b && a > c) {
    return console.log("The biggest number is a: " + a);
  } else if (b > a && b > c) {
    return console.log("The biggest number is b: " + b);
  } else {
    return console.log("The biggest number is c: " + c);
  }

  if (a > b && a > c) {
    return console.log("The biggest number is a: " + a);
  } else if (b > a && b > c) {
    return console.log("The biggest number is b: " + b);
  } else {
    return console.log("The biggest number is c: " + c);
  }
};

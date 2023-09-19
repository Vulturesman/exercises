const emailFromLogin = (login) => {
  login = prompt("enter your username");
  let email = "@911conspiracy.com";
  return console.log(login + email);
};

emailFromLogin();

// ---------------------
// or
// const emailFromLogin = (name) => name + '@covidconspiracy.il';

const loginFromName = (firstName, lastName) =>
  lastName.slice(0, 4).toLowerCase() + firstName.slice(0, 3).toLowerCase();

console.log(loginFromName("Bill", "Gates"));

// --------------------------------------
// or
// const loginFromName = (first, last) =>{
//   const part1 = last.substr(0,4)
//   const part2 = first.substr(0,3)
//   return part1.toLowerCase() + part2.toLowerCase()
// }

const emailFromName = (firstName, lastName) => {
  let email = "@911conspiracy.com";
  lastName.slice(0, 4).toLowerCase() + firstName.slice(0, 3).toLowerCase();
  return console.log(
    lastName.slice(0, 4).toLowerCase() +
      firstName.slice(0, 3).toLowerCase() +
      email
  );
};

emailFromName("Zalud", "Obecny");

// --------------------------------
// ori
// const emailFromName = (first, last) =>{
//   const login = loginFromName (first, last);
//   return emailFromLogin(login);
// }

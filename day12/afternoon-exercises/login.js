// Create a page that will ask the user for their login and password. Check, that the password is equal to sore-thumb-218 and if so, output "access granted." Otherwise, output "Nice try."

// const login = () => {
//   let userName = prompt("Write your User Name:");
//   let password = prompt("Now let's put your password:");

//   if (password == "sore-thumb-218") {
//     document.write("Access granted!");
//   } else {
//     alert("Nice try bitch!");
//   }
// };

// login();

// ----------------------------------------------------
// Create a page where the user needs to create their password for the first time. Ask for the password twice and check that they are the same. If not, output something like "Your passwords do not match."

// const password = () => {
//   let pass = prompt("Please write your password:");
//   let pass2 = prompt("Please rewrite your password:");

//   if (pass === pass2) {
//     document.write("Your password matches, great!");
//   } else {
//     document.write("Your password do not match!");
//   }
// };

// password();

// ----------------------------------------------------------
// Improve the above page so that it does not allow passwords less than 8 characters long. If the password is less than 8 characters output "Your password is not secure." In such a case do not ask the user to type the password again. Only do that if it passes the security check.

const password = () => {
  let pass = prompt("Please write your password:");
  if (pass.length >= 8) {
    let pass2 = prompt("Please rewrite your password:");

    if (pass === pass2) {
      document.write("Your password matches, great!");
    } else {
      document.write("Your password do not match!");
    }
  } else {
    alert("Your password is weak like AC Sparta Praha");
  }
};

password();

// --------
// possible solution:

// const password1 = prompt('Enter your password: ');

// if (password1.length >= 8) {
//   const password2 = prompt('Enter the same password: ');

//   if (password1 === password2) {
//     document.write('Password ok');
//   } else {
//     document.write('Your passwords do not match.');
//   }
// } else {
//   document.write('Passwords must have at least 8 characters.');
// }

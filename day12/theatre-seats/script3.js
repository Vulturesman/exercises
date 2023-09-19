const theatreSeat = () => {
let number = document.getElementById('seat').value;
let auditoriumRow = prompt("How many rows do you have?");
let auditoriumColumn = prompt("How many columns?");
let column = number % auditoriumColumn;
let row = Math.floor(number/auditoriumColumn);
let rowCharacter = String.fromCharCode(row + 65)

return alert("Your seat is: " + rowCharacter + column);
}
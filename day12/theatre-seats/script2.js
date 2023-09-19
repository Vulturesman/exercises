const theatreSeat = () => {
let number = document.getElementById('seat').value;
let column = number % 10;
let row = Math.floor(number/10);
let rowCharacter = String.fromCharCode(row + 65)

return alert("Your seat is: " + rowCharacter + column);
}
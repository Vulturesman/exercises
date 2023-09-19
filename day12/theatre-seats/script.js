const theatreSeat = () => {
let number = prompt("What is your seat number?")
let column = number % 10;
let row = Math.floor(number/10);
let rowCharacter = String.fromCharCode(row + 65)

return alert("Your seat is: " + rowCharacter + column);
}

theatreSeat();
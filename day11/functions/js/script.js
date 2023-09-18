// Birth year

// const birthYear = () => {
//     let year = prompt("Enter your birth year");
//     let calculation = 2023 - year;
//     console.log(calculation);
// }

// birthYear()


// OR
// const birthYear = Number(prompt('Enter your year of birth:'));
// const age = 2023 - birthYear;
// console.log('Your age is ' + age);





// Velocity conversion

// const mph = (Math.round (1.609344 * 50));
// console.log(mph);

// const velocity = Number(prompt("Enter you velocity in miles"));
// const speed = Math.round (1.609344 * velocity);
// alert(speed + " kmh per hour")




// Currency exchange

const exchange = () => {
const eur = Number(prompt("Enter your amount in EUR currency:"));
const eurToCzk = Math.round(eur * 25.695);
return alert(eurToCzk)
}




// SMS Splitting

const sms = () => {
    const textSms = prompt("Enter your text");
    textLength = Math.ceil(textSms.length / 160)
    alert("You will need to split your message in " + textLength + " messages.")
}



// Celsius to Fahrenheit

const temperature = () => {
  let fahrenheit = prompt('Write temperature in Fahrnheit:');
  fahrenheit = Number(fahrenheit.replace(',', '.'));
  const celsius = Math.round((fahrenheit - 32) /1.8);
return console.log("Transformed temperature from F to C is " + celsius);
}



// Dice Rolls

const dice = () => {
    let number = Math.random() * 6 + 1;

    return alert(Math.floor(number)) 
}
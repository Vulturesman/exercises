// Wine glasses

let oneGlass = 5;
const glassesHour = 60 / oneGlass;
console.log(glassesHour + " glasses per hour");

const glassesDay = 7 * glassesHour;
console.log(glassesDay + " glasses per day");


// Tiling a hallway

let rectangularHallway = 600 * 250;
let tile = 50 * 50;
const tilesTotal = rectangularHallway / tile;

console.log(tilesTotal + " tiles needed for the hallway floor");


// Salary

let brutto = 12 * 8 * 21;
let netto = brutto * (1- 0.15);
let pay = 12;
let hours = 8;
let days = 21;
let tax = 0.15;

let totalNetto = (pay * hours * days) * (1 - tax);

console.log(totalNetto + " total EUR income in netto");


// Mortgage

let apartmentEighty = 80 * 6688;
let eurToCzk = apartmentEighty * 25;
let years = 0.85 * eurToCzk / 800/25 / 12;

console.log("Your mortgage will last " + years + " years!" );


// Study time

const classHours = (7*4) + 3;
let studyHours = classHours * (1 - 0.7);
let totalStudyTime = (classHours + studyHours) * 12;
let studyMessage = "Total study time: " + totalStudyTime;

console.log(studyMessage);


// Hanging a painting

let wallWidth = 245;
let frameWidth = 175;

let clinch1 = (wallWidth/2) - (frameWidth/2) + 10;
let clinch2 = wallWidth/2;
let clinch3 = (wallWidth/2) + (frameWidth/2) - 10;

// or
// const clinch1 = (wallWidth - frameWidth) / 2 + 10;
// const clinch2 = (wallWidth - frameWidth) / 2 + (frameWidth / 2);
// const clinch3 = (wallWidth - frameWidth) / 2 + (frameWidth - 10);

const photoWidth = 4250;
const photoHeight = 2040;

let frameheight =  (photoHeight / photoWidth) * frameWidth;

console.log("How much cms from the left wall on clinch1? " + clinch1);
console.log("How much cms from the left wall on clinch2? " + clinch2);
console.log("How much cms from the left wall on clinch3? " + clinch3);

console.log("This is the frameheigth " + frameheight);


// Population in the Pilsner Region 

let population = 551281;
let year2001 = population * (1-0.014) ** 100;

// ** = 100 na druhou

console.log("Population in year 2100 will be " + year2001);


// import { textA } from "./moduleA"; //can use only one file .js
import { textB } from "./moduleB"; //thats why i have to add another import because of another file
// import { textB as textC } from "./moduleA"; //alias
// import { textB as textC, textA } from "./moduleA"; // chaining multiple imports...
// import textD from "./moduleA";   // Simple, or combined as below

import textD, { textA, textB as textC } from "./moduleA";

console.log(textA);
console.log(textB);
console.log(textC);
console.log(textD);

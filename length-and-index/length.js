const name = "Albus Percival Wulfric Brian Dumbledore";

// 1. Hvad er det totale antal af karakterer inklusive mellemrum?
const len = name.length;
console.log(`${name} is ${len} characters long`);

// 2. Hvilken karakter er der på index 2?
const charAtIndex2 = name[2];
console.log(`The character at index 2 of ${name} is ${charAtIndex2}`);

// 3. Hvilken karakter er der på index 6?
const charAtIndex6 = name[6];
console.log(`The character at index 6 of ${name} is ${charAtIndex6}`);

// 4. Hvilket index har det første D i Dumbledore?
const firstDIndex = name.indexOf("D");
console.log(`The first D in ${name} is at index ${firstDIndex}`);

// 5. Hvilket index har det første e i Dumbledore?
const firstEIndex = name.lastIndexOf("e");
console.log(`The last e in ${name} is at index ${firstEIndex}`);

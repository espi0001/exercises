const name = "Albus Percival Wulfric Brian Dumbledore";

// "Albus"
const firstName = name.substring(0, 5);
console.log(firstName); // Output: Albus

// "Dumbledore" (kun et parameter)
const lastName = name.substring(29);
console.log(lastName); // Output: Dumbledore

// "Wulfric"
const middleName = name.substring(14, 21);
console.log(middleName); // Output: Wulfric

// " Wulfric "
const middleNameWithSpaces = name.substring(13, 22);
console.log(middleNameWithSpaces); // Output: " Wulfric "

// "ian"
const partialName = name.substring(25, 28);
console.log(partialName); // Output: ian

// "bus"
const partialFirstName = name.substring(2, 5);
console.log(partialFirstName); // Output: bus

//I koden bruger vi .substring() til at vælge specifikke dele af strengen baseret på indeksværdier.

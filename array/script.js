// let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
// let someLetter = letters[4];
// console.log("someLetter", someLetter);

// let anotherLetter = letters[7];
// console.log("anotherLetter", anotherLetter);

// let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
// console.log("letters[4]", letters[4]);
// let newarr = letters;

// newarr[4] = "*";
// console.log("letters[4]", letters[4]);

const people = ["Harry", "Ron", "Hermione"];

let result;

console.log('people.push("Draco")');
result = people.push("Draco");

console.log("result", result);
console.log("people", people);

// ************

console.log("************");
console.log("people.pop()");

result = people.pop();

console.log("result", result);
console.log("people", people);

// ************

console.log("************");

console.log('people.push("Neville")');
result = people.push("Neville");

console.log("result", result);
console.log("people", people);

// ************

console.log("************");

console.log('people.push("Luna")');
result = people.push("Luna");

console.log("result", result);
console.log("people", people);

// ************
console.log("************");

result = people.slice(0, 3);
console.log("result", result);
console.log("people", people);

// ************
console.log("************");
result = people.slice(1, 0, "Cho");
console.log("result", result);
console.log("people", people);

// ************
console.log("************");
people[1] = "Ginny";
console.log("result", result);
console.log("people", people);

// ************
console.log("************");
result = people.push("Fred", "George");
console.log("result", result);
console.log("people", people);

// ************
console.log("************");
result = people.indexOf("Fred");
console.log("result", result);
console.log("people", people);

// ************
console.log("************");
result = people.splice(result, 1);
console.log("result", result);

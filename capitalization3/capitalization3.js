// Laver en konstant variabel med variablen aName og værdien "Peter", som er en streng som der kan manipuleres
const aName = "Peter";

const thirdUpper = aName.substring(0, 2).toLowerCase().concat(aName[2].toUpperCase(), aName.substring(3).toLowerCase());

console.log(thirdUpper);

// substring(0, 2) tager en del af strengen fra indeks 0 til (men ikke inklusiv) indeks 2, hvilket betyder de første to tegn, altså "Pe".
// toLowerCase() konverterer teksten "Pe" til små bogstaver, så resultatet bliver "pe".
// concat() bruges til at kombinere strenge sammen. Her sammensætter vi flere dele af aName for at lave en ny streng.

// aName[2] refererer til det tredje tegn i aName, som er "t".
// toUpperCase() gør dette tegn stort, så "t" bliver "T".

// substring(3) udtrækker strengen fra indeks 3 til slutningen, hvilket er "er" i "Peter".
// toLowerCase() konverterer resten af strengen til små bogstaver (i dette tilfælde er "er" allerede små, så den forbliver uændret).

// Alle delene kombineres til den endelige streng ved hjælp af concat(). Resultatet af dette vil være "peTer".

const curseWords = [
  { bad: "var", good: "const" }, // Array af objekter, som indeholder de 'dårlige' ord og deres 'gode' erstatninger
  { bad: "float", good: "grid" }, // "float" skal erstattes med "grid"
  { bad: "marquee", good: "just don't" }, // "marquee" skal erstattes med "just don't"
];

let theSentenceHasBeenTreated = false; // Boolean, der holder styr på om teksten allerede er behandlet

let theText = document.querySelector("p").textContent; // Henter indholdet (tekst) fra første <p>-element på siden

document.querySelector("button").addEventListener("click", replaceBadWords); // Tilføjer en event listener på knappen for at køre funktionen replaceBadWords ved klik

function replaceBadWords() {
  //console.log("REPLACE", theText); // Udkommenteret debug-statement, som kan bruges til at tjekke den oprindelige tekst

  if (theSentenceHasBeenTreated === false) {
    // Tjekker om teksten allerede er blevet behandlet
    curseWords.forEach((curseWord) => {
      // Går igennem hvert objekt i curseWords-arrayet
      theText = theText.replaceAll(curseWord.bad, `<span>${curseWord.good}</span>`); // Erstatter alle forekomster af 'bad' med 'good' inde i et <span>
    });

    console.log("theText", theText); // Logger den nye tekst til konsollen for at se resultatet
    document.querySelector("p").innerHTML = theText; // Opdaterer HTML'en med den behandlede tekst og indsætter det som HTML for at understøtte <span>
    theSentenceHasBeenTreated = true; // Marker, at teksten nu er blevet behandlet, så det ikke gøres igen
  } else {
    document.querySelector("dialog").showModal(); // Hvis teksten allerede er behandlet, vis en dialogboks som informerer brugeren
  }
}

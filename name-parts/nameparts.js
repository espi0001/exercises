const fullName = "Ester Catrine Piazza-Koldbye"; // En string der repræsenterer fulde navn

// Udtrækker fornavnet ved at bruge substring fra starten (0) til første mellemrum
const firstName = fullName.substring(0, fullName.indexOf(" "));
console.log(firstName); // Logger 'Ester'

// Udtrækker mellemnavnet ved at finde tekst mellem det første og det sidste mellemrum
const middleName = fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" ")).trim();
console.log(middleName); // Logger 'Catrine'

// Udtrækker efternavnet ved at bruge substring fra sidste mellemrum til slutningen af strengen
const lastName = fullName.substring(fullName.lastIndexOf(" ") + 1);
console.log(lastName); // Logger 'Piazza-Koldbye'

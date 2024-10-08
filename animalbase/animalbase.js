// sørger for en mere sikker kode
"use strict";

// venter på at siden er loaded
window.addEventListener("DOMContentLoaded", start);

// et tomt array til at gemme alle alle dyre-objekter
let allAnimals = [];

// Prototypen for alle dyr, der indeholder standartegenskaberne
const Animal = {
  name: "",
  desc: "-unknown animal-", // standartbeskrivelse, hvis den mangler en beskrivelse
  type: "",
  age: 0,
};

function start() {
  // viser "ready" i konsollen
  console.log("ready");

  // Registrerer event-listeners for filterknapper og indlæser dataen fra JSON
  registerButton();
  loadJSON();
}

function registerButton() {
  // Tilføjer klik-event til alle knapperne, der har attributten "data-action" med værdien "filter"
  document.querySelectorAll("[data-action='filter']").forEach((button) => button.addEventListener("click", selectFilter));
}

function selectFilter(event) {
  // Hent værdien af "data-filter" fra det klikkede element
  const filter = event.target.dataset.filter;
  // Kaæder filterList-funktionen med den valgte filtertype
  filterList(filter);
  // Udskriver filtertypen i konsollen
  console.log(filter);
}

async function loadJSON() {
  // Henter dyredataen fra JSON-filen
  const response = await fetch("animals.json");
  // Konverterer JSON-dataen til et JavaScript-objekt
  const jsonData = await response.json();

  // forbereder de hentede data til at blive konverteret til Animal-objekter
  prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
  // mapper gennem JSON-dataen og konverterer hvert element til et Animal-objekt
  allAnimals = jsonData.map(preapareObject);

  // Viser listen over alle dyrene ved at kalde displayList-funktionen
  displayList(allAnimals);
}

function preapareObject(jsonObject) {
  // Opretter et nyt Animal-objekt baseret på Animal-prototypen
  const animal = Object.create(Animal);

  // Splitter fuldnavnet (f.eks. "name desc type") i et array
  const texts = jsonObject.fullname.split(" ");
  animal.name = texts[0]; // Den første del af fuldnavnet er dyrets navn
  animal.desc = texts[2]; // Den tredje del er dyrets beskrivelse
  animal.type = texts[3]; // Den fjerde del er dyrets type
  animal.age = jsonObject.age; // Alderen tildelses direkte fra JSON-dataen

  // Returnerer det oprettede dyreobjekt
  return animal;
}

function filterList(animalType) {
  // Starter med alle dyr
  let filteredList = allAnimals;

  // Filtrerer listen baseret på det valgte dyretype
  if (animalType === "dog") {
    // Beholder kun dyr af typen "dog"
    filteredList = allAnimals.filter(isDog);
  } else if (animalType === "cat") {
    // Beholder kun dyr af typen "cat"
    filteredList = allAnimals.filter(isCat);
  }

  // Viser den filtrerede liste af dyr
  displayList(filteredList);
}

function isDog(animal) {
  // returnerer true hvis dyret er en hund
  return animal.type === "dog";
}

// Filterer alle dyr, så kun katte er tilbage
const allCats = allAnimals.filter(isCat);
function isCat(animal) {
  // returnerer true hvis dyret er en "cat"
  return animal.type === "cat";
}

function displayList(animals) {
  // Ryder den aktuelle liste ved at tømme tabelkroppen i HTML'en
  document.querySelector("#list tbody").innerHTML = "";

  // Løber gennem arrayet af dyreobjekter og viser hvert enkelt
  animals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // Kloner HTML-skabelonen med id'et "animal"
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // Opdaterer klonen med dyrets data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // Tilføjer den opdateret klon til tabellen
  document.querySelector("#list tbody").appendChild(clone);
}

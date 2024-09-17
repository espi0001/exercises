"use strict";

let userGuess;
let computerGuess;
let result;

// laver mine konstanter
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", rockClicked);
paper.addEventListener("click", paperClicked);
scissors.addEventListener("click", scissorsClicked);

// konstanter på mine to players
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

// mine funktioner

function rockClicked() {
  // Tilføj rysteanimation til begge spillere
  player1.classList.add("shake");
  player2.classList.add("shake");

  // Fjern event listener, så den kun lytter én gang
  this.removeEventListener("mousedown", rockClicked);

  // Når animationen er færdig, fjern 'shake'-klassen
  player1.addEventListener("animationend", () => {
    player1.classList.remove("shake");
  });
  player2.addEventListener("animationend", () => {
    player2.classList.remove("shake");
  });

  // console.log("Du valgte sten");
  userGuess = "rock";
  computerGuesses();
}

function paperClicked() {
  //  console.log("Du valgte papir");
  userGuess = "paper";
  computerGuesses();
}

function scissorsClicked() {
  // console.log("Du valgte saks");
  userGuess = "scissors";
  computerGuesses();
}

function computerGuesses() {
  computerGuess = "rock";
  console.log("Computer Guesses", computerGuess);
  console.log("User Guesses", userGuess);
  determineWinner();
}

function determineWinner() {
  if (userGuess === "rock" && computerGuess === "rock") {
    result = "draw";
  }

  if (userGuess === "rock" && computerGuess === "paper") {
    result = "computer";
  }

  if (userGuess === "rock" && computerGuess === "sissors") {
    result = "user";
  }

  // nr 2

  if (userGuess === "paper" && computerGuess === "paper") {
    result = "draw";
  }

  if (userGuess === "paper" && computerGuess === "rock") {
    result = "user";
  }

  if (userGuess === "paper" && computerGuess === "sissors") {
    result = "computer";
  }

  // nr 3

  if (userGuess === "sissors" && computerGuess === "rock") {
    result = "conputer";
  }

  if (userGuess === "sissors" && computerGuess === "paper") {
    result = "user";
  }

  if (userGuess === "sissors" && computerGuess === "sissors") {
    result = "draw";
  }

  console.log("result", result);
}

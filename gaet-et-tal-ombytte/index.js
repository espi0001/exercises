// Variabler
let min = 0;
let max = 100;
let guess;
let attempts = 0;

// Event listeners til knapperne
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("start-btn").addEventListener("click", startGame);
  document.getElementById("too-high-btn").addEventListener("click", tooHigh);
  document.getElementById("too-low-btn").addEventListener("click", tooLow);
  document.getElementById("correct-btn").addEventListener("click", correctGuess);
  document.getElementById("reset-btn").addEventListener("click", resetGame);
});

// Funktion der starter spillet
function startGame() {
  min = 0;
  max = 100;
  attempts = 0;

  // Beregn computerens første gæt ved at tage midtpunktet mellem min og max
  guess = Math.floor((min + max) / 2);

  // Opdater UI med computerens første gæt
  document.getElementById("guess-number").textContent = `Gæt: ${guess}`;

  // Nulstil feedback-beskeden
  document.getElementById("feedback").textContent = "";

  // Vis spilområdet og skjul genstartsknappen
  document.getElementById("game-area").classList.remove("hidden");
  document.getElementById("reset-btn").classList.add("hidden");

  // Deaktiver startknappen, mens spillet kører
  document.getElementById("start-btn").disabled = true;

  // Aktiver gæt-knapperne igen
  document.querySelectorAll(".guess-btn").forEach((button) => (button.disabled = false));
}

// Funktion når det er for højt
function tooHigh() {
  max = guess - 1;
  nextGuess();
}

// Funktion når det er for lavt
function tooLow() {
  min = guess + 1;
  nextGuess();
}

// Funktion for computerens næste gæt på baggrund af om det var for højt eller lavt
function nextGuess() {
  attempts++;
  guess = Math.floor((min + max) / 2);
  document.getElementById("guess-number").textContent = `Gæt: ${guess}`;
}

// Hvis computeren har gættet rigtigt
function correctGuess() {
  attempts++;
  document.getElementById("feedback").textContent = `Tillykke! Computeren gættede rigtigt på ${attempts} forsøg.`;

  // Deaktiver gæt-knapperne
  disableButtons();

  // Vis genstartsknappen, når computeren har gættet korrekt
  document.getElementById("reset-btn").classList.remove("hidden");
}

// knapperne bliver deaktiveret når spillet er slut
function disableButtons() {
  document.querySelectorAll(".guess-btn").forEach((button) => (button.disabled = true));
  document.getElementById("start-btn").disabled = false;
}

// Funktion til at nulstille spillet og starte forfra
function resetGame() {
  // Skjul spilområdet og vis startknappen igen
  document.getElementById("game-area").classList.add("hidden");
  document.getElementById("start-btn").disabled = false;

  // Nulstil feedback og gætnummer
  document.getElementById("guess-number").textContent = "";
  document.getElementById("feedback").textContent = "";

  // Deaktiver genstartsknappen indtil næste runde
  document.getElementById("reset-btn").classList.add("hidden");
}

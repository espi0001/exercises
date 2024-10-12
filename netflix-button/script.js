const button = document.getElementById("actionButton");
let userInteracted = false;
let animationFinished = false;

// Start animationen når siden loader
window.onload = () => {
  button.classList.add("animate");
  // Sætter en timeout der udløses, hvis brugeren ikke interagerer
  setTimeout(() => {
    if (!userInteracted) {
      triggerAction();
    }
    animationFinished = true;
  }, 5000); // 5 sekunder animationstid
};

// Lyt efter musebevægelser
window.addEventListener("mousemove", () => {
  userInteracted = true; // Registrerer at brugeren har interageret
});

// Handling, når knappen klikkes
button.addEventListener("click", () => {
  if (!animationFinished) {
    // Hvis animationen ikke er færdig, vent til den er færdig
    setTimeout(triggerAction, 5000);
  } else {
    triggerAction();
  }
});

// Funktion der udfører handlingen (ændrer baggrundsfarve og skjuler knappen)
function triggerAction() {
  document.body.style.backgroundColor = "#28a745"; // Ændrer baggrundsfarven
  button.classList.add("hidden"); // Skjuler knappen
}

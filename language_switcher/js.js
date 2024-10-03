"use strict";

const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

// Function to switch language based on selected locale
function switchLanguage(locale) {
  const selectedTexts = texts[locale].texts;

  selectedTexts.forEach(({ text, location }) => {
    const element = document.querySelector(location);
    if (element) {
      element.textContent = text;
    }
  });
}

// Listen to dropdown selection change
document.getElementById("language-select").addEventListener("change", (event) => {
  const selectedLocale = event.target.value; // Get the selected language
  switchLanguage(selectedLocale); // Call the function to update text
});

// Set default language on page load (Danish)
switchLanguage("da");

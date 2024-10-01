const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("generate-btn").addEventListener("click", showBread);
});

const ulPointer = document.querySelector("ul");

function showBreadcrumb(arr) {
  ulPointer.innerHTML = "";

  arr.forEach((each, index) => {
    if (index === arr.length - 1) {
      // Hvis det er det sidste element, vis det uden et link
      ulPointer.innerHTML += `<li>${each.name}</li>`;
    } else {
      // Hvis det ikke er det sidste element, vis det som et link
      ulPointer.innerHTML += `<li><a href="${each.link}">${each.name}</a></li>`;
    }
  });
}

function showBread() {
  showBreadcrumb(bc);
}

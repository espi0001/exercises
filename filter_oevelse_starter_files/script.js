const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

// Event listeners til knapperne

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("electric-btn").addEventListener("click", showEl);
  document.getElementById("passengers-btn").addEventListener("click", showPassengers);
  document.getElementById("jonas-el-btn").addEventListener("click", showJonas);
  document.getElementById("bread-btn").addEventListener("click", showBread);
  document.getElementById("all-btn").addEventListener("click", showAll);
});

const ulPointer = document.querySelector("ul");
// console.log(vehicles.filter(isVehicleElectric));
showTheseVehicles(vehicles);

// Vis kun elektriske køretøjer
const allElectriArr = vehicles.filter(isVehicleElectric);
console.log(allElectriArr);

// showTheseVehicles(allElectriArr);

function isVehicleElectric(vehicle) {
  if (vehicle.isElectric) {
    return true;
  }
}

const allPassengerArr = vehicles.filter(isVehiclePassengers);
console.log(allPassengerArr);

// showTheseVehicles(allPassengerArr);

function isVehiclePassengers(vehicle) {
  if (vehicle.passengers > 2) {
    return true;
  }
}

const allOwnedByJonasArr = vehicles.filter(isOwnedByJonas);
console.log(allOwnedByJonasArr);

// showTheseVehicles(allOwnedByJonasArr);

function isOwnedByJonas(vehicle) {
  if (vehicle.ownedBy == "Jonas" && vehicle.isElectric) {
    return true;
  }
}

const allFuelRybreadArr = vehicles.filter(isFuelBread);
console.log(allFuelRybreadArr);

// showTheseVehicles(allFuelRybreadArr);

function isFuelBread(vehicle) {
  if (vehicle.fuel == "Rugbrød" && vehicle.passengers > 1) {
    return true;
  }
}

function showTheseVehicles(arr) {
  // Først tømmer vi ul-elementet, så vi ikke viser gamle elementer
  ulPointer.innerHTML = " <li><strong>Type</strong></li><li><strong>Fuel</strong></li><li><strong>Passengers</strong></li><li><strong>Stops</strong></li><li><strong>OwnedBy</strong></li><li><strong>Electric</strong></li><li><strong>Tandem</strong></li>";

  arr.forEach((each) => {
    ulPointer.innerHTML += `<li>${each.type}</li>`;
    ulPointer.innerHTML += `<li>${beautifyEmty(each.fuel)}</li>`;
    ulPointer.innerHTML += `<li>${each.passengers}</li>`;
    ulPointer.innerHTML += `<li>${beautifyEmty(each.stops)}</li>`;
    ulPointer.innerHTML += `<li>${beautifyEmty(each.ownedBy)}</li>`;
    ulPointer.innerHTML += `<li>${beautify(each.isElectric)}</li>`;
    ulPointer.innerHTML += `<li>${beautify(each.isTandem)}</li>`;
  });
}

function beautify(word) {
  if (word) {
    return "YES";
  } else if (word === undefined) {
    return "";
  }
}

function beautifyEmty(word) {
  if (word) {
    return word;
  } else if (word === undefined) {
    return "";
  }
}

// Funktion der showEl
function showEl() {
  showTheseVehicles(allElectriArr);
}

function showPassengers() {
  showTheseVehicles(allPassengerArr);
}

function showJonas() {
  showTheseVehicles(allOwnedByJonasArr);
}

function showBread() {
  showTheseVehicles(allFuelRybreadArr);
}

function showAll() {
  showTheseVehicles(vehicles);
}

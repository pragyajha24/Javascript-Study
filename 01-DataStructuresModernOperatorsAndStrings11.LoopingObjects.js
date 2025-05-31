"use strict";

//restaurat example
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze ,Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", " Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //open 24 hours
      close: 24,
    },
  },
};

//looping over objects which are not iteerables
//looping over properties names i.e. also called Keys

const properties = Object.keys(restaurant.openingHours);
//it returns an array with three properties name
console.log(properties); //[ 'thu', 'fri', 'sat' ]

console.log(`We are open on ${properties.length} days`); //We are open on 3 days

for (const day of Object.keys(restaurant.openingHours)) {
  console.log(day); //thu
  //fri;
  //sat;
}

let openStr = `We are open on ${properties.length} days:`;
for (const day of properties) {
  openStr += `${day},`;
}
console.log(openStr); //We are open on 3 days:thu,fri,sat,

//Property VALUES
const values = Object.values(restaurant.openingHours);
console.log(values);
// [
//   { open: 12, close: 22 },
//   { open: 11, close: 23 },
//   { open: 0, close: 24 }
// ]

//looping over entries. Entries are basically names plus values together
const entries = Object.entries(restaurant.openingHours);
console.log(entries);
// [
//   ["thu", { open: 12, close: 22 }],
//   ["fri", { open: 11, close: 23 }],
//   ["sat", { open: 0, close: 24 }],
// ];

for (const x of entries) {
  console.log(x);
}
// ["thu", { open: 12, close: 22 }]
// [("fri", { open: 11, close: 23 })]
//[("sat", { open: 0, close: 24 }) ];

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
// On thu we open at 12 and close at 22
// On fri we open at 11 and close at 23
// On sat we open at 0 and close at 24

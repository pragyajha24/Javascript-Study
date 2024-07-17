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

//console.log(restaurant.openingHours.mon); //undefined as monday does not exist

//console.log(restaurant.openingHours.mon.open); // TypeError : cannot read property 'open' of undefined.

//checking if openingHours or mon even exist using && operator
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
} //but here it is only two property to check what if we have deeply nested object or more properties

//so es2020 introduced great solution for this ,which is  a feature called  optional chaining
//With optional chaining if certain property does not exist then undefined is returned immediatly .

//WITH OPTIONAL CHAINING
console.log(restaurant.openingHours.mon?.open); //undefined
//so only if the property i.e. before the  ?(question mark) here exist then next peroperty will be read from there, but if not then immediatly undefined will be returned.
//a property exist if its not null or undefined.
//we can have multiple optional chainings

//Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

//I want to loop over this array and log to console if restaurant is open or close each day
for (const day of days) {
  //console.log(day);

  //if we have to use variable name as property name we have to use the bracket notation
  // we are setting a default value for undefined sitation using nullish colescing operator
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day} ,we open at ${open}`);
}

//Optional chaining also works at methods, we can check if method exist before calling
//Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist"); //Method does not exist

//Arrays
const users = [{ name: "Casie", email: "hello@casie.io" }];

console.log(users[0]?. name ?? 'User array empty');

"use strict";

//restaurat example
// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze ,Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", " Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, //open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = "20:00",
//     address,
//   }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   //now let's write our own function that accepts multiple arguments and then use the spread operator to actually pass  those arguments
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1} , ${ing2} and ${ing3}`
//     );
//   },

//   //example to understand rest parameter
//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//     console.log(
//       `Here's your pizza of ${mainIngredient} and the ${otherIngredients}`
//     );
//   },
// };

// -------------ENHANCED OBJECT LITERAL SYNTAX ------------------
//1.let's have a object outside restaurant object ,now openingHours is seperate variable
// but we still want openingHours object inside of restaurant object

//2. Second enhancment to object it about writing methods  ,in es6 we no longer have to create property and then said it to a function expression like we always do.

//3. Third enhancement is we can compute property names instead of writing them down manually and literally.
// to compute means to calculate
//example of 3rd enhancement
const weekdays = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];
//we can use them in their literal name place
//we can compute name in any way

//example of 1st enhancement
const openingHours = {
  [weekdays[3]]: {
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
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze ,Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", " Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //by es6 using enhanced object literals
  // 1.having openingHours object here , both outside object name and here needs to be same
  openingHours,

  //2. removing the keyword function - new syntax . It's a personal preference.
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  //now let's write our own function that accepts multiple arguments and then use the spread operator to actually pass  those arguments
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1} , ${ing2} and ${ing3}`
    );
  },

  //example to understand rest parameter
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
    console.log(
      `Here's your pizza of ${mainIngredient} and the ${otherIngredients}`
    );
  },
};

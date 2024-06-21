"use strict";

//1)Destructing
//SPREAD operator, because on RIGHT side of = (assignment operator)
const arr = [1, 2, ...[3, 4]];
console.log(arr); //[ 1, 2, 3, 4 ]

//REST operator because on LEFT side of = (assignment operator)
//It's called rest because it will take rest of the elements, so the remaining elements of the array, and then put them in a new array.

const [a, b, ...other] = [1, 2, 3, 4, 5];
console.log(a, b, other); //1 2 [ 3, 4, 5 ]

//restaurant example
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

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  //now let's write our own function that accepts multiple arguments and then use the spread operator to actually pass  those arguments
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1} , ${ing2} and ${ing3}`
    );
  },

  //example to understand rest parameter
  orderPizza: function (mainIngredient, ...otherIngredients ) {
    console.log(mainIngredient);
    console.log(otherIngredients);
    console.log(`Here's your pizza of ${mainIngredient} and the ${otherIngredients }`);
  },
};

//We can use both rest and spread oon both side of assignment operator

//Rest pattern always must be the last in destructing assignment , otherwise how will javascript know until when it hould collect rest of the array.
//And for same reason,there can  only be one rest in any destructing assignment.
const [Pizza, , Risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(Pizza, Risotto, otherFood); //Pizza Risotto [ 'Focaccia', 'Bruschetta', ' Garlic Bread', 'Caprese Salad' ]

//rest pattern in objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); //{ thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 } }

//2) Functions
//an example function conaining arbitrary amount of arguments and simply add all of them together
//we will use rest parameter
//a working function which can accept any number of parameters
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3); //5
add(5, 5, 5); //15
add(5, 4, 2, 6); //17

const x = [24, 12];
add(...x); //36

//calling orderPizza method
restaurant.orderPizza("brocooli","chicken","spinach","onion","cheese"); 
//brocooli [ 'chicken', 'spinach', 'onion', 'cheese' ]
restaurant.orderPizza("mushroom") //mushroom []

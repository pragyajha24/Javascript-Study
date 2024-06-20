"use strict";

//Spread Operator (...)
//We use spread operator to basically expand an array into all its elements.

// for example
const arr = [7, 8, 9];
//if we had to elements in beginning of this array,we would something like this not using spread operator
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); //[ 1, 2, 7, 8, 9 ]

//by using spread operator(...) three dots
///if we don't use spread operator and only write [1,2,arr] then arr will be inside another array which we don't want
const newArr = [1, 2, ...arr];
console.log(newArr); //[ 1, 2, 7, 8, 9 ]

//Whenever we need the element of array individually then we can use the spread operator and that is useful when we write an array and when we need to pass multiple elements into a function.
//here the elements are individual , in above example they are in array
console.log(...newArr); //1 2 7 8 9

///another example
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
};

//here we are going to add new element in mainMenu array in restaurant object
//creating new menu i.e. new array we are not manipulating the mainMenu
const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu); //[ 'Pizza', 'Pasta', 'Risotto', 'Gnocci' ]

//Two use cases of spread operator :-
///1. to create shallow copies of array
/////// a shallow copy refers to specific values that are still connected to the original variable
///2. to merge two array together

//copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy); //[ 'Pizza', 'Pasta', 'Risotto' ]

//join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu); // ['Focaccia','Bruschetta', ' Garlic Bread', 'Caprese Salad','Pizza','Pasta', 'Risotto']

//spread operator works on all so called iterables.
//Iterables are : arrays,strings,maps,sets.NOT objects

//to get all individual elements
const str = "Hannah";
const letters = [...str, " ", "M."];
console.log(letters); //["H", "a", "n", "n", "a", "h", " ", "M."];
console.log(...str); //H a n n a h
console.log("h", "a"); //h a


//Real world example
////calling the order pasta function
// we will get ingredients from user using prompt operator

const ingredients = [
  prompt("Let's make pasta! Ingredients 1? "),
  prompt(" Ingredients2 ?"),
  prompt(" Ingredients3 ?"),
];

console.log(ingredients); //3) ['cheese', 'chicken', 'brocolli']

//created the orderPasta method in object
//calling the order pasta function
////the old way calling
  ///restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

//using spread operator
restaurant.orderPasta(...ingredients);  //Here is your delicious pasta with cheese , chicken and brocolliF


//// after es6 spread operator also works on objects even though objects are not iterables
 //let's create a new restaurant object with all the data from the original one, plus some additional data

 const newRestaurant  = {foundedIn: 1999 , ...restaurant , founder: 'Olivia'};
 console.log(newRestaurant);

 //we can create shallow copy of object
 const restaurantCopy = {...restaurant};
 restaurantCopy.name = "Ristorante Rome"
 console.log(restaurantCopy.name); //Ristorante Rome
 console.log(restaurant.name); //Classico Italiano
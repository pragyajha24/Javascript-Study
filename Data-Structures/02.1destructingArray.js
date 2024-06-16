"use strict";

const arr = [1, 2, 3];

//without destructing retrieving values
const a = arr[0];
const b = arr[1];
const c = arr[2];

//retrieving using destructing
//taking values of arr and storing in variables x,y,z
const [x, y, z] = arr;
console.log(x, y, z); //1,2,3
//original array is not affected
console.log(arr);    //1,2,3

//another example
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze ,Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", " Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const [first, second] = restaurant.categories;
console.log(first, second); //Italian,Pizzeria

//if we want to receive elements which are not in order or have other values between them, then we just leave space for destructuring operator

let [main, , secondary] = restaurant.categories;
console.log(main, secondary); //Italian,Vegetarian

//swapping values or switching values between two without destructing
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);
//console.log(secondary,main);

//switching variables using destructing
[main, secondary] = [secondary, main];

//now doing [main, secondary] = [secondary, main] means to assign the value of the variable "secondary" to the variable "main" and the value of variable "main" to the variable "secondary".
//REMEMBER whatever is on the right side of  '='  operator its value will be taken. And whatever is on the left side of it,will be considered as the variable name.

console.log(main, secondary);

//returning values without destructing from the order method in the restaurant object
console.log(restaurant.order(2, 0)); //[ ' Garlic Bread', 'Pizza' ]

//receives two return values from a function using destructing
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // Garlic Bread Pizza


//Nested Destructuring
//retrieving values from a nested array using destructing
const nested = [2,4,[5,6]];
//retrieving first and third values without second
const [i , , j] = nested;
console.log(i,j); //2 [5,6]

//now we want all individual values so we will do destructing inside destructing
const [p, , [q,r]]= nested;
console.log(p,q,r); //2 5 6

//setting default values of variables when extracting them
const[e=1,f=1,g=1] = [8,9];
console.log(e,f,g);  //8,9,1

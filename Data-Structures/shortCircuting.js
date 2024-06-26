"use strict";

//Short circuting operators (&& and ||) AND and OR
//Short circuting OR means that if the first value is true value,it will immediately return that first value.
console.log("----------------------OR OPERATOR ------------------------");
//If the first operand is true value in OR operator, then other operand would not even be evaluted.
console.log(3 || "James"); //3
console.log("" || "James"); //James
console.log(true || 0); //true
console.log(undefined || null); // null (it checked undefined which is false value so it went to null and null is also a false value but last value by default answer is null)

console.log(undefined || 0 || "" || "Hello" || 23 || null); //Hello

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
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
    console.log(
      `Here's your pizza of ${mainIngredient} and the ${otherIngredients}`
    );
  },
};

//without using short circuting checking the value
//using ternary operator
restaurant.numGuests = 0;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

//using short circuting
const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log("-------------------------AND OPERATOR-------------------------");
//And operator short circuits if the first value is false and then immedietly returns that false value without even evaluating the second operand.
//But if the operand is true then evaluation continues and last value is returned.
console.log(0 && "James"); //0
console.log(7 && "James"); //James

console.log("Hello" && 23 && null && "james"); //null

//Practical example
//using if statment
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

//using short circuting &&
restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
 

console.log('-----------------------Nullish Operator (??)------------------');
///////////Nullish Coalescing Operator(??)///////////////////////////
//  Nullish operator works with the idea of nullish value instead of false value.
// Nullish value are null and undefined(even false)

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
"use strict";

///object example
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

  //many times we have function with lot of arguments and then it is hard to know order of arguments.So instead of defining the paramenters manually we can just pass an object into the function as a an argument and the function will immediately destructure the object
  //here in arguments we have destructure the object , the name of variable should match the name of property in the object
  //basically if your function has lot of arguments and while calling the function remembering the order of arguments can be a task , better way of doing it is creating a object while calling the function and in that object you can pass key value pair as key would be name of arguments and value will be value of arguments and order of these argument does not matter. And you can write  exactly the same name of arguments
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

//calling the function orderDelivery
restaurant.orderDelivery({
  time: "22:30",
  address: "34-1 Greenwich, South West London",
  mainIndex: 2,
  starterIndex: 2,
});

////destructing objects
//we have to provide variable names that exactly match the property names that we want to reterive from object.

//order of property does not matter we don't have to leave space for other property like array
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//If we want the variable name to be different from the property names
//syntax => originalName : newName
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

///Default values
//setting default value of peroperty not mentioned in object
//here we don't have property "menu" in object restaurant so we gave it a default value "[]" , and we can also merge all this in one statement like in we changed the name of startermenu variable and names it starter and aslo gave it a default value

//if we try to reterive the value of property not define in object we might get error of  undefined.
//add a = sign to assign default value
//it is beneficial when we  don't have hard coded data i.e. we are getting data from outside source ex- API
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

///Mutating variables
//swapping variables value

//Initially, a is assigned the value 111 and b is assigned the value 222.
let a = 111;
let b = 222;

//There is an object obj defined with properties a, b, and c.
const obj = {
  a: 1,
  b: 2,
  c: 3,
};

//The statement ({ a, b } = obj); is using object destructuring assignment. It assigns the values of obj.a and obj.b to the variables a and b, respectively.

({ a, b } = obj);
//After the destructuring assignment, a gets the value of obj.a, which is 1, and b gets the value of obj.b, which is 2.
//Finally, console.log(a, b); prints the values of a and b, which are 1 and 2 respectively.
console.log(a, b);

///Nested Objects
const { fri } = openingHours;
//fri is object in openingHours object
console.log(fri);

//but we can further destruct that object i.e. getting its property name
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

//we can also assign different varible to property name
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

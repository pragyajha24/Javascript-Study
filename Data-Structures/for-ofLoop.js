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

// ---------------------for-of LOOP------------------------------

//without using any loop but spread operator reading the whole menu
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//with for loop we will need a vairable ,assign it a value and then increment it but with for of loop it's more simple

//for-of loop will automatically loop over the entire array and in each iteration it will give us access to the current array element which we can specify in form of vairable we take.Like in this case we named it item, we can name it anything we want.
for (const item of menu) console.log(item);

// now,if we want index of element in array
for (const item of menu.entries()) {
  // console.log(item);
  console.log(`${item[0] + 1}: ${item[1]}`);
}

//another way by destructing array
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

//menu.entries is an array iterator.
//menu.entries is basically an array  which in each position contain a new array which contains an element and index number of that element in the original array.
console.log([...menu.entries()]);

"use strict";

//square root
console.log(Math.sqrt(25)); //5
//exponential operator
console.log(25 ** (1 / 2)); //5
//cubic root
console.log(8 ** (1 / 3)); //2

//get max value
console.log(Math.max(5, 34, 56, 2, 5)); //56
//it  does type coercion
console.log(Math.max(5, 34, "56", 2, 5)); //56

//however, it does not do parsing
console.log(Math.max(5, 34, "56px", 2, 5)); //Nan

//get min value
console.log(Math.min(5, 34, 56, 2)); //2

//want to calulate the radius of a circle with 10 pixels - pir^2
console.log(Math.PI * Number.parseFloat("10px") ** 2); //314.1592653589793

//math.random is between 0 and 1
//we generated random number between 0 and 1 but to get till 0 and 6 we multiply by  6 and plus 1 to get between 1 and 6 and to remove decimals we multiply by math.trnc
console.log(Math.trunc(Math.random() * 6) + 1);

// random number function with min and max of your choice
const randomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min;
};
//console.log(randomInt(10,20));

/////////////////////////////////////
////////////////////////////////////
//Rounding integers

//this removes all decimal parts always
console.log(Math.trunc(23.3)); //23

//this one rounds to the nearest integers
console.log(Math.round(23.4));//23
console.log(Math.round(23.8));//24

//this one round down
console.log(Math.ceil(23.4));//24
console.log(Math.ceil(23.8));//24

//math.floor
console.log(Math.floor(23.4));//23
console.log(Math.floor(23.8));//23

//all of these methods do type coercion
//floor and trunc remove decimal parts when dealing with positive numbers
//but not for negative numbers 
//trunc does not round negative but floor does, so floor is better as it works in all conditions

console.log(Math.trunc(-23.8)); //-23
console.log(Math.floor(-23.8)); //-24

////////////////////////////////////////////////
//Rounding decimals (floating point numbers)
console.log((2.7).toFixed(0)); //3
//toFixed always return a string and not a number
console.log((2.7).toFixed(3));//2.700

"use strict";

//creating two functions to use as callback
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  //deconstructing using rest parameter
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

//higher order function - taking another function as parameter
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  //here we are passing the callback function
  console.log(`Transformed string ${fn(str)}`);

  //functions even has methods and property we use name property to get name of the function
  console.log(`Transformed by: ${fn.name} `);
};

//only passing the function value not calling functions using brackets but we ask transformer function to call it
transformer("How's life ? ", upperFirstWord);
///output:
//Original string: How's life ?
//Transformed string HOW'S life ?
//Transformed by: upperFirstWord

transformer("I am moving.Thank you.", oneWord);
//output
//Original string: I am moving.Thank you.
//Transformed string iammoving.thankyou.
//Transformed by: oneWord

//JS uses callbacks all the time
//1.advantage - It makes it easy to split up our code into more resuable and interconnected parts.
//2.advantage - Callback functions allows us to create abstraction.
/// abstraction means we hide the detail of some code implementation because of don't really care about all the detail.

//EXAMPLE-2
function sum(num1, num2) {
  console.log(num1 + num2);
}

function operation(num1, num2, fn) {
  fn(num1, num2);
}

operation(2, 2, sum);

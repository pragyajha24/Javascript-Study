"use strict";

//in js all numbers are represented as floating point  numbers (as decimals)

//i.e. we have same data type for all numbers
console.log(23 === 23.0); //true
//numbers are always stored in binary format (0 and 1)


//string to a number
console.log(Number('23')); //23
//another way
//because when javascript sees the plus operator ,it will do type coercion.
//so it will automatically convert the operands to numbers
console.log(+'23'); //23

//////////////////////////
//PARSING
//parse a number from string

console.log(Number.parseInt('30px')); //30
//need to start with a number
console.log(Number.parseInt('e45'));  //NaN

//parseInt() acceptes a second parameter which is called regex.
//regex is the base of the numeral system that we are using.
//here we are using base 10 numbers , numbers from 0 to 9

console.log(Number.parseFloat('2.5rem')); //2.5
console.log(Number.parseInt('2.5rem')); //2 , here we only got the integer part

//these two functions are also called global functions

//Nan - Not a number
//isNan - Is not a number -> we can use this one to check if any value is a number.

//use only to check if values is not a  number
console.log(Number.isNaN(20)); //false
console.log(Number.isNaN('20')); //false
console.log(Number.isNaN(Number('20x')));//true because this is string not a number

//isFinite to check if a value is real number
console.log(Number.isFinite(20)); //true
console.log(Number.isFinite('20')); //false
console.log(Number.isFinite(Number('30px'))); //false
console.log(Number.isFinite(23/0));//false

console.log(Number.isInteger(23));//true
console.log(Number.isInteger(23.0));//true
console.log(Number.isInteger(23.8));//false

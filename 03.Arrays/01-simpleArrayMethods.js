"use strict";

//array has methods. methods are function attached to objects , arrays are also object.

let arr = ['a','b','c','d','e'];

//SLICE (does not mutate the array)
console.log('-----------SLICE-----------');
console.log( arr.slice(0,3)); //end parameter will not be included in the output
console.log(arr.slice(2));    //length will be end - beginning parameter
console.log(arr.slice(-2));
console.log(arr.slice(1,-2));  //[ 'b', 'c' ]

//can create a shallow copy of the array using slice
console.log(arr.slice());

//SPLICE (mutate the array)
console.log('-------------SPLICE----------');
//it works same as slice but fundamental difference is it change the original array, it mutates the array.
console.log(arr.splice(0,3)); //[ 'a', 'b', 'c' ]
//the original array has been changed
console.log(arr);//[ 'd', 'e' ]

//REVERSE (mutate the array)
console.log('-----------REVERSE-----------');
arr = ["a", "b", "c", "d", "e"];
const arr2 = ['j','i','h','g','f'];

const arr3 = arr2.reverse();
console.log(arr3);
console.log(arr2);
console.log(arr2.reverse()); //[ 'f', 'g', 'h', 'i', 'j' ]
//REVERSE method does mutate(change) the original array
console.log(arr2); //[ 'f', 'g', 'h', 'i', 'j' ]

//CONCAT (does not mutate the original array)
console.log('-------------CONCAT------------');
const letters = arr.concat(arr2);
console.log(letters); 
// [
//   'a', 'b', 'c', 'd',
//   'e', 'f', 'g', 'h',
//   'i', 'j'
// ]

//JOIN
console.log('----------------JOIN--------------');
console.log(letters.join('-')); //a-b-c-d-e-f-g-h-i-j

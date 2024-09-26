"use strict";

const arr = [23,14,34];
console.log(arr[0]); //23 ---- one way of doing that
console.log(arr.at(0)); //23  ---- new way of doing that 


//getting the last element of array using  common way

console.log(arr[arr.length-1]); //34


console.log('fcedfcd');
console.log(arr[-1]);
console.log(arr.slice(-1)[0]);  //34

// new at method
console.log(arr.at(-1)); //34

//it also works on strings
console.log('steph'.at(0)); //s
console.log('steph'.at(-1)); //h

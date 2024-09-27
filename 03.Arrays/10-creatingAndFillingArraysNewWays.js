"use strict";

//manually way of creating arrays
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

//generate array programitcally
const x = new Array(7);
console.log(x); //[ <7 empty items> ]
//this did not create new array but said this array contain 7 empty element container

//this mutate the array
//x.fill(1);
//console.log(x); //[ 1, 1, 1, 1,1, 1, 1]

//we can select the begin and end paramter also
x.fill(1, 3, 5);
console.log(x); //[ <3 empty items>, 1, 1, <2 empty items> ]

//can change existing array elements also
arr.fill(23, 2, 6);
console.log(arr); //[ 1,  2, 23, 23,23, 23,  7]

/////////////////////////////////////////////////////////
//Array.from function - to create and fill an array
//using array form constructor to fill an array
//Array.from
const y = Array.from({length:7}, () => 2);
console.log(y); //[2, 2, 2, 2,2, 2, 2]

const z = Array.from({length: 7},(cur,i) => i+1 )
console.log(z); //[1, 2, 3, 4,5, 6, 7]

//dice roll using array from
const diceRolls = Array.from({length: 100},()=>Math.trunc(Math.random()*6)+1);
console.log(diceRolls);
// [
//   3, 3, 1, 2, 3, 4, 4, 2, 3, 2, 5, 4, 2, 6, 5, 2, 6, 2, 4, 2, 3, 5, 1, 4, 5, 6,
//   1, 1, 4, 4, 4, 4, 2, 3, 5, 5, 3, 5, 3, 4, 2, 1, 3, 6, 1, 3, 2, 5, 2, 5, 3, 5,
//   5, 4, 1, 3, 1, 2, 6, 1, 5, 2, 2, 1, 6, 6, 3, 1, 1, 2, 2, 6, 2, 1, 6, 2, 2, 2,
//   5, 1, 3, 3, 1, 6, 5, 5, 1, 1, 2, 1, 1, 1, 4, 5, 6, 6, 4, 2, 5, 6,
// ];

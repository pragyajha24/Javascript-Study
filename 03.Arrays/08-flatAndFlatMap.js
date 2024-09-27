"use strict";

//we have a nested array
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

//we want this above array in one removing  the sub array
//flat method - when we want all (nested) arrays elements in one separate array and put in one big array
console.log(arr.flat());
//output:
// [1, 2, 3, 4, 5, 6, 7, 8];

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];

// using flat on deeper nested array

console.log(arrDeep.flat());
//flat method only goes one level deep when flattening the array
//output:
//[ [ 1, 2 ], 3, 4, [ 5, 6 ], 7, 8 ]

//here we give a level how deep flat needs to go in array
console.log(arrDeep.flat(2));
//[1, 2, 3, 4,5, 6, 7, 8]

//BETTER EXAMPLE

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

////////////////////////////////////////////
//flat method example

//let's say bank itself wants to calculate the overall balance of all the movements of all the accounts.
//we iterate through accounts array object and get all account movements
const accountMovements = accounts.map(function (acc) {
  return acc.movements;
});
console.log(accountMovements); //(4) [Array(8), Array(8), Array(8), Array(5)]

//now we use flat method to get them in one separate array
const allMovements = accountMovements.flat();
console.log(allMovements);
//[200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]

//now we will just add all movements
const overallBalance = allMovements.reduce(function (acc, mov) {
  return acc + mov;
}, 0);
console.log(overallBalance); //17840


"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//using for-of loop
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

console.log("-------------forEach------------");
//forEach is higher order function it takes another function as parameter
//forEach method loop over the array and in each iteration it will execute the callback function.
//As the forEach method calls this callback function in each iteration it will pass in the current element of the array as an argument.

//arrayName.forEach(function(iteration){})
//                             (current element,current index , entire array )

movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

//continue and break does not work in forEach

//forEach with Maps
console.log('------------forEach with MAPS------------');
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}:${value}`);
});

//output:
// USD:United States dollar
// EUR:Euro
// GBP:Pound sterling

//forEach with Set
console.log('-----------forEach with Sets------------');
const currenciesUnique = new Set(['USD','GBP','USD','EUR','EUR']);
console.log(currenciesUnique); //Set(3) { 'USD', 'GBP', 'EUR' }

currenciesUnique.forEach(function(value,_,map){
  console.log(`${value }:${value}`);
})

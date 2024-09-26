"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//includes here return TRUE if any value in the array is exactly equal to -130
console.log(movements.includes(-130));

//SOME method
console.log(movements.some((mov) => mov === -130));

//now,we wanna know if any deposit is done in the account, to check if any number above 0 in the array

const anyDeposits = movements.some(function (mov) {
  return mov > 0; //true

  ////checking if any deposit above 5000
  // return mov > 5000; //false
});

console.log(anyDeposits);

/////EVERY method
//every only return TRUE if all of the elements in the array satisfy the condition

//example - to check if all the movements are deposit
console.log(movements.every(mov => mov > 0)); //false

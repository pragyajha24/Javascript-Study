"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euToUsd = 2;

const movementsUSD = movements.map(function (mov) {
  return mov * euToUsd;
});

console.log(movements);
console.log(movementsUSD);

const movementDescriptions = movements.map(function (mov, i, arr) {
  if (mov > 0) {
    return `Movement ${i + 1}: You deposited ${mov}`;
  } else {
    return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  }
});

console.log(movementDescriptions);


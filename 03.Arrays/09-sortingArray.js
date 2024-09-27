"use strict";

//Strings
const owners = ["Emma", "Gabriel", "Aaron", "Matilda"];
console.log(owners.sort());
//sorted it alphabetically
//[ 'Aaron', 'Emma', 'Gabriel', 'Matilda' ]
//but it mutates the original array

console.log(owners); //[ 'Aaron', 'Emma', 'Gabriel', 'Matilda' ]

//Numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.sort());
//they are not ordered in any way
//[ -130, -400, -650, 1300,  200, 3000,  450,   70]

//BECAUSE sort method does sorting based on strings
//It convert everything to strings and then it does sorting itself

//so to stop this from happening we will pass a compare  callback function into  the sort  method
//this callback function is passed with two paramters
//a and b are current value and the next value

//if we return < 0 , a will be before b (keep order)
//if we return > 0 , b will be before a (switch order)
/////sorting in ascending order
movements.sort(function (a, b) {
  if (a > b) {
    return 1;
  }
  if (b > a) {
    return -1;
  }
});
console.log(movements);
//[-650, -400, -130, 70,  200,  450,  1300, 3000]



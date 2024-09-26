"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//find method
//we can use find method to retrieve one element from an array based on a condition.

//find loops over the array
//NOT RETURN A NEW ARRAY
//but it will only return the first element in the array that satisfies this condition

const firstwithdrawal = movements.find(function(mov){
    return mov < 0;
})

console.log(movements);
console.log(firstwithdrawal);

//fundamental difference between FILTER and FIND
//1. filter method returns all the elements that match the condition while FIND method only returns the first one 
//2. filter method returns a new array while find only returns the element itself and not an array


"use strict";

//remainder operator returns the remainder of a division
console.log(5 % 2); //1
console.log(8 % 3); //2

const isEven = function(n){
    return n % 2 === 0;
}

console.log(isEven(8)); //true
console.log(isEven(21)); //false


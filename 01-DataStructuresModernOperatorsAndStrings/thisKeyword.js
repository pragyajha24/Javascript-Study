"use strict";

console.log(this); //giving window object

const calcAge = function (birthYear) {
  console.log(2024 - birthYear);
  console.log(this); //giving undefined inside normal function using strict mode otherwise window object
};

calcAge(1999);

const calcAgeArrow = (birthYear) => {
  console.log(2024 - birthYear);
  console.log(this); //giving window object as arrow functions does not have their this keyword
};

calcAgeArrow(1999);

///////////////method in object and using this
const pragya = {
  year: 1999,
  calcAge: function () {
    console.log(this);
    console.log(2024 - this.year);
  },
};

pragya.calcAge(); //pragya is the object calling method. pragya is the owner of this method.

const ananya = {
  year: 2011,
};

ananya.calcAge = pragya.calcAge; //functions are just values so we can copy one value to another
ananya.calcAge(); //this always points to the object it is called

/////regular function vs. arrow function which one to use

//this is not a code block its object literal all of this in global scope
const pragyaJha = {
  firstName: "Pragya",
  year: 1999,
  calcAge: function () {
    console.log(this);
    console.log(2024 - this.year);
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

pragyaJha.greet(); //output => Hey undefined
// becoz an arrow function does not get its own this keyword  it simpliy use this keyword from its surroundings (parents's this keyword) which here is global scope
 
//never use arrow functions as method
"use strict";

//Lecture - 222
//Prototypal Inheritance on Built-In Objects

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const henna = new Person("Henna", 1724);
console.log(henna);

Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

henna.calcAge();

Person.prototype.species = "Homo Sapiens";
console.log(henna.species);

//this works because of prototypal chain
console.log(henna.__proto__);
console.log(henna.__proto__.__proto__);
console.log(henna.__proto__.__proto__.__proto__);


console.log(Person.prototype.constructor);

"use strict";

//constructor function example
const Her = function (lastName, birthDate) {
  this.lastName = lastName;
  this.birthDate = birthDate;
};

//static method
Her.hey = function () {
  console.log("Hey there, I am attached to constructor🖐️");
};

const jenny = new Her("Jenny", 20);

Her.hey();
//jenny.hey(); //uncaught typerror
//only Her constructor can access the hey method.It is attached to the entire constructor
//not the prototype property of constructor

//class  example
class PersonCl {
  constructor(firstName, birthyear) {
    firstNameInput = firstName;
    birthearInput = birthyear;
  }

  //static method
  static hey() {
    console.log("Hey there, I am attached to class 🖐️");
  }
}

PersonCl.hey();

//Example
class Math {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

//calling statc methods on the class
console.log(Math.add(2,2));
console.log(Math.multiply(3,3));
"use strict";

//Lecture - 229
//INHERITANCE BETWEEN ""CLASSES" : CONSTRUCTOR FUNCTIONS

//so we will create a person constructor function and student constructor function and let student class inherit
//properties from person class.
//person class will become the parent class
//and, student class will become the child class

/////we will use constructor function

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2044 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  ////////we will inherit firstname and birthyear from person constructor function
  ////////now if we call the function as

  //Person(firstName,birthYear); //code line

  /////that will not work as
  /////we are trying to call person constructor function as the regualar function.
  // and in regular function call the 'this' keyword is set to undefined.

  //so we need to manually set the this keyword as well.
  //way to call a function and at the same time set the this keyword
  //is using the call method

  Person.call(this,firstName, birthYear);

  this.course = course;
};

//creating connection btw student prototype and person prototype so student can inherit
//methods from person
//We have to do this step before adding any method in student
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and my course is ${this.course}`);
};

const elena = new Student("Elena", 1901, "English Literature");
console.log(elena);
elena.introduce();

elena.calcAge();

console.log(elena.__proto__);  //Person {introduce: ƒ}
console.log(elena.__proto__.__proto__); //{calcAge: ƒ}

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);


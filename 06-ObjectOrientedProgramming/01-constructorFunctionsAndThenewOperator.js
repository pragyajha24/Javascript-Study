"use strict";

///////////////////////////Lecture #219
///Constructor Functions and the new Operator
//the only difference between regular function and constructor function is that we call constructor function with the new operator.
//in OOP , there is convention that constructor function start with capital letter.

//the way to differentiate between regular function and constructor function is that constructor function always starts with capital letter.

//only function declaration and function expressions will work not arrow function because arrow function does not has its this keyword and we need that.

//creating constructor function
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

//calling the constructor function
//created object through constructor function
const jenny = new Person("Jenny", 1991);
console.log(jenny);

//four important things happened in the background
//1.New {} is created, new empty object is created
//2.afterwards the, function is called and in this function called the this keyword will be set to this newly created object. this = {}
//3.newly created object is linked to prototype.
//4. object that was created in the beginning is automatically returned from the constructor function

//now we can use this constructor function to create as many diferent objects as we want
const birta = new Person("Birta", 1999);
const steph = new Person("Stephaine", 2001);
console.log(birta);
console.log(steph);

//don't create methods inside constructor function because, as we will use that function to create thousand of objects and what would have is each of this objects will carry the copy of the method here.
// So if we had thousand object than we would have thousand copies of that function which would be terrible for performance of our code.

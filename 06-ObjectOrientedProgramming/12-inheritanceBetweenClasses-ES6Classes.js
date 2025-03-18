"use strict";

//Lecture - 231
//INHERITANCE BETWEEN "CLASSES" " ES6 CLASSES"

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2044 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    console.log(2045 - this.birthYear);
  }

  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log(`Hi honey`);
  }
}

//to link student class to person class use 'extends' keyword
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //here instead of call() method we use super() method
    // - it is constructor function of parent class
    ///always needs to happen first - becoz this call to super function
    //is responsible in creating the 'this' keyword in this subclass
    super(fullName, birthYear);

    this.course = course;
  }

  introduce() {
    console.log(`I am ${this.fullName} and my course is ${this.course}`);
  }

  //we can overwrite the parent class method in child class
  calcAge() {
    console.log(
      `I'm ${
        2044 - this.birthYear
      } years old, but as a student  I feel more like ${
        2044 - this.birthYear + 10
      }`
    );
  }
}

let stefen = new StudentCl("Stefen Salvatore", 1700, "History");

console.log(stefen);

//  stefen = new StudentCl("Stefen Salvatore",1700)
//  console.log(stefen);

console.log(stefen.fullName);
stefen.greet();
stefen.introduce();
stefen.calcAge();
PersonCl.hey();
stefen.calcAge();

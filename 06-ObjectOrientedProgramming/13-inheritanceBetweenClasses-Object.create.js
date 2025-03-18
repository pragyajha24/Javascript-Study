"use strict";

//Lecture - 232
//INHERITANCE BETWEEN CLASSES : Object.create

//created the object which will act as prototype
const PersonProto = {
  calcAge() {
    console.log(2044 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

//created an object whose prototype is PersonProto
const damon = Object.create(PersonProto);
damon.init("Damon Salvatore", 1695);
console.log(damon);
damon.calcAge();

//here, PersonProto is the prototype of Studentproto
const StudentProto = Object.create(PersonProto);

//defining init method on StudentProto so we don't have to manually specify property on Studentproto
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function(){
    console.log(`Hi I am ${this.firstName}`);
}

//StudentProto is the prototype of katerine
//so PersonProto is parent prototype of katerine
//which means it is in its prototype chain
const katerine = Object.create(StudentProto);
katerine.init('Katerine',1698,'Criminology');
console.log(katerine);
katerine.calcAge();
katerine.introduce();

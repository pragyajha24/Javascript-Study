"use strict";

//Lecture-227
//Object.create

//no prototype properties invloved but there is idea of prototypal inheritance.
//no constructor function
//no new operator

//We can use Object.create to manually set the prototype to any object that we want.

//we create a object then we set it as the prototype of all the objects

//properties and method that we want object to inherit we put that in prototype object

//1.creating prototype
const PersonProto = {
  calcAge() {
    console.log(2044 - this.birthYear);
  },

  //method to implement properties programatically
  init(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  },
};

///2.creating a person object
const birta = Object.create(PersonProto);
//this will return a new object, that is linked to the prototype that we passed.
//birta here is rightnow as empty object and it will be linked to this Personproto object which will be its prototype

//console.log(birta);
//adding properties
birta.name = "Birta";
birta.birthYear = 2000;

birta.calcAge();

//creating more object
const monica = Object.create(PersonProto);
monica.init("Monica", 1989);
monica.calcAge();

//object.create creates the new object,  and the prototype of that object will be the object that we passed in.

"use strict";

//Object is js are collection of key value pairs,where keys are strings, and values can be of any data type ,including other object.
//creating objects
const peter = {
  firstName: "Peter",
  lastName: "Parker",
  : 2044 - 1901,
  job: "saving the world",
  friends: ["Wendy", "Tinker bell"],
};

console.log(peter);

//using dot notation to reterive property from object
console.log(peter.lastName);

//using bracket notation to reterive data we have to use string in it
console.log(peter["lastName"]);

//another way of using bracket notation
const nameKey = "Name";
console.log(peter["first" + nameKey]);
console.log(peter["last" + nameKey]);

//use of bracket notation: when we don't know which property to display or the user will choose which property she wants to ask?
const interestedIn = prompt(
  "What do you want to know about Peter? Choose between firstName,lastName,age,job and friends"
);
//console.log(peter[interestedIn]);

//adding new property to object
//creating new property using dot notation
peter.location = "London";

//creating new property using bracket notation
peter["song"] = "Peter by taylor swift";
console.log(peter);

//Challenge
//"Peter has 2 friends, and his best friend is  Wendy"
console.log(
  `${peter.firstName} has ${peter.friends.length} friends, and his best friend is ${peter.friends[0]} `
);

////objects method
//any function attached to a object is called method
//In object we write function expression

const alison = {
  firstName: "Alison",
  lastName: "Dilaurenters",
  birthYear: 1991,
  job: "teacher",
  friends: ["Spencer", "Aria", "Emily"],
  hasDriversLicense: true,
  calcAge: function () {
    return 2044 - this.birthYear;
  },

  //Challenge
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    } , and she has a ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },

  // calcAge: function(){
  //     this.age= 2044-this.birthYear;
  //     return this.age;
  // }
};

console.log(alison.calcAge());
//console.log(alison.age);

//Challenge

// if (alison.age > 18) {
//   hasDriversLicense = true;
// } else {
//   hasDriversLicense = false;
// }
// console.log(
//   `${alison.firstName} is a ${alison.calcAge()} year old ${
//     alison.job
//   } , and she has a  `
// );


console.log(alison);
console.log(alison.getSummary());
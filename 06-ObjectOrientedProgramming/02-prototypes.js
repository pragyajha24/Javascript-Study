////////Lecture - 220
//////Prototypes

//each and every function in JS automatically has a property called prototype, that includes constructor function.

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const caroline = new Person("Caroline", 1888);
console.log(caroline);


//so every object that's created by a certain constructor function will get access to all the methods and properties that we define on the constructor prototype property.
//prototype property of constructor function
console.log(Person.prototype);

//now we can create methods in constructor function like this
Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

//this way there exist only one copy of this function.
//And all of this object created using this constructor function can use this method.
///////this keyword is set to the object that is calling the method.
caroline.calcAge();

//How caroline object is connected to Person constructor prototype function?
//That's why they can have access to this method that is located inside the prototype property of a Person.
//But how and why this actually works?

//Well, it works because any object always has access to the methods and properties from its prototype.
//and prototype of Caroline is Person.prototype 
//and, we can confirm that as each object has a special property called a __proto__
console.log(caroline.__proto__);  //prototype of jonas object is essentially the prototype property of the constructor function
console.log(caroline.__proto__ === Person.prototype);//true
//*Person.prototype is actually not the prototype of person.Instead, it is gonna be used as the prototype of all the objects that are created with the person constructor function.

//inbuilt method to check it
console.log(Person.prototype.isPrototypeOf(caroline));//true


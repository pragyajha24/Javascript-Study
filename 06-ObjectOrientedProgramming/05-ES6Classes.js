////Lecture - 224
//ES6 Classes
////creating objects using es6 classes
"use strict";

//Classes in js does not work as in other languages like C++ , JAVA.
//But it acts as a syntactic sugar over what we learned.
//So they still implement prototypal inheritance behind the scenes but with a different syntax .

//classes are a special type of functions.

////////class expression
//const PersonCl = class {};

//class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //Methods will be added to .prototype property
  calcAge() {
    console.log(2044 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

//act of creating a object works as same way as before . So using the new operator.
//So, therefore whenever we create a new object , so like a new instance using the new operator, this constructor will automatically be called.

//and methods we can write in the class but outside the constructor block,
//and all the methods will be on the prototype of the objects.and not on the object themseleves.

const jess = new PersonCl("Jess", 1990);
console.log(jess);

jess.calcAge();

console.log(jess.__proto__); //{calcAge:f}
console.log(PersonCl.prototype); //{calcAge:f}

//we can add methods manually on the prototype also , and it works the same
// PersonCl.prototype.greet = function(){
//     console.log(`Hey ${this.firstName}`);
// }

jess.greet();


///////////////////////////
//Important random stuff about classes
//1.Classes are NOT hoisted , even if they are class declaration
// functional declarations are hoisted , which means we can use them before they are declared in the code.
//  but not with classes.

//2. classes are first-class citizen which means , we can pass them into functions and also return them from functions.
// i.e. becoz classes are special type of function behind the scenes.

//3. the body of the class is always executed in strict mode.


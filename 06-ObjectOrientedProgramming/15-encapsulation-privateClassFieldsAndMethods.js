"use strict";

//Lecture - 234
//ENCAPSULATION : PRIVATE CLASS FIELDS and METHODS

//encapsulation means to keep some properties and methods private
//inside the class so they are not accesible by outside the class.

//need of encapsulation and data privacy
//1.to prevent code from outside a certain class to accidentally manipulate our data that lives inside the class
//2.when we expose only a small interface , a small API consisting
//of a few public methods,then we can change all the other internal methods inside the class.

//class fields - private and public class fields

//1.PUBLIC FIELDS
//2.PRIVATE FIELDS
//3.PUBLIC METHODS
//4.PRIVATE METHODS
//5.STATIC version of these four

//FIELD -  a field is a property that will be on all the class intances.
//that's why we also call this is a public instance field.
//this means that we can declare everthing as a field that we want to be present on all the instances,
//but not on the prototype.

//these fields will not be inherited
//these fields are like adding properties to a constructor

class Account {
  //locale and bank are public fields
  //creating a class field for locale,
  // as locale can be used as a public field i.e. by all the object
  locale = navigator.language;
  bank = "Mermaid Perals";

  //setting private fields
  //so externally no one can change the movements
  //so no one can excess the field
  //use # hash symbol before
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this.movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  //public interface
  //giving other developers way to interaact with movements as movements is a private field
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    //for chaining methods
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  //converted into a private method
  #approveLoan(val) {
    //fake method does not have complex algorithm right now
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
    return this;
  }
}

const acc1 = new Account("Alex", "EUR", 1111);
acc1.deposit(500);
acc1.withdraw(200);
console.log(acc1);

//console.log(acc1.#movements);
//gives an error of Uncaught SyntaxError: Private field '#movements' must be declared in an enclosing class

////////////////////////////////
//lecture - 235
//CHAINING METHODS

acc1
  .deposit(300)
  .withdraw(100)
  .withdraw(20)
  .requestLoan(250000)
  .withdraw(5000);
console.log(acc1);

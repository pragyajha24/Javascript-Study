"use strict";

//Lecture-233

//we will use bank account which we implemented in bankist application

//created a class AccountCl
class AccountCl {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;

    //we can create more properties on any instance
    // and properties that are not based on any inputs
    this.movements = [];
    this.locale = navigator.language;

    console.log(`thanks for opening an account ${owner}`);
  }

  //public interface of our object
  deposit(value) {
    this.movements.push(value);
  }

  withdraw(value) {
    this.deposit(-value);
  }
}

const acc1 = new AccountCl("Kevin", "EUR", 1111);

///////for movements - when we want to deposit
//acc1.movements.push(300);

///////when we want to withdraw movements
//acc1.movements.push(-133);
//console.log(acc1);

///////////////////////////////////////////
//BUT IT IS NOT A GOOD WAY TO INTERACT WITH PROPERTIES
// INSTEAD CREATE A METHOD

acc1.deposit(300);
acc1.withdraw(200);
console.log(acc1);

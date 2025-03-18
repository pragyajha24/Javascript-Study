"use strict";

//////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉
DATA CAR 1: 'BMW' going at 120 km/h, with a charge of 23%
GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going  at  ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.brake -= 5;
  console.log(`${this.make} is breaking at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

//link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
this.speed += 20;
this.charge -= 1;
console.log(`${this.make} is going  at  ${this.speed} km/h, with a charge of ${this.charge}`);
};

const bmw = new EV("BMW", 120, 13);
console.log(bmw); //EV {make: 'BMW', speed: 120, charge: 13}
bmw.chargeBattery(90);
console.log(bmw); //EV {make: 'BMW', speed: 120, charge: 90}

bmw.brake();
bmw.accelerate();


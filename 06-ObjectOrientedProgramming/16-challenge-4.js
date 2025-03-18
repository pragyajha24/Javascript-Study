"use strict";

///////////////////////////////////////
//lecture-237
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!
DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%
GOOD LUCK 😀
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going  at  ${this.speed} km/h`);

    return this;
  }

  brake() {
    this.brake -= 5;
    console.log(`${this.make} is breaking at ${this.speed} km/h`);
    return this;
  }
}

class EVCl extends CarCl {
    #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} is going  at  ${this.speed} km/h, with a charge of ${this.#charge}`
    );

    return this;
  }
}
// const bmw = new EVCl("BMW", 120, 13);
// console.log(bmw); //EV {make: 'BMW', speed: 120, charge: 13}
// bmw.chargeBattery(90);
// console.log(bmw); //EV {make: 'BMW', speed: 120, charge: 90}

// bmw.brake();
// bmw.accelerate();

const rivian = new EVCl('Rivian',120,23);
console.log(rivian);

rivian.accelerate().accelerate().brake();
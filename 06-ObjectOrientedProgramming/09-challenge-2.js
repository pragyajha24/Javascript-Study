"use strict";

//lECTURE - 228
///challenge -2

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h 
(but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods,
 and with the getter and setter.
DATA CAR 1: 'Ford' going at 120 km/h
GOOD LUCK 😀
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelearate() {
    this.speed += 10;
    console.log(`${this.make} is going at the speed of ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is breaking at ${this.speed} km/h`);
  }

  get speedUS() {
    this.speed /= 1.6;
    console.log(`${this.make} is going at the speed of ${this.speed} mi/h`);
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
    console.log(`${this.make} is going at the speed of ${this.speed}km/h`);
  }
}

const ford = new CarCl("Ford", 120);
ford.accelearate();
ford.brake();

ford.speedUS;
ford.speedUS = 78;

console.log(ford);


//output
// Ford is going at the speed of 130 km/h
//  Ford is breaking at 125 km/h
// Ford is going at the speed of 78.125 mi/h
//  Ford is going at the speed of 124.80000000000001km/h

//  CarCl {make: 'Ford', speed: 124.80000000000001}
//// make: "Ford"
//// speed: 124.80000000000001
//// speedUS: (...)
//// [[Prototype]]: Object
"use strict";

//A closure is not a feature we explicitly use. So we don't create closure manually like we create a new array or a new function.
//So a closure simply happens automatically in certain situations, we just need to recognize those situations.
//example for that , we will create one of those situation to understand
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers `);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

//output:
// 1 passengers
// 2 passengers
// 3 passengers

//another example
//example1

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f(); //46
console.dir(f);

//re-assigning f function
h();
f(); //1554
console.dir(f);

//example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passenggers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);
//output:
//Will start boarding in 3 seconds
//We are now boarding all 180 passengers
// There are 3 groups, each with 60 passenggers

// setTimeout(function () {
//   console.log("TIMER");
// }, 1000);

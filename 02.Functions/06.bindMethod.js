"use strict";


const luftansa = {
  airline: "Luftasa",
  iataCode: "LH",
  bookings: [],
  book: function (flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );

    //pushing the passenger in array
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = luftansa.book;

book.call(eurowings, 12, "Sheldon Cooper");

///BIND method
//bind also allows to manually set this keyword for any function call.Now the difference is bind does not immediately call the function , instead it returns a new function where this keyword is bound.So it's set to whatever value we pass into bind.

const bookEW = book.bind(eurowings);
bookEW(44, "Missy Cooper");
console.log(eurowings);
//output:
// Sheldon Cooper booked a seat on Eurowings flight EW12
// Missy Cooper booked a seat on Eurowings flight EW44
// {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [
//     { flight: 'EW12', name: 'Sheldon Cooper' },
//     { flight: 'EW44', name: 'Missy Cooper' }
//   ]
// }

//we can set the flight number as parameter in bind
//here we set the flightNum in bind method and stored it in new variable and then we only need to pass the name
const bookEW12 = book.bind(eurowings, 12);
bookEW12("Hayley Dunphy");

//setting arguments before - means partial application
////partial application means that a part of the arguments of the original function are already applied , means already set.

//objects with event listeners

//partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

//order of arguments is important
//presetting the rate
//their is no this keyword so simply write null
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

// example above function in  funtion returning function
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));

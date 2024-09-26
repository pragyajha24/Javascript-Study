"use strict";

//create an array
const bookings = [];
//setting default value for parameter
const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  //created object with keys of same name as paramters
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  //without default values
  console.log(booking); //{ flightNum: 'LH124', numPassengers: undefined, price: undefined }
  bookings.push(booking);
};
//without default values
createBooking("LH124"); //{ flightNum: 'LH124', numPassengers: undefined, price: undefined }
//with default value
//  { flightNum: 'LH124', numPassengers: 1, price: 199 }


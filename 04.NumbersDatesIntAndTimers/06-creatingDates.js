"use strict";

//create a date
//four ways of creating dates
//1. new date constructor function
const now = new Date();
console.log(now); //Sat Oct 05 2024 18:57:11 GMT+0530 (India Standard Time)

//2.is to parse the date from a date string
console.log(new Date(" 2024-10-05")); //Sat Oct 05 2024 00:00:00 GMT+0530 (India Standard Time)
console.log(new Date("November 24, 1999")); //Wed Nov 24 1999 00:00:00 GMT+0530 (India Standard Time)

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

console.log(new Date(account1.movementsDates[0])); //Tue Nov 19 2019 03:01:17 GMT+0530 (India Standard Time)

//3.
console.log(new Date(2037, 10, 19, 15, 23, 5)); //Thu Nov 19 2037 15:23:05 GMT+0530 (India Standard Time)
//here 10 is for november because in js month starts from 0

//4. we can pass the amount of milliseconds passed since the beginning of unix time, which is january 1,1970
console.log(new Date(0)); //Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)

//date 3 days after this
//3 days 24 hours per day 60 minutes 60 seconds 1000 milliseconds
console.log(new Date(3 * 24 * 60 * 60 * 1000)); //Sun Jan 04 1970 05:30:00 GMT+0530 (India Standard Time)

//working with dates methods
const future = new Date(2003, 8, 30);
console.log(future); //Tue Sep 30 2003 00:00:00 GMT+0530 (India Standard Time)

//getfullyear()
console.log(future.getFullYear()); //2003

//getMonth() this one is 0 based, starts from 0
console.log(future.getMonth()); //8

console.log(future.getDate()); //30

//daystarts from sunday - 0 monday -1 tuesday -2
console.log(future.getDay()); //2

console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());

console.log(future.toISOString()); //2003-09-29T18:30:00.000Z

////////////////////////////
//creating current date and time
const currentDateTime = new Date();
                          //to have ui like 02 instead of 2
const day = `${currentDateTime.getDate()}`.padStart(2, 0);
const month = `${currentDateTime.getMonth() + 1}`.padStart(2, 0);
const year = currentDateTime.getFullYear();
const hours = currentDateTime.getHours();
const minutes = currentDateTime.getMinutes();
console.log(`${day}/${month}/${year},${hours}:${minutes}`);

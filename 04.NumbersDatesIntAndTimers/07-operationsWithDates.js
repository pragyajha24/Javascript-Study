"use strict";

//calculations with dates
//whenever we convert a  date to a number, then the result is going to be timestamp in milliseconds
const future = new Date(2033, 8, 30, 7, 20);
console.log(Number(future)); //2011657800000

//function takes two dates and return number of days passed between these two dates
const calcDaysPassed = function (date1, date2) {
  //converting the calulated date in days by dividing by miiliseconds(1000) seconds(60) minutes(60) hour(24)
  return Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));
};

console.log(calcDaysPassed(new Date(1999, 10, 24), new Date(2024, 10, 24))); //9132

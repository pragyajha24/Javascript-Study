"use strict";

//two kinds of timers
//1.setTimeOut timer - runs just once after a defined time

//2.setInterval timer - keeps running forever , until we stop it

//setTimeOut receiver callback
//////setTimeout - schedules a function to run after a certain amount of time, but the callback function is only executed once.
setTimeout(
  function (ing1, ing2) {
    console.log(`Here is your pizza with ${ing1} and ${ing2}`);
  },
  2000,
  "corn",
  "spinach"
);
//display 3 seconds later you run a code
//it will not affect the other code it will just wait 3 seconds to display this the other will run at normal
//this mechanism is called asynchronous javascript

console.log("Waiting...");

const ingredients = ["brocooli", "chicken"];
const pizzaTimer = setTimeout(
  function (ing1, ing2) {
    console.log(`Here is your pizza with ${ing1} and ${ing2}`);
  },
  3000,
  ...ingredients
);

if (ingredients.includes("brocooli")) clearTimeout(pizzaTimer);
//it won't print the above console becoz it contains brocolli

//////////////////////////////
//setInterval
//this will keep displaying new date and time every 1 second until we stop it
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);

////////////////////////
//my clock with time dand date
setInterval(function () {
  const currenTime = new Date();
  const day = `${currenTime.getDay()}`.padStart(2, 0);
  const month = `${currenTime.getMonth() + 1}`.padStart(2, 0);
  const year = currenTime.getFullYear();
  const hour = `${currenTime.getHours()}`.padStart(2, 0);
  const minutes = `${currenTime.getMinutes()}`.padStar(2, 0);
  const seconds = `${currenTime.getSeconds()}`.padStart(2, 0);
  console.log(`${day}/${month}/${year}, ${hour}:${minutes}:${seconds}`);
}, 1000);

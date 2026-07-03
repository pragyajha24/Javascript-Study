"use strict";

console.log("ARRAY GROUPING");
//allows us to group values in an array based on a condition

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

const groupesMovements = Object.groupBy(movements, function (movements) {
  return movements > 0 ? "deposits" : "withdrawals";
});

console.log(groupesMovements);

//returns an object
//output
// {deposits: Array(5), withdrawals: Array(3)}
// deposits: (5) [200, 450, 3000, 70, 1300]
// withdrawals: (3) [-400, -650, -130]


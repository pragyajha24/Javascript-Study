"use strict";

let rest1 = {
  name: "Capri",
  numGuests: 0,
};

let rest2 = {
  name: "La Piazza",
  owner: "Olivia",
};

//OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 15;

// rest1.numGuests ||= 10; //gives 10 wanted 0 so this operator does not work
// rest2.numGuests ||= 15;

// console.log(rest1);
// console.log(rest2);

//nullish assignment operator (null or undefined) for OR
rest1.numGuests ??= 10;
rest2.numGuests ??= 15;

//AND ssignment operator
// rest1.owner = rest1.owner && "<ANONYMOUS>"; //undefined
// rest2.owner = rest2.owner && "<ANONYMOUS>";

rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";

console.log(rest1);
console.log(rest2);

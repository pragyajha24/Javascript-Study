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

luftansa.book(244, "Haanah Elise");
luftansa.book(637, "Aaron Warner");
console.log(luftansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

//now we want to use the book function on other flights but copying and pasting would be a bad practice so we will store it in variable and use it in other functions
const book = luftansa.book;

//here it gives undefined why---- here book is not a method but a separate  function.It's a copy of book method.  As above we took the book method and store it in a variable so here it is a regular function call so therefore this keyword inside of book method will point to undefined.
//this keyword depends on how the function is actually called.

///DOES NOT WORK
//book(12,'Monica'); //undefined

/////////CALL method
//here, we did not call the book function itself instead, we called the call method and it's then this call method, which will call the book function with the this keyword set to eurowings.
//So whatever we pass as the first argument of the call method.So this allows us to manually and explicitly  set the this keyword of any function that we want to call.Then all the arguments after the first one are simply the arguments of the original function.
book.call(eurowings, 12, "Sarah");
console.log(eurowings);

book.call(luftansa,453,'Mary Cooper');
console.log(luftansa);

//////////APPLY method
//apply method does not recieve a list of arguments , after the this keyword, but instead it's gonna take the array of the arguments.

const flightData = [242,"George Cooper"];
book.apply(eurowings,flightData)
console.log(eurowings);

//this apply method is not that used in modern javascript because we can o the same exact thing using call method.

//using spread operator on flightData to take data out of array
book.call(eurowings,...flightData);
console.log(eurowings);

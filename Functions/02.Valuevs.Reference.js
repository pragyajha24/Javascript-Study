"use strict";
// HOW PASSING ARGUMENTS WORK : VALUE vs. REFERENCE


const flight = "LH234";
const passenger1 = {
  name: "Steph wales",
  passport: 23452784782,
};

//check in function passenger is already bought the flight and ready to check in the flight
//passenger object which collect data about the passenger
//we passed flightNum which is a noraml variable as parameter and we passed object as a parameter
function checkIn(flightNum, passenger) {
  //let's say number of flight is changed (not a good practice-- you should not change the parameters of a function)
  flightNum = "LH999";
  passenger.name = "Miss " + passenger.name;

  if (passenger.passport === passenger1.passport) {
    console.log("CheckIn");
  } else {
    console.log("Wrong passport");
  }
}

checkIn(flight, passenger1); //CheckIn
console.log(flight); //LH234

//why miss got added to passenger1 even though we added it to function's argument ????
console.log(passenger1); //{ name: 'Miss Steph wales', passport: 23452784782 }

//when we pass a reference type to a function, what is copied is really just a reference to the object in the memory heap.
//example-const passenger = passenger1 -- exaplanation below
//when we try to copy an object like this, we are really only copying the reference to that object in the memory heap,but they both point to the same object in memory.

////////////more explanation
//In JavaScript, a "reference" refers to the way objects, arrays, and functions are accessed and manipulated. When you work with these types of data, you're dealing with references rather than the actual values.

//When you pass an object(or an array,which is also a reference type) to a function,you are passing a reference
//to that object,not a copy of the object itself.Here's how it works:

//1.Passing by Reference : When you pass an object to a function,what is actually passed is a reference to the original object in memeory.This means that the function operates on the same object,so changes made to the object inside the function will be refected outside the function.

//2.Reference Copy: The function recieves a copy of the reference , but not the actual object.Both the original reference and the copied reference point to the same memory location where the object is stored.

//3.Object Mutability: You can modify the properties of the object within the function, and these modifications will be visible outside the function since both references point to the same object.However,if you reassign the reference itself(e.g. by assigning a new object to the paramter,) this will not affect the original reference outside the function.

//////////////////////////////////////
//Javacript DOES NOT have passing by reference only passing by value , even  though it looks like passing by reference.
//basically we pass a reference to the function but we do not pass by reference.

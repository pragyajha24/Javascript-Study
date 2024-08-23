"use strict";

//in js we need a function to be executed only ONCE

//IIFE - Immediately Invoked Function Expressions

//we simply write function expression itself , so without assigning it to any variable
//we wrap all of this into parantheses , we basially transformed the statment we had before into an  expression
(function () {
  console.log("This will never run again");
})(); //we called it here immediately

//it also works for arrow function
(() => console.log('This is an arrow function , which will never run again.'))();


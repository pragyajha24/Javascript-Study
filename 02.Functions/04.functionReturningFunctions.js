"use strict";

//functions returning function  - currying
// Currying is an advanced technique of working with functions. It’s used not only in JavaScript but in other languages as well.
// Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).
// Currying doesn’t call a function. It just transforms it.

function greet(greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
}

// The greet function takes one argument, greeting.
// It returns a new function that takes another argument, name.
// When the returned function is called, it logs a message combining the greeting and the name using template literals.

const greeterHey = greet("Hey");
//Here, greet("Hey") returns a new function that takes a name and logs a message starting with "Hey".
greeterHey("Jonas");
greeterHey("Steven");

greet("Hello")("Lisa");

//Currying is a functional programming technique where a function that takes multiple arguments is transformed into a sequence of functions, each taking a single argument. Instead of taking all arguments at once, each function takes one argument and returns another function until all arguments are provided.

//another example

function curry(f) {
  //curry(f) does the currying transform
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}

// The curry function takes a function f as an argument.
// It returns a new function that takes the first argument a.
// This function, in turn, returns another function that takes the second argument b.
// Finally, the innermost function calls the original function f with both arguments a and b.

//usage
function sum(a, b) {
  return a + b;
}

let curriedSum = curry(sum);

console.log(curriedSum(2)(2));

// The sum function is a simple function that takes two arguments and returns their sum.
// curriedSum is the curried version of the sum function.
// When you call curriedSum(2)(2), it works as follows:
// curriedSum(2) returns a new function that expects the second argument.
// curriedSum(2)(2) then calls the original sum function with arguments 1 and 2, resulting in 3.

function fun1() {
  function fun2() {
    return `From function fun2`;
  }
  return fun2();
}

function fun() {
  console.log(fun1());
}

fun();

//The task to call a function that returns another function with the help of Javascript is called a currying function,a function with numerous arguments that can be converted into series of nesting functions with the help of the currying method.
//Approach:
//1.Define outer function:
//Create an outer function that takes parameters and contains the logic for processing or initializing data.

//2.Return Inner Function:
//Inside the outer function,return another function (inner function).This inner function can access variables and parameters from the outer function due to closure.

//3.Call Outer function:
//Call the outer function to obtain the inner function.Assign the result to a variable if needed.

//4.Invoke Inner function:
//Call the returned inner function separately,either immediately or at a later point in your code.

"use strict";

/////////////////////////////////////
//select , create and delete

///SELECTING elements
//way of selecting the entire document of any webpage
console.log(document.documentElement);

//select the head of document
console.log(document.head);

//selecting the entire body of the document
console.log(document.body);

//select the one element then this will return the first element that matches the selector name
console.log(document.querySelector(".header"));

//selecting multiple elements
const allSelections = document.querySelectorAll(".section");
console.log(allSelections);

//selecting the elements with Id selector
console.log(document.getElementById("section--1"));

//selecting the elements with tag name
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

//selecting the element with className
console.log(document.getElementsByClassName("btn"));

///////////////////////////////
//Creating and inserting elements

//.insertAdjacementHTMl will add whatever we assign to it at a certain point in the element,determined by the position parameter
//we use this when we want to add to existing HTML in an element.
// We use .innerHTML if we want to start from scratch with our own HTML.

//this creates a DOM element and stores it into the message variable
//this element is not anywhere in dom , all this is dom object we can perform actions on
//its just  an object that represents DOM element
const message = document.createElement("div");
//we can add classes in this object
message.classList.add("cookie-message");
// message.textContent =
//   "We use cookied for improved functionality and analytics.";

message.innerHTML =
  "We use cookied for improved functionality and analytics. <button class='btn btn--close-cookie'>Got it! </button>";

//inserting in our dom the cookie element
//prepend add the element as first child of the element you add it to , here i.e. head
document.head.prepend(message);

//this add the element as last child of the element
// document.head.append(message);

///////////////////////////
//DELETE element

document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();
  });

//////////////////////////////
//Styles

message.style.backgroundColor = "#37383d";
message.style.width = "120%";

//to get style of element of created in js
console.log(message.style.backgroundColor);

//to get the style of element in the webpage
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + "px";

//change the style of element in js
document.documentElement.style.setProperty("--color-primary", "orangered");

/////////////////////////////
//Attributes

//using logo for example
//standard attributes
const logo = document.querySelector(".nav__logo");
console.log(logo.alt); //Bankist logo

console.log(logo.src);
console.log(logo.className); //nav__logo

//we can also change the logo alt text in js
logo.alt = "Beautiful minimalist logo";

/////////////////
//classes

logo.classList.add("c");
logo.classList.remove("c");
logo.classList.toggle("c");
logo.classList.contains("c");

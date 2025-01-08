//////////////////////////////////////////////////////
//Lecture 199
//EVENTS and EVENT HANDLERS

const h1 = document.querySelector("h1");

///one way of adding event listener to the element
//mouseenter = when the mouse is moved on the element
h1.addEventListener("mouseenter", function (e) {
  //alert("addEventListener : Great! You are reading the heading.");
});

//another way of adding event listener to the element
//////////old way
// h1.onmouseenter = function (e) {
//   alert("onmouseenter:Great! You are reading the heading.");
// };

//removing event handler if we don't need it anymore
const h4 = document.querySelector("h4");
const alertH4 = function (e) {
  //alert("addEventListener: Great! You are reading the heading desc");
  //after we listened for an event and then handled that event
  //this means we can only listen the event once
  //we can remove at any place in code, can also use setTimeoutn
  //h4.removeEventListener("mouseenter", alertH4);
};

//h4.addEventListener("mouseenter", alertH4);

//setTimeout(() => h4.removeEventListener("mouseenter", alertH4), 3000);

////////////////////////////////////////////////
///////////////////////////////////////////////
//Lecture - 201
//Event Propagation In Practice

// We are gonna attach event handlers to the navigation link and also all of its parent element.
//as we click this link we will give all these elements random background colors,and it will help us to visualise how event bubbling is happening

// first, we will create random color i.e. color between rgb(0,0,0) - rgb(255,255,255)
//creating random number first
const randomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

//now , we can use thar random number to generate random color
const randomColor = function () {
  return `rgb(${randomInt(0, 255)} ,${randomInt(0, 255)},${randomInt(0, 255)})`;
};

console.log(randomColor());

//now attaching handlers

//in event handler 'this keyword' points always to the element on which that event handler is attached.

//to the nav__link i.e. Features  - child element
document.querySelector(".nav__link").addEventListener("click", function (e) {
  console.log("NAV-LINK");
  this.style.backgroundColor = randomColor();
  console.log(e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  //stop propagation
  //e.stopPropagation();
});

//to nav__links - parent element
document.querySelector(".nav__links").addEventListener("click", function (e) {
  console.log("NAV-LINKS");
  this.style.backgroundColor = randomColor();
  console.log(e.target, e.currentTarget);
  console.log(e.currentTarget === this);
});

//to nav - parent's parent element
document.querySelector(".nav").addEventListener("click", function (e) {
  console.log("NAV");
  this.style.backgroundColor = randomColor();
  console.log(e.target, e.currentTarget);
  console.log(e.currentTarget === this);
});

//event actually happens at the document root and from there it then travels down to the target element.
//in this case it  this link and then it bubbles up as this event has happened in all the parent element.
// if we click on nav__links area only then color on nav__link will not change as from nav__links it will only work towards its parent element i.e. nav

//e.target is where the event originated.Not the element where handler is attached but where the event happened , here where the click happened
// when we click on nav-link the target is same in all three elements

//the this keyword and event.currentTarget are gonna be exactly the same in any event handler.

//we can stop the event propagation

//the three events we step us above receive  events from the target elements and also from the bubbling phase.
//So event handler functions are listening for click events, that happen on the element itself and they are also listening for events that keep bubbling up from their child elements.

//events are captured when they come down from the document route all the way to the target but our events are not picking these at the capture phase.

/////////////////////////////////////////////
////////////////////////////////////////////
//Lecture-202
//Event Delegation -
//we are gonna implement smooth scrolling through navigation

//page smooth navigation without event delegation
// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     ///////////it does not give smooth scroll to prevent this we use
//    // e.preventDefault();
//     /////////////now it will not scroll to its parts even if it is attacted by an ID
//     /////////console.log('LINK');

//     ////////////to get the href id writen in that element
//    // const id = this.getAttribute("href");
//     //////////////console.log(id);
//     //document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

//here we are adding here the exact same callback function, once to each of these  three elements,so exact same function is attach to these three elements, which is fine for only three but what if we had 100 or 1000 elements.If we attach event handler to  1000 elements like this , then we would be creating 1000 copies of this same function which is not good.

//so better way to do is to use events delegation.
//In event delegation we use the fact that events bubble up . Putting the event listener on common parent of all the elements that we are interested in.
//like here, it would be nav__links, we would add eventhandler on this element here and when user clicks one of the links,the event is generated and bubbles up.
//and then we can catch that event in common element and handle it there.
//we can look where event originated by looking at event.target property

/////////////////////////////////
//EVENT DELEGATION STEPS
//step-1 => we add the event listener to a common parent element  of all the elements that we're interested in.
//step-2 => determine what element originated the event

document.querySelector(".nav__links").addEventListener("click", function (e) {
  //to know where the event happened we can use
  console.log(e.target);
  e.preventDefault();

  //matching strategy
  if (e.target.classList.contains("nav__link")) {
    //e.preventDefault();
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behaviour: "smooth" });
  }
});
 

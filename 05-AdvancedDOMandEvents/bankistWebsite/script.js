//
"use strict";
////////////////////////////
//Modal Window
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// for (let i = 0; i < btnsOpenModal.length; i++) {
//   btnsOpenModal[i].addEventListener("click", openModal);

/////////////using forEach
btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//}

////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////////////////////
//Lecture - 198
//Implementing Smooth Scrolling

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
  /////////////////////////
  //ONE way of smooth scrolling
  // const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);

  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: "smooth",
  // });

  //////////////////////////
  // SECOND way of smooth scrolling
  section1.scrollIntoView({ behavior: "smooth" });
});

////////////////////////////
//event delegation- using for smooth scrolling
//in detail in events folder and lectire 202

//step-1 => we add the event listener to a common parent element  of all the elements that we're interested in.
//step-2 => determine what element originated the event

document.querySelector(".nav__links").addEventListener("click", function (e) {
  //to know where the event happened we can use
  //console.log(e.target);
  e.preventDefault();

  //matching strategy
  if (e.target.classList.contains("nav__link")) {
    //e.preventDefault();
    const id = e.target.getAttribute("href");
    // console.log(id);
    document.querySelector(id).scrollIntoView({ behaviour: "smooth" });
  }
});

////////////////////////////////////
///////////////////////////////////
//Lecture - 203
// DOM traversing

const h1 = document.querySelector("h1");
/////Going downwards=> selecting child elements

//it would select element with highlight class inside h1 element irrespective how deep they are.
//and only of h1 element if other element have child element with class highlight it would not select them,as they are not the children of h1 element
console.log(h1.querySelectorAll(".highlight"));
//output:-NodeList(2) [span.highlight, span.highlight]

//when we need direct children
console.log(h1.childNodes);
//output:- NodeList(9) [text, comment, text, span.highlight, text, br, text, span.highlight, text]
//nodes can be anything as text, cmnt etc.

// can also use this for direct children
console.log(h1.children);
//output :- HTMLCollection(3) [span.highlight, br, span.highlight]

//for first and last element child
//for first element child
console.log(h1.firstElementChild);
//can also style it
//h1.firstElementChild.style.color = "white";

//for last element child
console.log(h1.lastElementChild);
//h1.lastElementChild.style.color = "pink";

////// Going upwards => selecting parent
//this gives us all children and remember nodes can be anything text,command
console.log(h1.parentNode);
//its parent node is element header title
//this gives us children also but just element
console.log(h1.parentElement);

//parent element which is not a direct parent,or finding a parent element no matter how far it is in dom tree
////so it selected the closest header to our h1 element,so the closest parent element that has this class and then it simply applied all style to that element
//h1.closest(".header").style.background = "var(--color-tertiary-opacity)";

/////closest and querySelector both receive a query string  as an input
// but querySelector , finds children,no matter how deep in the Dom tree,
//  while the closest method finds parents and no matter how far up in the Dom tree.

////Going sideways - selecting siblings
//we can only access direct sibling
//only the previous and next one
console.log(h1.previousElementSibling); //output gets a null as h1 does not have previous sibling
console.log(h1.nextElementSibling); //output  gives h4 element under h1

console.log(h1.previousSibling);
console.log(h1.nextSibling);

//if we need all the siblings
//then we can use trick of moving to parent element and read all the children from there
console.log(h1.parentElement.children);
//output :- HTMLCollection(4) [h1, h4, button.btn--text.btn--scroll-to, img.header__img]

/////little fun with all the children
////converting them in array they are htmk collection now
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = "scale(0.5";
// });

//////////////////////////////////////
/////////////////////////////////////
//Lecture- 204
//building tabbed component under operation section

const tabs = document.querySelectorAll("operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

//so, we have three buttons with class operations__tab, and we want that when we click on them it shows different component.
//  Now, we could add a click event listener on each with forEach but it will make multiple copies of them and that is not good for performance,
// so  there is better way i.e. adding event listener on their parent element i.e with class operations__tab-container using event delegation
tabsContainer.addEventListener("click", function (e) {
  //matching strategy - figuring out which button is clicked

  //now under there is a span element so when click it looks like we clicked on whole button but in console it will show different event target for number inside span and the word outside
  //so we need to find button element whever we click on the span element
  //we want the btn no matter we click on span or the button itself
  const clicked = e.target.closest(".operations__tab");
  console.log(clicked);

  //guard clause -> an if statement which will return early if some condition is matched.
  if (!clicked) return;

  //remove active classes for both tab and tab content
  //removing the active tab class from all the elements
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));

  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));
  //adding operations__tab--active class name in all the clicked operations button
  clicked.classList.add("operations__tab--active");

  //activating the content area
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

/////////////////////////////////
////////////////////////////////
//Lecture - 205 Passing Arguments to Event Handlers
//in this lecture we will learn and do ->
//create a nice effect on our page navigation where all the links fade out when we hover over one of them, except for the link that we actually hovered over.

//menu fade animation
// will do event delegation -> applying event handler to the parent element i.e. nav and the element is nav__link
const nav = document.querySelector(".nav");

//all of this works becoz event bubble up from the target

//////////////////////////first version

// nav.addEventListener("mouseover", function (e) {
//   if (e.target.classList.contains("nav__link")) {
//     //creating a variable that contains the element we are working with
//     const link = e.target;
//     console.log(link);
//     const siblings = link.closest(".nav").querySelectorAll(".nav__link");
//     const logo = link.closest(".nav").querySelector("img");

//     siblings.forEach((el) => {
//       if (el !== link) el.style.opacity = 0.5;
//     });
//     logo.style.opacity = 0.5;
//   }
// });

// nav.addEventListener("mouseout", function (e) {
//   if (e.target.classList.contains("nav__link")) {
//     //creating a variable that contains the element we are working with
//     const link = e.target;
//     console.log(link);
//     const siblings = link.closest(".nav").querySelectorAll(".nav__link");
//     const logo = link.closest(".nav").querySelector("img");

//     siblings.forEach((el) => {
//       if (el !== link) el.style.opacity = 1;
//     });
//     logo.style.opacity = 1;
//   }
// });

////////////////////////second version
//refracting the above code
const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    //creating a variable that contains the element we are working with
    const link = e.target;
    console.log(link);
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// nav.addEventListener("mouseover", function (e) {
//   handleHover(e, 0.5);
// });

// nav.addEventListener("mouseout", function (e) {
//   handleHover(e, 1);
// });

//////////////////////third version
//using bind method -> bind method creates a copy of the function that it's called on
//and it will set the this keyword in this function call to whatever value that we pass into bind.

//passing an "argument" into handler
nav.addEventListener("mouseover", handleHover.bind(0.5));

nav.addEventListener("mouseout", handleHover.bind(1));

/////////////////////////////
////////////////////////////
//Lecture -206 & 207
//implementing a sticky navigation: the Scroll event

//Using Intersection Observer API

//1. start by creating a  new intersection observer
//2. and then we pass a callback function and object of options in it.

// storing it in a variable
//we use this observer to basically observe a certain target.

//3.
///////and a callback fucntion
// const obsCallBack = function (entries,observer) {
// entries.forEach(entry => {
//   console.log(entry);
// })
// };

//2.
////////these are the observer options
// const obsOptions = {
//   root: null,
//   threshold: [0,0.2],
// };

//now we will pass the above callback function and options of object
////1.
// const observer = new IntersectionObserver(obsCallBack, obsOptions);
// observer.observe(section1);

//implementing sticky navigation using intersection observer api
const header = document.querySelector(".header");

//calculating height dynamically [so it works in every screen size]
const navHeight = nav.getBoundingClientRect().height;
///console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  //console.log(entry);

  //if entry i.e. threshold is not intersecting then we are ading the sticky header
  //when the target is not intersecting the root
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootmargin: `-${navHeight}px`,
});

headerObserver.observe(header);

///////////////////////////////////
//////////////////////////////////
//Lecture -> 208
//Revealing Elements on Scroll

//we added section--hidden class to every section to make it invisible and will reveal it on scroll
//reveal sections

//will use intersection observer api

//we want to observe all four sections  and we can observe them using the same observer.
//selecting all the sections and observe these as multiple targets,all using sectionObserver we created.
const allSections = document.querySelectorAll(".section");

//callback
const revealSection = function (entries, observer) {
  //logic
  //becoz we have only one threshold so we will get entries through destructing
  const [entry] = entries;
  //console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");

  //unobserve
  observer.unobserve(entry.target);
};

//intersection observer api
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

//looping over the node list of sections and using our observer to observe
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  //adding section--hidden class to every section

  section.classList.add("section--hidden");
});

//////////////////////////////
//////////////////////////////
//Lecture -> 210
//Lazy Loading Images

//we wrote the low resolution image i.e. the blur image in 'src' and the image we want on scrolling in the 'data-src'

//selecting images
const imgTargets = document.querySelectorAll("img[data-src]");
//console.log(imgTargets);

const loadImg = function (entries, observer) {
  const [entry] = entries;
  //console.log(entry);

  if (!entry.isIntersecting) return;

  //replace src with data-src
  entry.target.src = entry.target.dataset.src;

  //we are removing the blur filter only when image is completley loaded
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootmargin: "200px",
});

imgTargets.forEach((img) => imgObserver.observe(img));

////////////////////////////////
////////////////////////////////
//Lecture 211
//Building a Slider Component Part 1

const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

let currSlide = 0;
const maxSlide = slides.length;

//putting all the slides side by side
//earlier it was on top of each other
//slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

goToSlide(0);

// to got to the next slide
const nextSlide = function () {
  if (currSlide === maxSlide - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }

  goToSlide(currSlide);
  activateDot(currSlide);
};

const prevSlide = function () {
  if (currSlide === 0) {
    currSlide = maxSlide - 1;
  } else {
    currSlide--;
  }

  goToSlide(currSlide);
  activateDot(currSlide);
};

//currSlide = 1: -100% , 0%,100%,200%
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

//lecture 212
//Building a Slider Component Part 2
//for dots and keyboard movement

//using keyboard to move the slide
document.addEventListener("keydown", function (e) {
  //console.log(e);
  if (e.key === "ArrowLeft") prevSlide();
  e.key === "ArrowRight" && nextSlide();
});

const dotContainer = document.querySelector(".dots");

const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

createDots();

const activateDot = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};

activateDot(0);

dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    //console.log('DOT');
    currSlide = Number(e.target.dataset.slide);
    goToSlide(currSlide);
    activateDot(currSlide);
  }
});

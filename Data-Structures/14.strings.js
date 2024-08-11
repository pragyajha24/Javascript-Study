"use strict";

//created a variable,stored a string
const airline = "Air Sweden";
let plane = "A202";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
//another way
console.log("A202"[3]);

//length of a string
console.log(airline.length); //10
console.log("A202".length); //4

//getting the position of ceratin letter in the string
//strings are 0 based i.e. it start with 0 like arrays
console.log(airline.indexOf("e")); //6
//but this only gives us the first occurence but sometimes we may want the last one
console.log(airline.lastIndexOf("e")); //8
//also index of entire word - and this is case sensitive
console.log(airline.indexOf("Sweden")); //4

console.log("-----------------SLICE METHOD---------------------");

//we can extract extact part of string using slice method
///here 4 is the begin parameter .So basically it's the position at which the extarction will start.
console.log(airline.slice(4)); //Sweden :- and this string which we got here is called substring because it's just a part of the original string.This does not change the underlying string.
//It's actually impossible to mutate strings.They are primitives.
//So we want to use this string , we would have to store it first into some variable or some data structure.
//So this method ALWAYS RETURN NEW STRING.

//we can also specify an end parameter.
//but the end value is not included in the string.
//LENGTH of the extracted string will be end minus beginning, like 4-7 = 3 ,Swe is 3 letter string
console.log(airline.slice(4, 7)); //Swe

//trying to extract the first word but without knowing any indexes
//not hard coding the values
//to get the first word- start from 0 and the end index of first word could be found by finding index of space
console.log(airline.slice(0, airline.indexOf(" "))); //Air

//in this space is also included before the word so we will add +1
console.log(airline.slice(airline.lastIndexOf(" ") + 1)); //Sweden

//defining negative begin parameter
//it will start extracting from the end
console.log(airline.slice(-2)); //en

//we can define negative end parameter also
console.log(airline.slice(1, -1)); //ir Swede

//function to check who got middle seat in airplane
const CheckMiddleSeat = function (seat) {
  //condition- B and E are middle seats =>seat name are like 11B,2C,33E
  //imagine seats like 11A 11B 11C      11D 11E 11F

  //getting the last seat letter
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle seat");
  else console.log("You got lucky");
};

CheckMiddleSeat("11B");
CheckMiddleSeat("2C");
CheckMiddleSeat("33E");

//why string has methods , objects has methods, primitives dont have methods,then how all this work?
//// Whenever we call a method on a string,  javascript will automatically convert that string primitive to string object with the same content.Then on that object the methods are called, and this process is called boxing because it basically takes our string and puts it into a box which is the object.

//so js calls this method and convert it in object and when operation is done they are returned back to string
console.log(new String("steph")); //which looks like object in browser console

console.log("--------------- String methods -----------------");
console.log(airline.toLowerCase()); //air sweden
console.log(airline.toUpperCase()); //AIR SWEDEN

//////////REAL LIFE EXAMPLE USING STRINGS
//fixing capitalization in name
//we want first letter to be capital and rest all small
const passenger = "sTepH";
//first we will convert all letters in lowercase
const passengerLower = passenger.toLowerCase();
//console.log(passengerLower);//steph
////now we will take the first letter convert it into uppercase then add rest.
//we take the first letter by using the index zero
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); //Steph

//function to fixing capitalization in name
function passengerCorrectName(passengerName) {
  const passengerNameLower = passengerName.toLowerCase();
  const correctName =
    passengerNameLower[0].toUpperCase() + passengerNameLower.slice(1);
  return correctName;
}

console.log(passengerCorrectName("anEsia"));

//comparing user  email
const email = "hello@steph.io";
const loginEmail = "Hello@Steph.io \n";

//first we convert it into lowercase
const lowerEmail = loginEmail.toLowerCase();
//then we remove the white space
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail); //hello@steph.io

//shortcut method
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail); //hello@steph.io

////////////replacing
const priceGB = "294,45€";
const priceSW = priceGB.replace("€", "kr");
console.log(priceSW); //294,45kr

//we can replace entire word then one character - using replaceAll to replace word in all places in the statement.
const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";
console.log(announcement.replaceAll("door", "gate"));

//////////Booleans methods for string
plane = "Airbus 404";
console.log(plane.includes("A202")); //true
console.log(plane.includes("B303")); //false

console.log(plane.startsWith("Air")); //true

if (plane.startsWith("Airbus") && plane.endsWith("4")) {
  console.log("Part of the New Airbus family");
}

//check baggage
function checkBaggage(items) {
  //we convert everything to lowercase so which ever case person has written should be checked
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board.");
  } else {
    console.log("Welcome aboard.");
  }
}

checkBaggage("I have a laptop,some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a Gun for protection");

///////////////////////////////////////////////
// Working With Strings - Part 3

////SPLIT and JOIN
//split methods allows us to split the string into multiple parts based on the divider string
console.log("a+very+nice+day".split("+")); //[ 'a', 'very', 'nice', 'day' ]
console.log("Steph Wales".split(" ")); //[ 'Steph', 'Wales' ]

const [firstName, lastName] = "Steph Wales".split(" ");
const newName = ["Miss", firstName, lastName.toUpperCase()].join(" ");
console.log(newName); //Miss Steph WALES

//capitalizing name function -only capitalize the first character of each word in each name
const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));

    //another way for doing what we did above
    //namesUpper.push(n.replace(n[0],n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("lee min hoo"); //Lee Min Hoo

/////Padding
const message = "Go to gate 26!";
//20 means here length of string will be 20 depending on the text the padding will be adding
console.log(message.padStart(20, "*")); //******Go to gate 26!

console.log("Steph".padStart(20, "*")); //***************Steph

//in this length of string is 20 so after 20 how much space is legt it will the padend till it get 30
console.log(message.padStart(20, "%").padEnd(30, "%")); //%%%%%%Go to gate 26!%%%%%%%%%%

//real world example of padding in string
const maskCreditCard = function (number) {
  //converted number to string- it works because when one of the operand of the plus sign is a string it will convert all the operands to a string.
  const str = number + "";
  //we basically need to take out last four numbers and then use padStart to create a string with the same length as the inital number here but with some kind of symbol
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(47389330)); //****9330
console.log(maskCreditCard(699282772783992)); //***********3992

////Repeat
const message2 = "Bad weather... Al Departures Delayed...  ";
console.log(message2.repeat(4));

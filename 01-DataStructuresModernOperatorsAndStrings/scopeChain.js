//////////////understanding scope

// function calcAge(birthYear) {
//   const age = 2024 - birthYear;
//   //console.log(firstName);

//   function printAge() {
//     const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       //  var millenial = true;
//       const str = `Oh, and you are a millenial , ${firstName}`;
//       console.log(str);
//     } else  {
//       //var GenZ = true;
//       console.log(`You are a Gen Z, ${firstName}`);
//     }

// console.log(millenial);
// console.log(GenZ);

//   }

//   printAge();

//   return age;
// }

// const firstName = "Pragya"; //global variable
// console.log(calcAge(1999)); //it looked up and found firstname

/////////////////hoisting

///hoisitng with varibales
console.log(me); //undefined
//console.log(job); //cannot access job before initialization
//console.log(birthyear); // same error as job variable

var me = "Pragya";
let job = "engineer";
const birthyear = 1999;

///////hoisting with functions

console.log(addDecl(2, 2));
//console.log(addExp(3, 3));//error
//console.log(addArrow(4, 4));//error

///funcation declaration
function addDecl(a, b) {
  return a + b;
}

///function expression
const addExp = function (a, b) {
  return a + b;
};

///arrow function
const addArrow = (a, b) => a + b;

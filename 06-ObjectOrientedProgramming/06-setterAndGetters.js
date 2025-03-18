"use strict";

////////Lecture - 225
////////Setters and Getters

//Every object in js can have setters and getters properties.
//And these special properties are called assessor properties, while the normal properties are called data properties.

//Getters and setters are functions that get and set a value .

//object literal
const account = {
  owner: "Jenny",
  movements: [200, 300, 340, 500],

  //to add a getter
  //we write the word get before the method
  //method to get the last movement
  get latestMovements() {
    return this.movements.slice(-1).pop(); //500
  },

  //setter method
  //write before the method name
  //any setter method needs to have exactly one parameter
  //method to add new movement

  //it is not necessary to specify a setter when we have a getter for the same property
  set latestMovements(mov) {
    this.movements.push(mov);
  },
};

//to call the getter method we use it as a property i.e. without function brackets
console.log(account.latestMovements);

//using the setter
//we don't call it as a function but as a property
account.latestMovements = 444;
console.log(account.movements);

//getter and setter can be very useful for data validation.
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  get age() {
    return 2044 - this.birthYear;
  }

  /////Setting a property that already exist
  //setter method to check if it is a full name
  //here we are creating a setter for property name that already exist
  //fullName is already a property above code but as it is a name above it will give us the error as both are trying to set the same property
  //so we will add an a convention -  a different variable name to avoid the naming conflict
  //but doing this we are creating a new variable - _fullName ,  and fullName would be undefined
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  //creating a getter for fullName property
  get fullName() {
    return this.fullName;
  }
}

const monica = new PersonCl("Monica Quan", 1998);
console.log(monica);
console.log(monica.age);

/////////////////////////////////////////////
///ANOTHER EXAMPLE

class Programming {
  constructor() {
    console.log("Programming class is called");
  }

  //getter method
  get getLanguage() {
    return this.language;
  }

  //setter
  set setLanguage(x) {
    this.language = x;
  }
}

let p1 = new Programming();
console.log(p1.getLanguage); //undefined

//this will set the value of language to 'javascript'
p1.setLanguage = "Javascript";

console.log(p1.getLanguage); //Javascrpt

// Explanation of the Example
// In the above example, the get language() method is the getter method which returns the language attribute of the javascript class, and the
//  set language() method is the setter method which takes a parameter and assigns that to the language attribute of the javascript class.

// Upon creating the p1 object, since we have not assigned any value to the language attribute, so the getter p1.getLanguage will output undefined.
//  Now, we will use the setter p1.setLanguage to set the value of language attribute to Javascript. Now, upon calling the getter p1.getLanguage,
//  it will output Javascript.

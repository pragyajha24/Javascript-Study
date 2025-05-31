"use strict";

//Map is a data structure which we can use to map values to keys.
//Data is strored in key value pairs in maps like Objects.

//in maps keys can be of any data type(objects,arrays or other map).

//creating a map
const restaurantMap = new Map();
//adding entries in map using key value pair
restaurantMap.set("name", "Classico Italiano");
restaurantMap.set(1, "Firenzo,Italy");
restaurantMap.set(2, "Lisbon ,Portugal");

console.log(restaurantMap);
//output
//   Map(3) {
//   'name' => 'Classico Italiano',
//   1 => 'Firenzo,Italy',
//   2 => 'Lisbon ,Portugal'
// }

//chaining the set method
restaurantMap
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23);
console.log(restaurantMap);
// output-
// Map(6) {
//   'name' => 'Classico Italiano',
//   1 => 'Firenzo,Italy',
//   2 => 'Lisbon ,Portugal',
//   'categories' => [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ],
//   'open' => 11,
//   'close' => 23
// }

restaurantMap.set(true, "We are open").set(false, "We are closed");
//getting values out of maps
console.log(restaurantMap.get("name")); //Classico Italiano
console.log(restaurantMap.get(true)); //We are open

console.log(restaurantMap);
// output-
// Map(8) {
//   'name' => 'Classico Italiano',
//   1 => 'Firenzo,Italy',
//   2 => 'Lisbon ,Portugal',
//   'categories' => [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ],
//   'open' => 11,
//   'close' => 23,
//   true => 'We are open',
//   false => 'We are closed'
// }

//checking if map contin certain key
console.log(restaurantMap.has("categories")); //true

//deleting entrie from map but it depends on it key
restaurantMap.delete(2);
console.log(restaurantMap);
// output-
// Map(7) {
//   'name' => 'Classico Italiano',
//   1 => 'Firenzo,Italy',
//   'categories' => [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ],
//   'open' => 11,
//   'close' => 23,
//   true => 'We are open',
//   false => 'We are closed'
// }

//to know the size of map
console.log(restaurantMap.size); //7

//to clear the whole map
//restaurantMap.clear();
//console.log(restaurantMap); //Map(0) {}

//using arrays or objects as map keys
restaurantMap.set([1, 2], "Test");
console.log(restaurantMap);
//output--
// Map(8) {
//   'name' => 'Classico Italiano',
//   1 => 'Firenzo,Italy',
//   'categories' => [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ],
//   'open' => 11,
//   'close' => 23,
//   true => 'We are open',
//   false => 'We are closed',
//   [ 1, 2 ] => 'Test'
// }

// --------------------ITERATION-----------------------
//another way of populating a map without using set method

//creating a quiz sort of
const question = new Map([
  ["question", "What is the best programming languae in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try again!"],
]);

console.log(question);

//a way to convert OBJECT to MAP

//creating an object
const student1 = {
  name: "Aria",
  age: 24,
  country: "Sweden",
  studying: "business",
};

//converting object into map
const person = new Map(Object.entries(student1));
console.log(person);


//quiz map
console.log(question.get('question'));
//iteration on maps

for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Annswer ${key}: ${value}`);
}

const answer = 3;
console.log(question.get(question.get('correct') === answer));

//converting map to array
console.log(...question);

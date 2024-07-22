"use strict";

//js two new  built in data structure introduced in es6, sets and maps.
//set is collection of unique values.
//sets can never have duplicates.
//set can hold mixed data types.

//most common iterable is array

//creating a set
const orderSet = new Set([
  "Pizza",
  "Maggie",
  "Pizza",
  "Chips",
  "Toast",
  "Chips",
]);
//this set has duplicate but when will print it all duplicates are gone.
console.log(orderSet); //Set(4) { 'Pizza', 'Maggie', 'Chips', 'Toast' }

//sets are iterable.
//order of element in sets is irrelevant.
//String is also an iterbale.

console.log(new Set("Steph")); //Set(5) { 'S', 't', 'e', 'p', 'h' }

//Set could also be empty.

//Getting size of set
console.log(orderSet.size); //4

//Checking if certain element is in set or not
console.log(orderSet.has("Chips")); //true
console.log(orderSet.has("Rolls")); //false

//Adding new element to a set
orderSet.add("Garlic Bread");
orderSet.add("Garlic Bread");
//Garlic Bread got added but only once as no repeat allowed.
console.log(orderSet); //Set(5) { 'Pizza', 'Maggie', 'Chips', 'Toast', 'Garlic Bread' }

//Deleting an element from set
orderSet.delete("Toast");
console.log(orderSet); //Set(4) { 'Pizza', 'Maggie', 'Chips', 'Garlic Bread' }

//Reteriving values from set - there is not need of getting values from set only we need to see if set has that values or not.
//means if can get values from set but not through index.
//If your goal is to store the value and reterive it then the best use case is to just use array.

//delete all elements from set
//orderSet.clear();

//But as sets are iterables means we can loop over them.
for (const order of orderSet) {
  console.log(order); //Pizza Maggie Chips Garlic Bread
}

//In normal code base the main use case of sets is actually to remove duplicate values of arrays.
//Example

//creating a staff ARRAY
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef"];
//So to remove duplicates from array we converted it to sets. But now we want the answer in form of array.
let staffUnique = new Set(staff);
console.log(staffUnique); // Set(3) { 'Waiter', 'Chef', 'Manager' } --- output in form of set

//Conversion from Set to array using spread operator
staffUnique = [...new Set(staff)];
console.log(staffUnique); //[ 'Waiter', 'Chef', 'Manager' ] --- returns an ARRAY

console.log(staffUnique.length); // 3 --- it's an array now so we used lenth property instead of size 

//set are not intened to replace array.
//always when you have to manipulate data use array as array has lot of array methods.


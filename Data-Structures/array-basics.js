// Arrays is a single variable that is use to store elements of different data types.
// JavaScript Arrays are zero-indexed.
// An array allows use to store several values with the same name and access by using their index number.

//Declaring an array'
let arr = ["apple", "orange"];
console.log(arr[0]);

//object in array
let person = {
  name: "Pragya",
  age: 23,
};

arr = ["apple", "orange", person];
console.log(arr[2]);

// Add and Remove Elements
//Push and Pop are the methods that are use for adding and deleting elements from the end of the array.
arr.push("lichi"); //end add
console.log(arr);

arr.pop(); //end delete
arr.pop();
console.log(arr);

// Unshift and Shift are methods that are use for adding and deleting elements from top of the array.
arr.unshift("lichi"); //top add
console.log(arr);

arr.shift(); //top delete
console.log(arr);

arr.push(person);
arr.push("lichi");
arr.push(24);
console.log(arr);

///////////////////////Looping an Array
// for(let i = arr.length ; i > 0;i--){  //reverse elements display  of an array
//     console.log(arr[i]);
// }

//for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//while loop
let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

//////////////////////////Inbuilt Loop Methods
let numbers = [1, 2, 3, 4, 5];

//findIndex() method - this method is used to return the first index of the element in a given array that satisfies the provided testing function(passed in by user while calling).Otherwise, if no data is found then the value of -1 is returned.
//Syntax: array.findIndex(function(currentValue,index,arr),thisValue)
let index = arr.findIndex((item) => item === 2);
console.log("findIndex");
console.log(index); //-1

function isOdd(element, index, array) {
  return element % 2 == 1;
}
console.log([4, 6, 8, 5].findIndex(isOdd)); //3

//map() array method
//The map() method calls a callback function (i.e. anoynoyms function) on every element of an array and returns a new array that contains the result.
// it iterates on an array
let newNums = numbers.map((item, index, array) => {
  console.log(item, index, array);
  return item + 5;
});

console.log(newNums);

//filter() array method
//JS array filter() methods is used to create a new array from a agiven array consisting of only those elements from the given array which satisfy a condition set by the argument method.
newNums = numbers.filter((item, index, array) => {
  return item > 3;
});

console.log(newNums);

console.log("Vote age function");
function canVote(age) {
  return age >= 18;
}

function vote() {
  let age = [24, 33, 16, 78].filter(canVote);
  console.log(age);
}
vote();

//reduce() method executes a reducer function on each element of the array and returns a single output value.
const message = ["JavaScript", "is", "fun"];

//function to join each string elements
function joinStrings(accumulator, currentValue) {
  //console.log(currentValue);
  return accumulator + currentValue;
}

//reduce join each element of the string
let joinedString = message.reduce(joinStrings);
console.log(joinedString);

//some() method checks wehether at least one of the elements of the array satisfies the condition checked by the argument method.
//Return value: This method returns true even if one of the elements of the array satisfies the condition(and does not check the remaining values) implemented by the argument method.If no element of the array satisfies the condition then it returns false.
const res = numbers.some((item, index, array) => {
  return item > 3;
});

console.log(res);

//every() method considers all the elements of an array and then further checks whether all the elements of the array satisfy the given condition(passed by in user) or not that is provided by a mthod passed to it as the argument.
//Return value: This method returns a Boolean value true if all the elements of the array follow the condition implemented by the argument method.If any one of the elements of the array does not satisfy the argument mthod,then this method returns false.
const res1 = numbers.every((item, index, array) => {
  return item > 10;
});

console.log(res1);

//find() method is used to get he value of the first element in the array that atisfies the provided condition.It checks all the elements of the array and whichever the first element satisifies the condition is going to print.This function will not work function having the empty array elements and also does not change te original array.
//Return value: It returns the array element value if any of the elements is the array satisfy the consition,otherwise it retusn undefined.
let res2 = numbers.find(function (element) {
  return element > 2;
});

console.log(res2);

//////////////////////// Spread and Rest Operators

//Spread operator: The spread operator helps us expand an iterable such as an array where multiple arguments are needed,it also helps to expand the object expression.In case where we require all the elements of an iterable or object to help us achieve a task,we use a spread operator.
//Syntax: var var_name = [...iterable];
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6, 7];

const finalNums = [...nums1, ...nums2]; //spread operator
console.log(finalNums);

//Rest operator: The rest parameter is converse to the spread operator.While the spread operator expands elements of an iterable , the rest operator compresses them.It collects several elements. In functions when we require to pass arguments but were not sure how many we have to pass, the rest parameter makes it easier.
//Syntax: function function_name(...arguments){
// statements;
// }
function sum(...numbers) {
  //rest operator
  return numbers;
}

console.log(sum(nums1, nums2, 5, "hello"));

/////////////////////////// More Array Methods

//concat() 
// joins two or more array in  a new array without modifying the exisiting array.
const newArr = nums1.concat(nums2, arr);
console.log(newArr);

//Slice()
console.log(arr);
let newArr1 = arr.slice(0, 2);
newArr1 = arr.slice(-1);
newArr1 = arr.slice(-2);
console.log(newArr1);

//Splice() 
// is use to modify the contents of an array by removing the exisiting elements and/or by adding new elements.
//Syntax - array.splice(index,remove_count,item_list)
//  remove-count - number of elements to be removed from the starting index.
// items_list - list of new items separated by a comma operator that is to be inserted from the starting index.
let languages = ["C++", "Java", "Html", "Python", "C"];
console.log(languages);

//Add Juli and Php after removing Html
let removed = languages.splice(2, 1, "Julia", "Php");

console.log(languages);
console.log(removed);

//No removing only insertion from 2nd index from the ending
languages.splice(-2, 0, "Pascal");
console.log(languages);

//fill() 
//this method is use to fill the array with a given static value.The value can be used to fill the entire array or it can be used to fill a part of tha array.
//Syntax: arr.fill(value,start,end)
//value - it defines the static value with which the array elements are to be replaced.
let fillarray = [1, 23, 46, 58];

fillarray.fill(87, 1, 3);
console.log(fillarray);

//flat() method
//It is used to flatten an array,to reduce the nesting of an array.
//Syntax : arr.flat([depth])
//depth - It specifies,how deep the nested array should ne flattened.The depth value is 1 if no depth value is passed .
let flataaray = [[1,2],[3,4],[['5','6']]]
const flatNumbers = flataaray.flat(1);
console.log(flatNumbers);

//reverse
nums1.reverse();
console.log(nums1);

//sort()
///alphabetically sort
const fruits = ['banana','orange','apple','mango'];
console.log(fruits.sort());

//numeric sort
const points = [ 40,100,1,25,10]
points.sort(function(a,b) {return a-b});  //ascending order
console.log(points);

points.sort(function(a,b) {return b-a}) //descending order
console.log(points);

////////////////////////Questions
///Ques 1 - Second Largest Number
// Given an array Arr of size N,print second largest distinct element from an array.
//Input: [12,35,1,10,34,1] ---->>>> Output: 34
//Input: [10,5,10]  ------->>> Output: 5

let array = [12, 1, 10, 35, 34, 1];
//let array = [10, 5, 10];

//////APPROACH-1 using sorting array in ascending order and return second element which is not equal to largest element from the sorted array
function secondLargestArray(array) {
  if (array.length < 1) console.log("Array is not valid");


  array.sort(function (a, b) {
    return a - b;
  });

  for (let i = array.length - 2; i >= 0; i--) {
    if (array[i] != array[array.length - 1]) {
      console.log("The second largest element of given array is :" + array[i]);
      return;
    }
  }

  console.log("There is no second largest element");
}

secondLargestArray(array);

//////APPROACH-2 using set approach to remove duplicates
let s = new Set(array);
array = []

//console.log(s);
for(let val of s){
  array.push(val)
}

console.log(array);

array.sort();
s.clear();

console.log('The second largest element in given array is : ' + array[array.length-2]);



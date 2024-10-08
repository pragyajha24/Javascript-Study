"use strict";

//numbers are represented in 64 bits, means there are 64 1s and 0s to represent any given number.
//only 53 are used for digits rest are for decimal points and signs

//how big numbers can be
//this is bigest number javascript can represent
// -1 because number start from 0 and 2 multiply because we are working with base 2 which are only 0s and 1s
console.log(2 ** 53 - 1); //9007199254740991
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
//that number is even stored in js and any number that is larger than this ,is not safe and that means it can not be represented accurately.

//for using number larger than this and for storing that number
//BigInt stands for big integer and it can be use to store as large number as we want

//now , if we want to print a number like this in js then it won't print
console.log(748939283748929220200202202020284747188117263737);
//output - 7.489392837489292e+47

//but if we write n at end of it then it will be a big int
console.log(748939283748929220200202202020284747188117263737n);
//this n basically transfers a regular number into a bigInt number
//output: 748939283748929220200202202020284747188117263737n

//we can also use bigint function
console.log(BigInt(748939283748929220200202202020284747188117263737));
//748939283748929249770442462108164048516015980544n

//operations
//all usual operators still work the same
console.log(1000000n + 1000000n); //2000000n

const huge = 27276553899292n;
const num = 21;
//  console.log(huge * num); //TypeError: Cannot mix BigInt and other types, use explicit conversions
//so here we first convert num in big Int for that we will use big int funtion
console.log(huge * BigInt(num)); //572807631885132n

//bigint does work with > operator and + operator
console.log(20n > 15); //true
//but when we use tripe operator === does not do type coercion
//these number has different primitive type
console.log(20n === 20); //false
 
//math operations are not gonna work with bigInt

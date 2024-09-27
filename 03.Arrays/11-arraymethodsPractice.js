"use strict";

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

//////////////////////////////
/////////////////////////////
// Array methods Practice

//1. calculate all the deposit in all accounts
//getting all movements from all acounts and  in one single array , then will filter the deposit (positive value),and reduce it sum it
const bankDepositSum = accounts
  .map(function (acc) {
    return acc.movements;
  })
  .flat()
  .filter(function (mov) {
    return mov > 0;
  })
  .reduce(function (sum, mov) {
    return sum + mov;
  }, 0);

console.log(bankDepositSum); //25180

//2.count how many deposit there has been in the bank with atleast 1000 euro
const numDeposits1000 = accounts
  .map(function (acc) {
    return acc.movements;
  })
  .flat()
  .filter(function (mov) {
    return mov >= 1000;
  }).length;

console.log(numDeposits1000); //6

let a = 10;
console.log(a++); //10
console.log(a); //11
console.log(++a); //12
console.log(a++); //12
console.log(a); //13

//3.create a new object instead of just a number or just a string
//create an object which contain sum of deposits and of the withdrawals

const { deposits, withdrawals } = accounts
  // const sum = accounts
  .map(function (acc) {
    return acc.movements;
  })
  .flat()
  .reduce(
    function (sums, curr) {
      //   curr > 0 ? (sums.deposits += curr) : (sums.withdrawals += curr);
      //////removing the repetitive code
      sums[curr > 0 ? "deposits" : "withdrawals"] += curr;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals); //25180 -7340
//console.log(sum); //{ deposits: 25180, withdrawals: -7340 }

//4. create a simple function to convert any string to a title case.
//title case means all letters in words capitalize except some of them
//example - This Is a Nice Title

const convertTitleCase = function (title) {
  const exceptions = ["a", "an", "the", "but", "or", "on", "in", "with"];

  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return exceptions.includes(word)
        ? word
        : word[0].toUpperCase() + word.slice(1);
    }).join(' ');
  return titleCase;
};

console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG titLE"));
console.log(convertTitleCase("and here is another title with an Example"));

// This Is a Nice Title
// This Is a Long Title
// And Here Is Another Title with an Example

'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//display movements in UI
const displayMovements = function (movements, sort = false) {
  //empty the entire container only then we start adding new element
  containerMovements.innerHTML = '';

  //sorting movements - in ascending order
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, index) {
    //to know if a deposit or withdrawal
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    //DOM manipulation
    const html = ` 
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
          <div class="movements__value">${mov}</div>
        </div> `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// displayMovements(account1.movements);

////using reduce to get balance
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce(function (acc, mov) {
    return acc + mov;
  }, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

// calcDisplayBalance(account1.movements);

////////////////////////////////////////
//calculating incoming money,outgoing money and interest

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(function (mov) {
      return mov > 0;
    })
    .reduce(function (acc, mov) {
      return acc + mov;
    }, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(function (mov) {
      return mov < 0;
    })
    .reduce(function (acc, mov) {
      return acc + mov;
    }, 0);

  labelSumOut.textContent = `${out}€`;

  const interest = acc.movements
    .filter(function (mov) {
      return mov > 0;
    })
    .map(function (deposit) {
      return (deposit * acc.interestRate) / 100;
    })
    .filter(function (inte, i, arr) {
      return inte >= 1;
    })
    .reduce(function (acc, inte) {
      return acc + inte;
    }, 0);

  labelSumInterest.textContent = `${interest}€`;
};

// calcDisplaySummary(account1.movements);

//////////////////////////////////////////////////////
//creating username for all user
//creating a generic function for all username
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(function (name) {
        return name[0];
      })
      .join('');
  });
};

createUsernames(accounts);
console.log(accounts);

/////////////////////////////////
///function which update UI  text upon different operation
const updateUI = function (acc) {
  //display movements
  displayMovements(acc.movements);

  //display balance
  calcDisplayBalance(acc);

  //display summary
  calcDisplaySummary(acc);
};

//EVENT HANDLER
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  //prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(function (acc) {
    return acc.username === inputLoginUsername.value;
  });
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    ///display UI and welcome message with first name of user
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;

    //clear the input field of username and pin
    inputLoginUsername.value = inputLoginPin.value = ' ';
    inputLoginPin.blur();
    //display movements
    // displayMovements(currentAccount.movements);

    // //display balance
    // calcDisplayBalance(currentAccount);

    // //display summary
    // calcDisplaySummary(currentAccount);

    updateUI(currentAccount);
  }
});

////////////////////////////////////
///////Transfer money operation
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(function (acc) {
    return acc.username === inputTransferTo.value;
  });

  console.log(amount, receiverAcc);

  //clearing the input field after click
  inputTransferAmount.value = inputTransferTo.value = '';

  //checking transfer amount need to be more than 0 and sender must have the greater or equal amount she is trying to send

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUI(currentAccount);
  }
});

///////////////////////
//loan operation using some method
//our bank only offers loan if there is atleast one deposit with atleast 10% of the requested loan amount

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some(function (mov) {
      return mov >= amount * 0.1;
    })
  ) {
    //add movement
    currentAccount.movements.push(amount);

    //update UI
    updateUI(currentAccount);

    inputLoanAmount.value = '';
  }
});

//////////////////////////////
//DELETING the ACCOUNT
//findIndex method
// find index returns the index of found element

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  //checking if inputted username is equal to the current user and the same for the pin
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(function (acc) {
      return acc.username === currentAccount.username;
    });

    // console.log(index);

    //Delete account
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;

    //clearing the input field after click
    inputCloseUsername.value = inputClosePin.value = '';

    //changing the login message
    labelWelcome.textContent = 'Log in to get started';
  }
});

//button sort

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////
////////////////////////////
///LECTURES
//lets suppose these movements are in euro and let's change in usd using map array inbuilt method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * euToUsd;
});

console.log(movements);
console.log(movementsUSD);

const movementDescriptions = movements.map(function (mov, i, arr) {
  if (mov > 0) {
    return `Movement ${i + 1}: You deposited ${mov}`;
  } else {
    return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  }
});

console.log(movementDescriptions);

/////////////////////////////////////////////////////////////////
//CREATED THIS ONE IN ALL ABOVE
//compute usernames for each account owners in our application
//username is simply initials of each of user

//const user = 'Steven Thomas Williams'; //stw

//first transform the string to lower case
//second split up the string into multiple words
//const username = user.toLowerCase().split(' ');
//console.log(username);  // ['steven', 'thomas', 'williams']

//we want the first letter of these names
//we loop over the array and then take the first letter in each interation,and add them into new array and join them in end
//we will use map method on username

// const userName = username.map(function(name){
//   return name[0]
// }).join('')

// console.log(userName); //['s', 't', 'w']
//stw
////////////////////////////////////////////////////////////////

//creating a deposit array using filter method
const deposit = movements.filter(function (mov) {
  return mov > 0;
});

console.log('this is movement array');
console.log(movements);
console.log('this is the deposit array filtered from movement array  ');
console.log(deposit);

const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});

console.log('this is withdrawals array');
console.log(withdrawals);

////////////////////REDUCE method
///adding depsoit and withdrawal for global balance
///acc - accumulator is like a snowball

const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i} : ${acc}`);
  return acc + cur;
}, 0);

console.log(balance); //3840

//maximum value
const max = movements.reduce(function (acc, mov) {
  if (acc > mov) {
    return acc;
  } else return mov;
}, movements[0]);

console.log(max); //3000

//////////////////////////////////////
///chaining methods
//to get total depsoit convert them in usd and sum
//chaining can only be done in array methods when the previous method gives a new array

const totalDepositsUSD = movements
  .filter(function (mov) {
    return mov > 0;
  })
  .map(function (mov) {
    return mov * euToUsd;
  })
  .reduce(function (acc, mov) {
    return acc + mov;
  }, 0);

console.log(totalDepositsUSD); //5522.000000000001

//////////////////////////////////
////find method
const account = accounts.find(function (acc) {
  return acc.owner === 'Jessica Davis';
});

console.log(account);

//using for-of loop to do the same above
// for(const account of accounts){
//   if (account.owner === 'Jessica Davis'){
//     break;
//   }
// }

// console.log(account);

////////////////////////////////////////////
//flat method example

//let's say bank itself wants to calculate the overall balance of all the movements of all the accounts.
//we iterate through accounts array object and get all account movements
const accountMovements = accounts.map(function (acc) {
  return acc.movements;
});
console.log(accountMovements); //(4) [Array(8), Array(8), Array(8), Array(5)]

//now we use flat method to get them in one separate array
const allMovements = accountMovements.flat();
console.log(allMovements);
//[200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]

//now we will just add all movements
const overallBalance = allMovements.reduce(function (acc, mov) {
  return acc + mov;
}, 0);
console.log(overallBalance); //17840

////////////////////////////////////////
//using Array.from
///Suppose the movements are in the user interface but not in our code
//suppose we do not have movements stored in an array containing these values
//but we want to calculate the sum, we need to get the movements first

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );

  console.log(movementsUI);
});


//we used array.from to create an array from queryselector all which is  a nodelist,not really an array but array like structure which can easily be converted to an array using array.from()
//and,for second step we included a mapping function, which then transforms that initial array to an array exactly as we want it.


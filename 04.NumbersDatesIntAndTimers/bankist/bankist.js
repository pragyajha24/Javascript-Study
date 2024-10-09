/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2023-11-18T21:31:17.178Z",
    "2023-12-23T07:42:02.383Z",
    "2024-01-28T09:15:04.904Z",
    "2024-04-01T10:17:24.185Z",
    "2024-09-01T14:11:59.604Z",
    "2024-10-05T17:01:17.194Z",
    "2024-10-06T22:36:17.929Z",
    "2024-10-07T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////
///FUNCTIONS////////////////////////////////

///format date
const formatMovementsDate = function (date, locale) {
  const calcDaysPassed = function (date1, date2) {
    //converting the calulated date in days by dividing by miiliseconds(1000) seconds(60) minutes(60) hour(24)
    return Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));
  };

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return "Today";
  else if (daysPassed === 1) return "Yesterday";
  else if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();

    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

//formatting the currencies based on which country or your system currency
const formatCur = function (value, locale, currency) {
  //formatting the number (currency) based on country
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

//display movements in UI
const displayMovements = function (acc, sort = false) {
  //empty the entire container only then we start adding new element
  containerMovements.innerHTML = "";

  //sorting movements - in ascending order
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, index) {
    //to know if a deposit or withdrawal
    const type = mov > 0 ? "deposit" : "withdrawal";

    const date = new Date(acc.movementsDates[index]);
    const displayDate = formatMovementsDate(date, acc.locale);

    //formatting the number (currency) based on country
    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    //DOM manipulation
    const html = ` 
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
     <div class="movements__date">${displayDate}</div>
           
           <div class="movements__value">${formattedMov}</div>
        </div> `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// displayMovements(account1.movements);

////using reduce to get balance
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce(function (acc, mov) {
    return acc + mov;
  }, 0);

  //formatting the number (currency) based on country
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
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
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(function (mov) {
      return mov < 0;
    })
    .reduce(function (acc, mov) {
      return acc + mov;
    }, 0);

  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

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

  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

// calcDisplaySummary(account1.movements);

//////////////////////////////////////////////////////
//creating username for all user
//creating a generic function for all username
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map(function (name) {
        return name[0];
      })
      .join("");
  });
};

createUsernames(accounts);
console.log(accounts);

/////////////////////////////////
///function which update UI  text upon different operation
const updateUI = function (acc) {
  //display movements
  displayMovements(acc);

  //display balance
  calcDisplayBalance(acc);

  //display summary
  calcDisplaySummary(acc);
};

//////////////////////
////////timer function

const startLogOutTimer = function () {
  function tick() {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    //in each callback call,print the remaining time to the user interface
    labelTimer.textContent = `${min}:${sec}`;

    //and when timer gets 0 seconds, stop timer and logs out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = "Log in to get started";
      containerApp.style.opacity = 0;
    }

    //decrease 1 second
    time--;
  }

  //Set time to 5 miutes
  let time = 120;

  //call timer every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

//////////////////////////////////////
/////////////////////////////////////
//EVENT HANDLER
let currentAccount, timer;

//fake always logged in
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener("click", function (e) {
  //prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(function (acc) {
    return acc.username === inputLoginUsername.value;
  });
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    ///display UI and welcome message with first name of user
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;

    containerApp.style.opacity = 100;

    //creating current date and time
    const now = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "numeric",
      year: "numeric",
      // weekday: "long",
    };

    //it checks what is the locale language of our system
    const locale = navigator.language;
    console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    //to have ui like 02 instead of 2
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hours = `${now.getHours()}`.padStart(2, 0);
    // const minutes = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year},${hours}:${minutes}`;

    //clear the input field of username and pin
    inputLoginUsername.value = inputLoginPin.value = " ";
    inputLoginPin.blur();
    //display movements
    // displayMovements(currentAccount.movements);

    // //display balance
    // calcDisplayBalance(currentAccount);

    // //display summary
    // calcDisplaySummary(currentAccount);

    //////////////////////////////////////
    //if timer already exist then clearing it
    if (timer) clearInterval(timer);
    //calling timer function
    timer = startLogOutTimer();

    updateUI(currentAccount);
  }
});

////////////////////////////////////
///////Transfer money operation
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(function (acc) {
    return acc.username === inputTransferTo.value;
  });

  console.log(amount, receiverAcc);

  //clearing the input field after click
  inputTransferAmount.value = inputTransferTo.value = "";

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

    //add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    updateUI(currentAccount);

    //reset the timer
    clearInterval(timer);
    //start a new one
    timer = startLogOutTimer();
  }
});

///////////////////////
//loan operation using some method
//our bank only offers loan if there is atleast one deposit with atleast 10% of the requested loan amount

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some(function (mov) {
      return mov >= amount * 0.1;
    })
  ) {
    ////using setTimeut function to wait some time to approve loan
    setTimeout(function () {
      //add movement
      currentAccount.movements.push(amount);

      //add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      //update UI
      updateUI(currentAccount);
      //reset the timer
      clearInterval(timer);
      //start a new one
      timer = startLogOutTimer();
    }, 2500);
    inputLoanAmount.value = "";
  }
});

//////////////////////////////
//DELETING the ACCOUNT
//findIndex method
// find index returns the index of found element

btnClose.addEventListener("click", function (e) {
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
    inputCloseUsername.value = inputClosePin.value = "";

    //changing the login message
    labelWelcome.textContent = "Log in to get started";
  }
});

//button sort

let sorted = false;

btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
//remainder operator example
//used spread operator to convert it from node list to array

labelBalance.addEventListener("click", function () {
  [...document.querySelectorAll(".movements__row")].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = "orangered";
  });
});

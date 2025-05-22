'use strict';

////creating a promise
// const lotteryPromise = new Promise(function (resolve, reject) {
//   if (Math.random() >= 0.5) {
//     resolve('You WIN');
//   } else {
//     reject('You LOOSE, BETTER LUCK NEXT TIME');
//   }
// });

// ////consuming the promise
// lotteryPromise
//   .then(function (res) {
//     console.log(res);
//   })
//   .catch(function (err) {
//     console.error(err);
//   });

//////////////////making the above code asynchronous by using setTimeout
const lotteryPromise2 = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN');
    } else {
      reject(new Error('You LOOSE, BETTER LUCK NEXT TIME'));
    }
  }, 2000);
});

////consuming the promise
lotteryPromise2
  .then(function (res) {
    console.log(res);
  })
  .catch(function (err) {
    console.error(err);
  });

///promisifying the setTimeOut function and create a wait function
///we don't need the reject function because it is impossible for timer to fail
const wait = function (seconds) {
  return new Promise(function (resolve) {
    ///the callback function we want to be called by certain time is resolve function
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(function () {
    console.log(' 2 seconds passed');
    return wait(1);
  })
  .then(function () {
    console.log(' 1 second');
  })
  .then(function () {
    console.log(' 3 second');
  })
  .then(function () {
    console.log(' 4 second');
  })
  .then(function () {
    console.log(' 5 second');
  });


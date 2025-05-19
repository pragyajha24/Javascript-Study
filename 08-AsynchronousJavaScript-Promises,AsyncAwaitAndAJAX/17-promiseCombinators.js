'use strict';

///Promise.race
//Receives an array of promises and return a promise.
//This is settled as soon as one of the input promises settles.
//settled means a value is avilable, but it does not matter if promise got rejected or fulfilled.

//in Promise.race , the first settled promise wins the race.

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(function (response) {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);

    return response.json();
  });
};

const getCountries = async function () {
  const data = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/argentina`),
    getJSON(`https://restcountries.com/v2/name/brazil`),
  ]);

  console.log(data[0]);
};

getCountries();

////In Promise.race we only get one result and not an array of three, which ever is faster that data will come
//A reject promise also can win the race.
//Promise.race is useful against never ending promise or also very long running promises.

//example if the user internect connection is slow then fetch request might take way too long to actually be useful.
//so we can create a timeout function that will reject after a certain time has passed.

const timeout = function (seconds) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(new Error('request took too long!'));
    }, seconds * 1000);
  });
};

Promise.race([getJSON(`https://restcountries.com/v2/name/chile`), timeout(1)])
  .then(function (res) {
    console.log(res[0]);
  })
  .catch(function (err) {
    console.error(err);
  });

///Promise.allSettled
//Takes an array of promise and return an array of all the settled promises.
//Promise.allSettled never short circuits

Promise.allSettled([
  Promise.resolve('success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
]).then(function (res) {
  console.log(res);
});

///Promise.any
//takes an array of multiple promises, and returnt the first fulfilled promise, and ignore any rejected promise.
Promise.any([
  Promise.resolve('success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
]).then(function (res) {
  console.log(res);
});

'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

/////this for adding the data to html
const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);

  // countriesContainer.style.opacity = 1;
};

////////////////////////////
//HANDLING REJECTED PROMISES
//////////////////////////////////
////the only way a fetch promise rejects is when user loses her internet connection.
///that will be the only error we will handle here
///to stimulate losing the internet connection, inspect -> Network ->check the dissable cache -> No throlling -> offline
//we want to only call this function whenever user clicks the button
///that will make it easier for us to stimulate loosing the internet connection

/////funtion to display error on the screen to user
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour1 = function (country) {
  ///COUNTRY 1
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(
      ////for success
      function (response) {
        return response.json();
      }
      //,
      ///for rejection
      // function (err) {
      //   alert(err);
      // }
    )
    .then(function (data) {
      //console.log(data);
      renderCountry(data[0]);

      ///////neighbouring country code under then method of country
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;
      ////second AJAX call
      ///COUNTRY 2
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      renderCountry(data, 'neighbour');
    })
    .catch(function (err) {
      console.error(`${err} ☄️☄️☄️ `);
      renderError(`Something went wrong ☄️☄️☄️ ${err.message}`);
    })
    .finally(function () {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryAndNeighbour1('germany');
});

///now sat yourself offline and you will get error of <Uncaught (in promise) TypeError: Failed to fetch

///now there are two ways to handle a error
// //1. to pass a second callback function into the then method.
///first callback function will be called always for fulfilled promise, for successful one,
////but we can pass on the second callback which will be called when promise was rejected
//////////////////and this will shoe a lert window with text - TypeError:Failed to fetch

// NOW, suppose there was no error on the first fetch promise,that was fulfilled but the second one was rejected.
///then we would have to catch the error here too,however not a good practice

/////There is a better way to handle these errors globally in one single place

// //2.We can do that by adding a catch method at end of the chain
///catch method at end of the chain will catch any erros that occur in any place in this promise chain.
////errors propagate down in chain until they are caught

////instead of just logging in the console ,lets display error message for user to see on screen

////creating a new function renderError that will render some kind of error

////3. one more way to catch error which is finally method, the callback function which we define here will always be called whatever happens with the promise
////no matter if promise is fulfilled or rejected,the callback function under finally method will be called always.
//we use this method for something that always needs to happen no matter the result of the promise
///example - to hide the loading spinner,those rotating circles that comes when you load some data in web application.And they goes away as data arives
///application shows a spinner as asynchronous operation starts and hide it once the operation completes.no matter if operation was successful or not.
//in our case we need to fade in the container always.


////This works because catch also returns a promise.finally method only works on promises.
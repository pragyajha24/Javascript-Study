'use strict';

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

  countriesContainer.style.opacity = 1;
};

////////////////////////////
////////////////////////////
////CONSUMING PROMISES

////implementing the getCountryData function from first lecture using promise

const getCountryData = function (country) {
  ////this gives the promise immediately , as soon as we start the request
  ////in beginning this promise is still pending becoz the asynchronous task of getting a data, is still in the background
  ////supposing we have a fulfilled promise i.e. in success state we can use then() that is available on all promises.
  ////Now into the then method,  we need to pass a callback function that we want to be executed as soon as the promise is fulfilled.
  ////the callback function in then() will receiev one argument and that argument is resulting value of fulfilled promise
  ////We are calling it response because this is the response of an AJAX call here
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(function (response) {
      ////this gives us the details about response but we yet can't access the data we want to fetch and that is stored in response body
      console.log(response);

      ////to (read the data from response)access the body from response, we need to call the json method on the response
      ////json is a method which is avilable on all the responses object that is coming from the fetch function, so all of the resolved values and the response here is a resolved value
      ////But this json function is also an asynchronous function, which means it will also return a new promise.
      ////We need to return this promise from here,as this is also a new promise.We need to handle this promise also
      ////we do it by calling another then method on it with a callback function and one parameter
      return response.json();
    })
    .then(function (data) {
      /////this will give the data we want from fetch function , here the country data
      console.log(data);
      renderCountry(data[0]);
    });
};

getCountryData('france');

//////simplfing the promise code
const getCountryData2 = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);
    });
};

getCountryData2('denmark');

/////also we can destruct the parameter of a function like
const getCountryData3 = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(function (response) {
      return response.json();
    })
    .then(function ([data]) {
      renderCountry(data);
    });
};

getCountryData3('greece');

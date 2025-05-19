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

//////////////////////////////////
////CHAINING PROMISE
/////////////////////////////////F
/////here will use chaining promises to display neighbouring countries of country passed in function
/////the second AJAX call needs to happen in this handler which gets the real data, as soon as we get the data we need to get the neighbour country data
const getCountryAndNeighbour1 = function (country) {
  ///COUNTRY 1
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);

      ///////neighbouring country code under then method of country
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;
      ////second AJAX call
      ///COUNTRY 2
      ////We need to return this new promise because then we will be able to chain a new then method on the result of the then method this ajax call is inside
      ///calling the parameter response because we are dealing with the fulfilled value of a fetch promise and that is a response
      /// we need to call .json() because fulfilled value of promise will become that body
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      renderCountry(data, 'neighbour');
    });
};

//getCountryAndNeighbour1('germany');

////to display all neigbouring countries
const getCountryAndNeighbour2 = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      renderCountry(data[0]);

      //neighbouring countries
      let neighbour = data[0].borders?.[0];
      if (!neighbour) return;

      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      renderCountry(data, 'neighbour');
    });
};

getCountryAndNeighbour2('poland');

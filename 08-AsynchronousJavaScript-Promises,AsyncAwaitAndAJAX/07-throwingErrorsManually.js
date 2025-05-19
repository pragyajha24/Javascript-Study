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

/////funtion to display error on the screen to user
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

///////////////////////////////////
///////THROWING ERRORS MANUALLY
//////////////////////////////////
//resolving the 404 error occured during fetch because API could not find any country with that name
////the fetch function did not reject the promise even in this case
///so we will do it manually

const getCountryAndNeighbour1 = function (country) {
  ///COUNTRY 1
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(function (response) {
      console.log(response);

      if (!response.ok) throw new Error(`Country not found ${response.status}`);

      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);

      ///////neighbouring country code under then method of country
      const neighbour = data[0].borders?.[0];

      ////if we render a country with no neighbour then throw this error
      if (!neighbour) throw new Error('No neighbour found');
      ////second AJAX call
      ///COUNTRY 2
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(function (response) {
      if (!response.ok)
        throw new Error(`Neighbouring Country not found ${response.status}`);

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
  getCountryAndNeighbour1('republic of korea')
});

//getCountryAndNeighbour1('hello');

///now what is there was error in second fetch
//we have to throw error to then method of second fetch also
///but that's a bad practice same code multiple place - duplicate code

///will create a helper function to get rid of duplicate code
///this helper function will wrap up the fetch,the error handling,conversion to json

///helper function
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(function (response) {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);

    return response.json;
  });
};

const getCountryAndNeighbour2 = function (country) {
  ///COUNTRY 1
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(function (data) {
      //console.log(data);
      renderCountry(data[0]);

      ///////neighbouring country code under then method of country
      const neighbour = data[0].borders?.[0];

      console.log(neighbour);
      //const neighbour = 'fffdddfd';

      // if (!neighbour) return;
      if (!neighbour) throw new Error('No neighbour found');
      ////second AJAX call
      ///COUNTRY 2
     return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        'No Neighbouring Country  found'
      );
    })
    .then(function (data) {
      renderCountry(data[0], 'neighbour');
    })
    .catch(function (err) {
      //console.error(`${err} ☄️☄️☄️ `);
      renderError(`Something went wrong ☄️☄️☄️ ${err.message}`);
    })
    .finally(function () {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryAndNeighbour2('australia');
});

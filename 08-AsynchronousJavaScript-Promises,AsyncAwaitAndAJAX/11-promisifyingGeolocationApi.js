'use strict';

///////// geolocation
// navigator.geolocation.getCurrentPosition(
//   function (position) {
//     console.log(position);
//   },
//   function () {
//     console.log('Could not find your location');
//   }
// );

//////this console will log first because geolocation goes in web api environment to work in background and this console gets in callstack and get executed right away.
console.log('Getting position');

////////////////////////
///PROMISIFYING GEolocation
const getGeolocation = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        resolve(position);
      },
      function (err) {
        reject(err);
      }
    );
  });
};

///using the promisified geolocation
getGeolocation().then(function (position) {
  // console.log(position);
});

/////building a function that will tell where we are in the world based on the geolocation of our device
////modifying the function in challenge 1 of this section
///we are chaining the promise fetch under geolocation
///we wanna destruct latitude and longitude and then create a variable lat anf lng
const whereAmI = function () {
  getGeolocation()
    .then(function (position) {
      const { latitude: lat, longitude: lng } = position.coords;

      return fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
      );
    })
    .then(function (response) {
      if (!response.ok)
        throw new Error(`Problem with coordinates ${response.status}`);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.countryName}`);

      if (!data.countryName) throw new Error('Country not found in data');
      ///////////PART 2
      return fetch(
        `https://restcountries.com/v2/name/${data.countryName}?fullText=true`
      );
    })

    .then(function (response) {
      console.log(response);
      if (!response.ok) throw new Error(`Country not found ${response.status}`);

      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);
    })
    .catch(function (err) {
      console.error(`Country not found ${err.message}`);
    });
};

const btn = document.querySelector('.btn-country');
btn.addEventListener('click', whereAmI);

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
             <p class="country__row"><span>🗣️</span>${
               data.languages[0].name
             }</p>
             <p class="country__row"><span>💰</span>${
               data.currencies[0].name
             }</p>
           </div>
         </article>
     `;

  countriesContainer.insertAdjacentHTML('beforeend', html);

  countriesContainer.style.opacity = 1;
};
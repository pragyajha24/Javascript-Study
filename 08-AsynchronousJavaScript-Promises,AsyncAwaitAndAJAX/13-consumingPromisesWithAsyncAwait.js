'use strict';

////consuming promises using async/await

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

const countriesContainer = document.querySelector('.countries');

//creating async  function
//steps to make async await
//1. write async keyword in front of function keyword
//this way it becomes a async function,so a function which keep running in the background while performing the code inside of it.
//in async function we can have one or more await statements.

const whereAmI = async function (country) {
  //2. await will stop the code execution at this point in function until this promise is fulfilled.
  ///stoping means this function is running in the background nd not blocking the main thread of execution.Its not blocking the call stack.
  const res = await fetch(`https://restcountries.com/v2/name/${country}`);
  console.log(res);
  const data = await res.json();
  console.log(data);
  renderCountry(data[0]);
};

whereAmI('greece');
console.log('FIRST');

//3.async/await is a synthetic sugar over the then method in promises.Behind the scene we are still using promises, we are just using a different way of consuming them.

///creating whereAmI function with async/await
const whereAmI2 = async function () {
  //GET POSITION
  const position = await getGeolocation();
  const { latitude: lat, longitude: lng } = position.coords;
  console.log(position.coords);

  ///REVERESE GEOCODING - GET COUNTRY Name  ON BASED OF COORDINATES
  const resGeo = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
  );
  const dataGeo = await resGeo.json();

  //GET COUNTRY DATA
  const resCountryData = await fetch(
    `https://restcountries.com/v2/name/${dataGeo.countryName}?fullText=true`
  );
  const data1 = await resCountryData.json();
  console.log(data1);

  //DISPLAY COUNTRY DETAILS ON HTML
  renderCountry(data1[0]);
};

whereAmI2();

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

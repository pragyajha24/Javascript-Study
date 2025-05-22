'use strict';

const countriesContainer = document.querySelector('.countries');

////renderCountry function to render/display real world data in html
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

////getPosition i.e. coordinates of the user
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

////function for getting country data of the user (got to know by cordinates)
const whereAmI = async function () {
  try {
    //GET POSITION
    const position = await getGeolocation();
    const { latitude: lat, longitude: lng } = position.coords;
    // console.log(position.coords);

    ///REVERESE GEOCODING - GET COUNTRY Name  ON BASED OF COORDINATES
    const resGeo = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
    );

    ////creating an error message by us to check code
    if (!resGeo.ok) throw new Error(`Problem getting location data`);

    const dataGeo = await resGeo.json();
    // console.log(dataGeo);

    //GET COUNTRY DATA
    const resCountryData = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.countryName}?fullText=true`
    );

    if (!resCountryData.ok) throw new Error(`Problem getting country`);

    const data1 = await resCountryData.json();
    console.log(data1);

    //DISPLAY COUNTRY DETAILS ON HTML
    renderCountry(data1[0]);

    ////////to get value from async function
    return `You are in ${dataGeo.city}, ${dataGeo.countryName}`;
  } catch (err) {
    /////error message by system
    console.error(err);
    /////error message by us
    renderError(`Something went wrong`);
  }
};

//whereAmI();

console.log('1:Will get the location');
////to get value from async functionS
// whereAmI().then(function (city) {
//   console.log(city);
// });

///but if the error occured in the try block, then this return (to get value) will not be reached.
// because the code will immeditalely jump to the catch block

whereAmI()
  .then(function (city) {
    console.log(`2: ${city}`);
  })
  .catch(function (err) {
    console.log(`2: ${err.message}`);
  })
  .finally(function () {
    console.log('3: Finished getting location');
  });

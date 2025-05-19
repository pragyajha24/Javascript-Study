'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

////////////////////////
//////XMLHttpRequest
/////API used in this project - Rest Countries
// const request = new XMLHttpRequest();
// request.open('GET', 'https://restcountries.com/v2/name/india');
// request.send();

// request.addEventListener('load', function () {
//    console.log (this.responseText);
//   const [data] = JSON.parse(this.responseText);
//   console.log(data);

////building the card component
//   const html = `
//        <article class="country">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies[0].name
//             }</p>
//           </div>
//         </article>
// `;

//   /////adding the html to our page
//   countriesContainer.insertAdjacentHTML('beforeend', html);

//   ///////changing the opacity of countries container
//   countriesContainer.style.opacity = 1;
//});

//////using same code to get data about multiple countries
/////putting the above code in function
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    // console.log (this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    ////building the card component
    const html = `
       <article class="country">
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

    ///adding the html to our page
    countriesContainer.insertAdjacentHTML('beforeend', html);

    //changing the opacity of countries container
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('bharat');
getCountryData('france');
getCountryData('denmark');
getCountryData('germany');

//if we want these request to be made in a specific , predefined order,
//then we would basically have to chain the requests, which means to makw
//the second request only after the first request has finished.

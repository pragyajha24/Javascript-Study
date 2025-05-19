'use strict';

console.log('CALLBACK HELL LECTURE');
const countriesContainer = document.querySelector('.countries');
////now,we want to display neighbours of thr country we rendered

////In this lecture, create a sequence of AJAX calls,so that the second one
////runs only when the first one is finished.
////will do by using borders property of country data
///After the first AJAX call is completed, we will get this
///this border, then based on this code we will also render neighbouring countries beside the original country.

///In this case the second AJAX call really depends on the first one.

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

const getCountryAndNeighbour = function (country) {
  //AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    // console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    ////created a spearate function for rendering data on html
    ///Render Country 1
    renderCountry(data);

    ///get neighbour country(2)
    const neighbour = data.borders?.[0];

    ///if there is no neighbour then just return
    if (!neighbour) return;

    //AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      //console.log(this.responseText);
      ////we don't need to destruct the data here because the result of this API is no longer an array, when we search for the code
      ////this time we are searching for country codes and not for country names
      ///country codes are unique , they can always just be one result
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('denmark');

///Here, we have one AJAX call that depends on another one.
//We have here is one callback function inside of another one.
//we have nested callback

///CALLBACK HELL -> is when we have a lot of nested callbacks inorder to execute asynchronous tasks in sequence.

////another example of callback hell, not just async creates callback
setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 second passed');
    setTimeout(() => {
      console.log('3 second passed');
      setTimeout(() => {
        console.log('4 second passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

///PROBLEM WITH CALLBACK HELL
//1. it makes our code really messy
//2. it makes our code harder to maintain, and very difficult to understand, and to reason about.And such codes will have more bug and its just worse code.
////////////////////////////////
///RENDER ALL NEIGHBOUR OF ENTERED COUNTRY

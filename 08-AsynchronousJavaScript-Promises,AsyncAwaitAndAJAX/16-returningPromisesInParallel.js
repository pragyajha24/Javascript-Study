'use strict';

///getting data of three countries at same time but in which the order that data arrives does not matter at all.

console.log('GETTING DATA IN SEQUENCE, ONE DATA COMES AFTER ANOTHER');
const get2Countries = async function (country1, country2) {
  try {
    //////COUNTRY 1 DATA
    const response = await fetch(
      `https://restcountries.com/v2/name/${country1}?fullText=true`
    );
    //console.log(response);
    if (!response.ok) {
      throw new Error('Unable to fetch data');
    }

    ///destructed the data to get capital
    const [data] = await response.json();
    //console.log(data);
    console.log(`Country 1 : ${data.name}`);
    console.log(`Capital 1 : ${data.capital}`);

    //COUNTRY 2 DATA
    const response1 = await fetch(
      `https://restcountries.com/v2/name/${country2}?fullText=true`
    );

    //console.log(response1);
    if (!response1.ok) {
      throw new Error('Unable to fetch second data');
    }

    const [data1] = await response1.json();
    //console.log(data1);
    console.log(`Country 2 : ${data1.name}`);
    console.log(`Capital 2 : ${data1.capital}`);
  } catch (err) {
    console.error(err);
  }
};

get2Countries('ireland', 'austria');

console.log('USING PROMISE ALL AS NONE OF THE REQUEST DEPEND ON EACH OTHER');
///////////////doing using Promise.all , as none of these request depend on each other
const getCountries = async function (country1, country2, country3) {
  try {
    const [response1, response2, response3] = await Promise.all([
      fetch(`https://restcountries.com/v2/name/${country1}?fullText=true`),
      fetch(`https://restcountries.com/v2/name/${country2}?fullText=true`),
      fetch(`https://restcountries.com/v2/name/${country3}?fullText=true`),
    ]);

    //console.log(response1);
    ///handling the errors for each response
    if (!response1.ok) {
      throw new Error('Unable to fetch data for ' + country1);
    }
    if (!response2.ok) {
      throw new Error('Unable to fetch data for' + country2);
    }
    if (!response3.ok) {
      throw new Error('Unable to fetch data for' + country3);
    }

    //Promise.all recieves an array and return an array
    //Parsing the JSON data in parallel
    ///destruct them
    const [[data1], [data2], [data3]] = await Promise.all([
      response1.json(),
      response2.json(),
      response3.json(),
    ]);

    // console.log(data2);
    //console.log(data1);
    //console.log(data1.capital);

    //displaying results
    console.log(`Country 1: ${data1.name}`);
    console.log(`Capital 1: ${data1.capital}`);
    console.log(`Country 2: ${data2.name}`);
    console.log(`Capital 2: ${data2.capital}`);
    console.log(`Country 3: ${data3.name}`);
    console.log(`Country 3: ${data3.capital}`);
  } catch (err) {
    console.error(err.message);
  }
};

getCountries('vietnam', 'singapore', 'thailand');

///will create a helper function to get rid of duplicate code
///this helper function will wrap up the fetch,the error handling,conversion to json
///helper function
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(function (response) {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);

    return response.json();
  });
};

console.log('USING getJSON (helper function) with PROMISE ALL');
const getCountriesData = async function (country1, country2, country3) {
  try {
    //this promise runs all of these promises at same time
    //then we can handle as we did before
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${country1}?fullText=true`),
      getJSON(`https://restcountries.com/v2/name/${country2}?fullText=true`),
      getJSON(`https://restcountries.com/v2/name/${country3}?fullText=true`),
    ]);

    //console.log('All countries data:', data);

    ////looping over the data and extracting the capitals
    const capitals = data.map(function (countryData) {
      return countryData[0].capital;
    });

    console.log('Capitals:', capitals);
  } catch (err) {
    console.error(err.message);
  }
};

getCountriesData('greece', 'belgium', 'spain');

//Promise.all recieves an array and it also returns an array
//If one of the promise reject then the whole promise.all rejects as well.
//Promise.all short circuits when one promise rejects.

//Situation when you have to do multiple asynchronous operations at the same time,and operations that don't depend on one another , then you should always run them in parallel.

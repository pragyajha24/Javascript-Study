'use strict';

///////this is how we did with XMLHttpRequest
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`);
// request.send();

////////////////////////
//PROMISES
///to escape callback hell
console.log('PROMISES');
//Promises using fetch API
const request = fetch('https://restcountries.com/v2/name/france');
console.log(request);

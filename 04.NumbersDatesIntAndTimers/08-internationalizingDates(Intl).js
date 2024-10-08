"use strict";

///get time in different format of country

const now = new Date();

//using international date time API
const dateUS = new Intl.DateTimeFormat("en-US").format(now);
console.log(dateUS);
//10/7/2024
//like in US month / date / year

let dateUK = new Intl.DateTimeFormat("en-GB").format(now);
console.log(dateUK);
//07/10/2024
//like in uk date/month/year

const dateSyria = new Intl.DateTimeFormat("ar-SY").format(now);
console.log(dateSyria);
//٧‏/١٠‏/٢٠٢٤

///////////////////////
///to get the iso code for every country search iso country code table
//and got o lingos.net

//in sanskrit
const dateIndia = new Intl.DateTimeFormat("sa-IN").format(now);
console.log(dateIndia); //७/१०/२०२४

//southern sweden
const dateSouthSweden = new Intl.DateTimeFormat("se-SE").format(now);
console.log(dateSouthSweden);
//2024-10-07
//they do year/month/date


//////////////////////////
//we can add the options in the format
//displaying time with date
const options = {
    hour: 'numeric',
    minute : "numeric",
    day : "numeric",
    month:"long",
    year:"numeric",
    weekday : "long"
}

// const locale = navigator.language;
// console.log(locale);

dateUK = new Intl.DateTimeFormat("en-GB",options).format(now);
console.log(dateUK); //Tuesday 8 October 2024 at 16:02

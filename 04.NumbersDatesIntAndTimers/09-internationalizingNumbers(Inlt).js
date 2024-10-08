"use strict";

//formating numbers based on countries

const num = 234533.48;

const options = {
  style: "unit",
  unit: "mile-per-hour",
};

console.log("US:      ", new Intl.NumberFormat("en-US").format(num));
//US:  234,533.48

console.log("Germany: ", new Intl.NumberFormat("de-DE").format(num));
//Germany:  234.533,48

// console.log(navigator.language, new Intl.NumberFormat(navigator.language).format(num));

//////////////////////////
//with options

console.log("US:      ", new Intl.NumberFormat("en-US", options).format(num));
//US:       234,533.48 mph

console.log("Germany: ", new Intl.NumberFormat("de-DE", options).format(num));
//Germany:  234.533,48 mi/h

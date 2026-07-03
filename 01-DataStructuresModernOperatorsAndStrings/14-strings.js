///////////////////////////////////////
// Working With Strings - Part 1
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   //B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('You got the middle seat');
//   } else console.log('You got lucky');
// };
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

///////////////////////////////////////
// Working With Strings - Part 2

// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// //Fix capitalization in name
// const passenger = 'jOnAS';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// //Comparing email
// const email = 'hello@jonas.io';
// const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// // const normalizedEmail = loginEmail.toLowerCase().trim();
// // console.log(normalizedEmail);

// console.log(email === trimmedEmail);

// //replacing
// const priceGB = '288 , 97£' ;
// const priceUS = priceGB.replace('£','$').replace(',','.');
// console.log(priceUS);

// const announcement = 'All passenger come to boarding door 23 . Boarding door 23';
// //console.log(announcement.replace('door','gate'));
// console.log(announcement.replaceAll('door', 'gate'));

// //Booleans
// const plane = 'A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Air'));

// //Practice exercise
// const checkBaggage = function(items){
//  const baggage = items.toLowerCase();
//  if(baggage.includes('knife') || baggage.includes('gun')){
//    console.log('You are NOT allowed on board');
//  }else{
//    console.log('Welcome abroad');
//  }
// };
// checkBaggage('I have a laptop , some Food and a pocket knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

///////////////////////////////////////
// Working With Strings - Part 3

//Split and Join
// console.log('a+very+nice+string'.split('+'));
// console.log('Jonas Schmedtmann'.split(' '));

// const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');

//   const namesUpper = [];
//   for (const n of names) {
//     namesUpper.push(n[0].toUpperCase() + n.slice(1));
//   }
//   console.log(namesUpper.join(' '));
// };
// capitalizeName('jessica and smith davis');
// capitalizeName('pragya jha');

// //Padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+'));

// const maskCreditCard = function (number) {
//   const str = number + ' ';
//   const last = str.slice(-5);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(4333860088999));
// console.log(maskCreditCard('5478899300282765894'));
// console.log(maskCreditCard('56738939393939022'));

// //Repeat
// const message2 = 'Bad weather .. All Departures Delayed.. ';
// console.log(message2.repeat(5));

// const planesInLine = function(n){
//   console.log(`There are ${n} planes in the line ${'✈'.repeat(n) }`);
// };

// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

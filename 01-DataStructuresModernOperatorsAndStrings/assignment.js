"use strict";

const books = [
  {
    title: "Algorithms",
    author: ["Robert Sedgewick", "Kevin Wayne"],
    publisher: "Addison-Wesley Professional",
    publicationDate: "2011-03-24",
    edition: 4,
    keywords: [
      "computer science",
      "programming",
      "algorithms",
      "data structures",
      "java",
      "math",
      "software",
      "engineering",
    ],
    pages: 976,
    format: "hardcover",
    ISBN: "9780321573513",
    language: "English",
    programmingLanguage: "Java",
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: "Structure and Interpretation of Computer Programs",
    author: [
      "Harold Abelson",
      "Gerald Jay Sussman",
      "Julie Sussman (Contributor)",
    ],
    publisher: "The MIT Press",
    publicationDate: "2022-04-12",
    edition: 2,
    keywords: [
      "computer science",
      "programming",
      "javascript",
      "software",
      "engineering",
    ],
    pages: 640,
    format: "paperback",
    ISBN: "9780262543231",
    language: "English",
    programmingLanguage: "JavaScript",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ["Randal E. Bryant", "David Richard O'Hallaron"],
    publisher: "Prentice Hall",
    publicationDate: "2002-01-01",
    edition: 1,
    keywords: [
      "computer science",
      "computer systems",
      "programming",
      "software",
      "C",
      "engineering",
    ],
    pages: 978,
    format: "hardcover",
    ISBN: "9780130340740",
    language: "English",
    programmingLanguage: "C",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: "Operating System Concepts",
    author: ["Abraham Silberschatz", "Peter B. Galvin", "Greg Gagne"],
    publisher: "John Wiley & Sons",
    publicationDate: "2004-12-14",
    edition: 10,
    keywords: [
      "computer science",
      "operating systems",
      "programming",
      "software",
      "C",
      "Java",
      "engineering",
    ],
    pages: 921,
    format: "hardcover",
    ISBN: "9780471694663",
    language: "English",
    programmingLanguage: "C, Java",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: "Engineering Mathematics",
    author: ["K.A. Stroud", "Dexter J. Booth"],
    publisher: "Palgrave",
    publicationDate: "2007-01-01",
    edition: 14,
    keywords: ["mathematics", "engineering"],
    pages: 1288,
    format: "paperback",
    ISBN: "9781403942463",
    language: "English",
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: "The Personal MBA: Master the Art of Business",
    author: "Josh Kaufman",
    publisher: "Portfolio",
    publicationDate: "2010-12-30",
    keywords: ["business"],
    pages: 416,
    format: "hardcover",
    ISBN: "9781591843528",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: "Crafting Interpreters",
    author: "Robert Nystrom",
    publisher: "Genever Benning",
    publicationDate: "2021-07-28",
    keywords: [
      "computer science",
      "compilers",
      "engineering",
      "interpreters",
      "software",
      "engineering",
    ],
    pages: 865,
    format: "paperback",
    ISBN: "9780990582939",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    author: "Cal Newport",
    publisher: "Grand Central Publishing",
    publicationDate: "2016-01-05",
    edition: 1,
    keywords: ["work", "focus", "personal development", "business"],
    pages: 296,
    format: "hardcover",
    ISBN: "9781455586691",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

console.log(
  " ----------------LOOPING OBJECTS:OBJECTS KEYS,VALUES and ENTRIES-----------------------------"
);

//1.Below is the entries variable that stores an empty array. Use the for-of loop together with the Object.keys() method to loop over the thirdParty.goodreads property (array) of the first book object from the books array. For each key, push a new array that contains that key to the entries array.In the end, the entries array should be filled with arrays containing keys:

const entries = [];
for (const key of Object.keys(books[0].thirdParty.goodreads)) {
  entries.push([key]);
}
console.log(entries);
//output-
// [
//   ["rating"],
//   ["ratingsCount"],
//   ["reviewsCount"],
//   ["fiveStarRatingCount"],
//   ["oneStarRatingCount"],
// ];

//2.Use the for-of loop together with the Object.values() method and Array's entries() method to loop over thirdParty.goodreads property of the first book from the books array.
//Push each value to the appropriate inner array in the entries array (use index from entries()).

for (const [index, value] of Object.values(
  books[0].thirdParty.goodreads
).entries()) {
  entries[index].push([value]);
}

console.log(entries);
//output--
// [
//   ["rating", [4.41]],
//   ["ratingsCount", [1733]],
//   ["reviewsCount", [63]],
//   ["fiveStarRatingCount", [976]],
//   ["oneStarRatingCount", [13]],
// ];

//3.Use the Object.entries() method on the thirdParty.goodreads property of the first book from the books array. Assign the returned value to the variable called entries2.

const entries2 = Object.entries(books[0].thirdParty.goodreads);
console.log(entries2);
//output--
// [
//   ["rating", 4.41],
//   ["ratingsCount", 1733],
//   ["reviewsCount", 63],
//   ["fiveStarRatingCount", 976],
//   ["oneStarRatingCount", 13],
// ];

//4.Log the entries and entries2 variables to the console, and compare them. They should look the same.

console.log(entries);
console.log(entries2);

console.log("------------------SETS----------------");

//1.Below is the allKeywords variable, which stores an empty array. Loop over the books array, and fill the allKeywords array with the keywords coming from the keywords property of each book object. The allKeywords array should have just one level (no nested arrays).
//Use whatever loop and methods you want. You can also use the spread syntax. In the end, the allKeywords array should look more or less like this: ['computer science', 'programming', 'algorithms', 'data structures', ...].

const allKeywords = [];

for (const book of books) {
  allKeywords.push(...book.keywords);
}
console.log(allKeywords);

//2.The allKeyword array contains duplicates. Remove them by creating a Set out of that array. Assign the newly created set to the uniqueKeywords variable.

let uniqueKeywords = new Set(allKeywords);
console.log(uniqueKeywords);

//3.Add two more keywords to the uniqueKeywords set, for example, 'coding' and 'science'.

uniqueKeywords.add("coding").add("science");
console.log(uniqueKeywords);

//4.Delete 'business' from the uniqueKeywords set.

uniqueKeywords.delete("business");
console.log(uniqueKeywords);

//5.Create an array out of the uniqueKeywords set, and assign it to the uniqueKeywordsArr variable.

const uniqueKeywordsArr = [...new Set(uniqueKeywords)];
console.log(uniqueKeywordsArr);

//6.Delete all items from the uniqueKeywords set.

uniqueKeywords.clear();
console.log(uniqueKeywords);

console.log("--------------MAPS----------------");

//1.Create a new book, but this time, as a Map. Assign it to the bookMap variable. Use this array as initial data:

const bookMap = new Map();
bookMap.set("title", "Clean Code").set("author", "Robert C. Martin");

//2.Set a new key in bookMap called pages, and assign it with a number 464.

bookMap.set("pages", 464);
console.log(bookMap);

//3.Get the title and author values from bookMap, and log to the console a string formatted like that: "${title} by ${author}".

console.log(`${bookMap.get("title")} by ${bookMap.get("author")} `);

//4.Get the size of bookMap, and log it to the console.

console.log(bookMap.size);

//5.Check if bookMap has the author key. and if so, log "The author of the book is known" to the console.

if (bookMap.has("author")) console.log("The author is known");

console.log("--------------MAPS:ITERATION-------------");

//1.Convert the first book object from the books array into a Map, and assign it to a firstBookMap variable.

const firstBookMap = new Map(Object.entries(books[0]));
console.log(firstBookMap);

//2.Use the for-of loop to iterate over firstBookMap, and log to the console keys that have numbers as values.

for (const [key, value] of firstBookMap) {
  if (typeof value === "number") console.log(`${key}`);
}

//output-- edition pages

//Working with Strings - Part 1

//15.1 Take the ISBN property of the first book from the books array, and log to the console characters at index 6, 4, 9 and 8. Use bracket notation to access individual characters.

console.log(
  books[0].ISBN[6],
  books[0].ISBN[4],
  books[0].ISBN[9],
  books[0].ISBN[8]
); //1 3 3 7

//15.2 Below is the quote variable that stores a string. Find the index of the word 'chess', and log it to the console.

const quote =
  "A computer once beat me at chess, but it was no match for me at kick boxing";
console.log(quote.indexOf("chess")); //27

//15.3 Extract the word "boxing" from the same quote string, and log it to the console.

console.log(quote.slice(quote.lastIndexOf(" ") + 1));

//15.4 Some authors are noted as "(Contributor)", for example "Julie Sussman (Contributor)". Create a function called isContributor that takes an author's name as an argument, and returns either true (if he's a contributor) of false (if he's not a contributor). The string "(Contributor)" is always the last part of the author's name string.

function isContributor(authorName) {
  return authorName.lastIndexOf("Contributor") !== -1;
}

console.log(isContributor("Julie Sussman(Contributor")); //true
console.log(isContributor("Robert Sedgewick")); //false

//16.1 Write a function called normalizeAuthorName that takes an author's name (string) as an argument, and returns the same string, but the first name and last name are capitalized, and the "(Contributor)" part is removed (if exists).
//You can be sure that the author's name always consists of two words separated by a space, and possibly ends with "(Contributor)". The string may also contain trailing spaces.

function normalizeAuthorName(author){

}
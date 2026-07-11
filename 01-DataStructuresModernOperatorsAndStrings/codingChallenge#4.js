"use strict";

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/

const textArea = document.createElement("textarea");
document.body.append(textArea);

textArea.placeholder = "Enter input string...";
textArea.style.width = "15rem";
textArea.style.padding = "2rem";
textArea.style.height = "10rem";

const btn = document.createElement("button");
document.body.append(btn);

btn.style.padding = "1.2rem 1.6rem ";
btn.style.height = "1rem";

btn.style.backgroundColor = "darkblue";
btn.textContent = "Convert";
btn.style.color = "#fff";
btn.style.border = "none";
btn.style.cursor = "pointer";

const resultTextArea = document.createElement("textarea");
document.body.append(resultTextArea);

resultTextArea.style.width = "15rem";
resultTextArea.style.padding = "2rem";
resultTextArea.style.height = "10rem";
resultTextArea.style.backgroundColor = "skyblue";

document.body.style.margin = "2rem";
document.body.style.display = "flex";
document.body.style.flexDirection = "row";
document.body.style.gap = "1.2rem";
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";

btn.addEventListener("click", function () {
  convertToCamelCase();
});

function convertToCamelCase() {
  const input = textArea.value;
  const str = input.split("\n");

  let results = [];

  for (const variable of str) {
    const parts = variable.trim().toLowerCase().split("_");
    //console.log(parts);

    if (parts.length < 2) continue;
    const camelCase = parts[1][0].toUpperCase() + parts[1].slice(1);
    //console.log(camelCase);
    const result = parts[0] + camelCase;
    // console.log(result);
    results.push(result);
    //console.log(result);
  }

  const longest = Math.max(
    ...results.map(function (result) {
      return result.length;
    }),
  );
  //console.log(longest);

  let counter = 0;
  resultTextArea.value = "";
  for (const result of results) {
    counter++;
    const tick = "✅".repeat(counter);
    console.log(result.padEnd(longest + 3) + tick);

    resultTextArea.value += result.padEnd(longest + 3) + tick + "\n";
  }
}

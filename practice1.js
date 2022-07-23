// Question 1.
// Create a variable of type string and try to add a number to it.

let a = "Apurba";
let b = 34;
let c = a + b;

console.log(c);

// Question 2.
// Use typeof operator to find the datatype of the string in last question.

console.log(typeof c);

// Question 3.
// Create a const object in javascript can you change it to hold a number later ?

const d = {
  name: "Apurba",
  section: 1,
  isPrinciple: false,
};
// d = "newApurba"; // not possible to reassign value to a const variable

// Question 4.
// Try to add a new key to the const object in problem 3. were you able to do it ?

d["friend"] = "Alok";
console.log(d);

// Question 5.
// Write a JS program to create a word - meaning dictionary of 3 words.

const dict = {
  appreciate: "recognize the full worth of.",
  ataraxia: "a state of freedom from emotional disturbance and anxiety.",
  yakka: "work, especially hard work.",
};

console.log(dict);
console.log(dict.yakka);

console.log("javascript is loaded");

let firstName = prompt("What is your first name?");
let lastName = prompt("What is your last name?");
let birthYear = prompt("What is your birth year?");
let age = 2023 - birthYear;
// operations
let fullName = firstName + " " + lastName;
// let greetings = "Hello my friends, this is " + fullName + ".";
// let yearWord;
// if (age > 1) {
//   yearWord = "years";
// } else {
//   yearWord = "year";
// }
// reassigning
// let yearWord = "year";
// yearWord = "years";

function calcAge() {
  let gender = "male";
  let age = 2023 - birthYear;
  let yearWord;
  if (age > 1) {
    yearWord = "years";
  } else {
    yearWord = "year";
  }
  return `${age} ${yearWord}`;
}
let calculatedAgeWithString = calcAge();
// template literal (back ticks `)
let newGreetings = `Hello my friends, nice to meet you. My name is ${fullName}, and I am ${calculatedAgeWithString} of age.`;
alert(newGreetings);

// console.log(typeof firstName);
// console.log(greetings);

console.log(newGreetings);

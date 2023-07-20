// console.log("javascript is loaded");

let firstNameDom = document.querySelector("#firstName");
let lastNameDom = document.querySelector("#lastName");
let birthYearDom = document.querySelector("#birthYear");
let greetingsDom = document.querySelector("#greetings");

function processData() {
  let firstNameValue = firstNameDom.value;
  let lastNameValue = lastNameDom.value;
  let birthYearValue = birthYearDom.value;

  let greetings = `Hello ${firstNameValue} ${lastNameValue}, you are born in ${birthYearValue}!`;

  greetingsDom.innerText = greetings;
}

// const cannot be changed, let = can be changed later - must use let/const when making a variable
const myName = "Patrick";
let myAge = 24;
let randomNum = 250;

// creating array
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// random name array
const nameArray = ["me", "myself", "i"];

console.log(`Hello, the vlaue of myAge multiplied by randomNum is ${myAge * randomNum}`);

// id selector to get element with id of display
const displayH1 = document.getElementById('display');
displayH1.innerHTML = `Hello, the vlaue of myAge multiplied by randomNum is: ${ myAge * randomNum}`;

const displayH2 = document.getElementById('stringD');
displayH2.innerHTML = numArray[9]


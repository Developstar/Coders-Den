//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

let challenge = '30 Days Of JavaScript'

//Print the string on the browser console using console.log()
console.log(challenge)

//Print the length of the string on the browser console using console.log()

console.log(challenge.length)

//Change all the string characters to capital letters using toUpperCase() method

let changedToUpper = challenge.toUpperCase();
console.log(changedToUpper)


// Change all the string characters to lowercase letters using toLowerCase() method


let changeTolower = challenge.toLowerCase();
console.log(changeTolower)


// Cut (slice) out the first word of the string using substr() or substring() method

/*
let challenge = '30 Days Of JavaScript'
*/

let firstWord = challenge.substr(3,4);
console.log(firstWord)

// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
/*
let challenge = '30 Days Of JavaScript'
*/

let slicedWord = challenge.slice(3);
console.log(slicedWord);


//Check if the string contains a word Script using includes() method
/*
let challenge = '30 Days Of JavaScript'
*/
let includesScript = challenge.includes('Script');
console.log(includesScript)


//Split the string into an array using split() method
/*
let challenge = '30 Days Of JavaScript'
*/

let splitString = challenge.split()
console.log(splitString)
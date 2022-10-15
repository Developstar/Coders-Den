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


// Split the string 30 Days Of JavaScript at the space using split() method
/*
let challenge = '30 Days Of JavaScript'
*/

let  splitSpace = challenge.split(' ')
console.log(splitSpace)


// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

let company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
let stringAtComma = company.split(',')
console.log(stringAtComma)

//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
/*
let challenge = '30 Days Of JavaScript'
*/

let changed = challenge.replace('JavaScript', 'Python');
console.log(changed);


// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
/*
let challenge = '30 Days Of JavaScript'
*/

let charChar = challenge.charAt(15);
console.log(charChar)


//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
/*
let challenge = '30 Days Of JavaScript'
*/
console.log(challenge.charCodeAt("J"))


//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
/*
let challenge = '30 Days Of JavaScript'
*/
console.log(challenge.indexOf('a'))

//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
/*
let challenge = '30 Days Of JavaScript'
*/
console.log(challenge.lastIndexOf('a'))







 






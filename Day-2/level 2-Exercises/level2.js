// Using console.log() print out the following statement: 
let statement = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."

console.log(statement);


// Using console.log() print out the following quote by Mother Teresa:

let secondStatement = '"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."'

console.log(secondStatement);


// Check if typeof '10' is exactly equal to 10. If not make it exactly equal

console.log(typeof '10');

// to turn '10' to 10
let number = '10';
let num = parseInt(number);
console.log(num);

console.log(num);


// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

let pars = parseFloat('9.8');
console.log(pars );


//to make  parseFloat exactly equal with 10
let makeTen = Math.round(pars);
console.log(makeTen);


// Check if 'on' is found in both python and jargon

let wordOne = 'python'
let wordTwo = 'jargon'

console.log(wordOne.includes('on'))
console.log(wordTwo.includes('on'))


// I hope this course is not full of jargon. Check if jargon is in the sentence.

let fullSent = 'I hope this course is not full of jargon.'

console.log(fullSent.includes('jargon'))


// Generate a random number between 0 and 100 inclusively.

let randNum = Math.random(); // random number generated
let zeroToHund =  parseInt(randNum * 100) ;
console.log(zeroToHund);


// Generate a random number between 50 and 100 inclusively
let calc = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
console.log(calc);


// Generate a random number between 0 and 255 inclusively
let randomNumber = Math.random();
let zeroToTwoFive = parseInt(randomNumber*255);
console.log(zeroToTwoFive)


// Access the 'JavaScript' string characters using a random number.

let characters = 'JavaScript';

let randomNum = Math.random(); //create random numbers
let intNum = parseInt(randomNum * 9);
console.log(intNum);

let diffChar = characters[intNum];
console.log(diffChar);

// Use console.log() and escape characters to print the following pattern.

 

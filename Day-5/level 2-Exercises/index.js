// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
// import countries from './countries.js';
// import webTechs from './web_techs.js';


// console.log(countries);
// console.log(webTechs)

// First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
//Remove punctuations
// let removedPunctuation = text.replace(/[.\,]/g, "");
// console.log(removedPunctuation)
// text = removedPunctuation
//change the string to array
// text = text.split(' ,')
// console.log(text)

// count the number of words in the array
 text = text.split(' ')
 console.log(text)
 let lengthOfText = text.length;
 console.log(lengthOfText)



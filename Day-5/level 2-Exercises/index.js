// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
// import countries from './countries.js';
// import webTechs from './web_techs.js';


// console.log(countries);
// console.log(webTechs)

// First remove all the punctuations and change the string to array and count the number of words in the array
// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// Remove punctuations
// let removedPunctuation = text.replace(/[./,]/g, "");
// console.log(removedPunctuation)
// text = removedPunctuation
// change the string to array
// text = text.split(' ,')
// console.log(text)

// count the number of words in the array
//  text = text.split(' ')
//  console.log(text)
//  let lengthOfText = text.length;
//  console.log(lengthOfText)

// In the following shopping cart add, remove, edit items
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// shoppingCart.unshift('Meat');
// console.log(shoppingCart)
// add Sugar at the end of your shopping cart if it has not been already added
// shoppingCart.push('Sugar')
// console.log(shoppingCart)
// remove 'Honey' if you are allergic to honey
// shoppingCart.splice(4,1)
// console.log(shoppingCart)
// modify Tea to 'Green Tea'
// shoppingCart.splice(3,1,'Green Tea')
// console.log(shoppingCart)


// Concatenate the following two variables and store it in a fullStack variable.
// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']

// let fullStack = frontEnd.concat(backEnd)

// console.log(fullStack)



//First remove all the punctuations and change the string to array and count the number of words in the array

//remove all the punctuations
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let removedPunctuation = text.replace(/[.,]/g, '')
console.log(removedPunctuation)

//change string to array
let toArray = removedPunctuation.split()
console.log(toArray)

//Count the number of words in the array

let countWords = (removedPunctuation.split(' ')).length
console.log(countWords)
// console.log(words)
// console.log(words.length)


//In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'

let addMeat = shoppingCart.unshift('Meat')
let addSuger = shoppingCart.push('Sugar')
console.log(shoppingCart)
let removeHoney = shoppingCart.splice(4,1)

// modify Tea to 'Green Tea'
let modifyTea = shoppingCart.splice(3,1,'Green Tea')

console.log(shoppingCart)


//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.




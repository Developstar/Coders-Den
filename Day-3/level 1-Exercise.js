// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.


let firstName = 'John';
console.log(typeof firstName);

let lastName = 'Adeyeye';
console.log(typeof lastName);

let country = 'Nigeria';
console.log(typeof country);

let city = 'Osogbo';
console.log(typeof city);

let age = 24;
console.log(typeof age);

let isMarried = false;
console.log(typeof isMarried);

let year = 2022;
console.log(typeof year);


// Check if type of '10' is equal to 10

console.log(typeof '10' == 10)

// Check if parseInt('9.8') is equal to 10

let int = parseInt('9.8');
console.log(int == 10)


// Boolean value is either true or false.

// Write three JavaScript statement which provide truthy value.
// Write three JavaScript statement which provide falsy value.



// THREE TRUTHY STATEMENTS

//one
let a = 5;
let b = 6;

console.log(a < b);

//Two
let price = 200;
let remark = '200';

console.log(price == remark);

//Three
let index = 0;
let available = false;
console.log(index == available)


// THREE FALSY STATEMENTS

//one
let rate
let wife = null
console.log(rate === wife)

//Two
let myAge = 24;
let yourAge = 24;

console.log(myAge !== yourAge);


//Three 

let heCodes = false
let location = ''

console.log(heCodes === location)



// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

let one = 4 > 3;
console.log(one)
let two= 4 >= 3
console.log(two)
 let three = 4 < 3
 console.log(three)
  let fourth = 4 <= 3
  console.log(fourth)

let fifth = 4 == 4
console.log(fifth)

let sixth = 4 === 4
console.log(sixth);

let seventh = 4 != 4
console.log(seventh)

let eight = 4 !== 4
console.log(eight) 

let nine = 4 != '4'
console.log(nine)

let ten = 4 == '4'
console.log(ten)

let eleven = 4 === '4'
console.log(eleven)


// Find the length of python and jargon and make a falsy comparison statement.

let langOne = 'python';
let langTwo = 'jargon';

let langOneLength = langOne.length
console.log(langOneLength)

let langTwoLength = langTwo.length
console.log(langTwoLength)


let lengthComparison = langOneLength > langTwoLength
console.log(lengthComparison)





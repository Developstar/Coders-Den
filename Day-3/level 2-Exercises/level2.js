// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// let b = prompt('enter base  here')
// let h = prompt('enter height here')

// let area = 0.5 * b * h;
// alert(`The area of your triangle is ${area}`);


// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

// let sideA = prompt('enter side a');
// let answerA = parseInt(sideA)

// let sideB = prompt('enter side b');
// let answerB = parseInt(sideB);

// let sideC = prompt('enter side c');
// let answerC = parseInt(sideC)

// let perimeter = parseInt(answerA + answerB + answerC)
// alert(`The Perimeter of your Triangle = ${perimeter}`)


// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

// let length = prompt('Enter length');
// let width = prompt('Enter width');
// // Area of rectangle
// let area = length * width
// let perimeter = 2 * (parseInt(length) + parseInt(width));
// alert(area);
// alert(perimeter);

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

// let r = prompt('Entire radius here')
// const pi = 3.14;

// let areaOfCircle = pi * r * r;
// alert(`The area of circle = ${areaOfCircle}`)

// let circumference = 2 * pi * r;
// alert(`The circumference of your circle = ${circumference}`)

// Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

// let workHour = prompt('How many hours would you like to work in a week?(enter figure only to avoid error)')
// let ratePerHour = prompt('Rate per hour in $')

// let Pay = parseInt(workHour) * parseInt(ratePerHour);

// alert(`Your weekly Pay = $ ${Pay}`)


// If the length of your name is greater than 7 say, your name is long else say your name is short.

// let enterName = prompt('Enter your name here');
// let checkLength = enterName.length

// if (checkLength > 7) {
//     alert('Your name is long')
// } else {
//     alert('Your name is short')
// }


// Compare your first name length and your family name length and you should get this output.
// Your first name, Asabeneh is longer than your family name, Yetayeh


// let firstName = 'Boluwatife';
// let secondName = 'Adeyeye'
// //get length
// let firstNameLength = firstName.length;
// console.log(firstNameLength)
// let secondNameLength = secondName.length;
// console.log(secondNameLength)

// if(firstNameLength > secondNameLength){
//     console.log(`Your first name, ${firstName} is longer than your family name, ${secondName}`)
//     alert(`Your first name, ${firstName} is longer than your family name, ${secondName}`)
// }else{

// }


// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge. Have an output like this 'I am 225 years older than you'.
// let myAge = 24
// let yourAge = 15

// let ageDifference = myAge - yourAge;

// console.log(`I am ${ageDifference} years older than you`)

// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

// let canDrive = 18
// let now = new Date();
// let currentYear = now.getFullYear()
// console.log(currentYear)
// let userInput = prompt('What year were you born(yyyy) ?')
// let userAge = currentYear - userInput;



// if(userAge >= canDrive){
//     alert('Congratulations, You can drive')
// }else{
//     alert(`Sorry you are ${userAge} years old. Yuswou'll have to Wait for ${canDrive - userAge} years before you can drive`)
// }


// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. 


// const daysInAYear = 365
// const hoursInADay = 24
// const minInOneHour = 60
// const secInAMinute = 60

// let secondsInADay = (secInAMinute * minInOneHour) * hoursInADay
// console.log(secondsInADay)
// let secondsInAYear = secondsInADay * daysInAYear
// console.log(secondsInAYear)

// let yearsToLive = prompt('Enter number of years you wish to live');
// let numberOfSec = yearsToLive * secondsInAYear

// alert(`You will live for ${numberOfSec} seconds`)


// Create a human readable time format using the Date time object

// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm

// let now = new Date();
// console.log(now)

// let year = now.getFullYear()
// let month = now.getMonth()
// let day = now.getDate()
// console.log(day)
// let hour = now.getHours();
// let minutes = now.getMinutes();


// // YYYY-MM-DD HH:mm
// console.log(`${year}-${month}-0${day} ${hour}:${minutes}`)

// // DD-MM-YYYY HH:mm
// console.log(`0${day}-${month}-${year} ${hour}:${minutes}`)

// // DD/MM/YYYY HH:mm
// console.log(`0${day}/${month}/${year} ${hour}:${minutes}`)






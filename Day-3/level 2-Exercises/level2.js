// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// let b = prompt('enter base  here')
// let h = prompt('enter height here')

// let area = 0.5 * b * h;
// alert(`The area of your triangle is ${area}`);


// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

let sideA = prompt('enter side a');
let answerA = parseInt(sideA)

let sideB = prompt('enter side b');
let answerB = parseInt(sideB);

let sideC = prompt('enter side c');
let answerC = parseInt(sideC)

let perimeter = parseInt(answerA + answerB + answerC)
alert(`The Perimeter of your Triangle = ${perimeter}`)
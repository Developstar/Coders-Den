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

let r = prompt('Entire radius here')
const pi = 3.14;

let areaOfCircle = pi * r * r;
alert(`The area of circle = ${areaOfCircle}`)

let circumference = 2 * pi * r;
alert(`The circumference of your circle = ${circumference}`)
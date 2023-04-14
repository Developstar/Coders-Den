//Declare a function fullName and it print out your full name.

// function fullName(){
//   console.log('Adeyeye Boluwatife') 
// }

// fullName()


//Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullName(firstName, lastName){
  let Name = `${firstName} ${lastName}`
  console.log(Name)
}

fullName('Boluwatife','Adeyeye')


//Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(y,z){
  let sum = y+z
  console.log(sum)
}

addNumbers(5,6)


//An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle(l,w){
  area = l*w
  console.log(area)
}

areaOfRectangle(5,15)


//A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(length,width){
  perimeter = 2*(length + width)
  console.log(perimeter)
}

perimeterOfRectangle(10,5)



//A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

function volumeOfRectPrism(length,width,height){
  volume = length * width * height
  console.log(volume)
}

volumeOfRectPrism(10,8,5)


//Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

function areaOfCircle(r){
  area = Math.PI*r*r
  console.log(area)
}

areaOfCircle(5)



//Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function circumOfCircle(r){
  let circumference = 2 * Math.PI * r
  console.log(circumference)
}

circumOfCircle(3)


//Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

function densityOfSubstance(m,v){
  density = m/v
  console.log(density)
}

densityOfSubstance(55,15)

//Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object.

function speedOfMovingObj(distance, time){
 let speed = distance/time
  return speed
}

  speed = speedOfMovingObj(100, 3)

  console.log(`The speed of the moving object = ${speed} m/s`)


//Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

function weightOfSubstance(m,g){
  let weight = m*g
  return weight
}
 weigth = weightOfSubstance(5,6);
console.log(`The weigth of your substance = ${weigth}`)


//Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

function convertTempToOf(oC){
  let toOf = (oC * 9/5) + 32.
  console.log(toOf)
}

convertTempToOf(15)


//Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more


function bodyMassIndex(weight,height){
  // Convert height to meters
  height = height / 100;
  //calculate BMI
  mass = weight/(height * height)
  console.log(mass)
  if(mass >= 30 ){
    console.log('Obese' )
  }else if(mass >= 25 ){
    console.log('Overweight')
  }else if(mass >= 18.5){
    console.log('Normal weigth')
  }else if(mass<18.5){
    console.log('Underweight')
  }
}

bodyMassIndex(72,185)



//Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

function checkSeason(month){
  switch(month){
    case 'September' :
    case 'October':
    case 'November':
      console.log('The season is Autumn')
    break;
    case 'March':
    case 'April':
    case 'May':
      console.log('The season is spring')
      break;
    case 'June':
    case 'July':
    case 'August':
      console.log('The season is summer')
      break;
    case 'December':
    case 'January':
    case 'February':
      console.log('The season is winter')
  }
}

checkSeason('April')



//Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0

const findMax = (a,b,c)=>{
  let numbers = [a,b,c]
  let sort = numbers.sort()
  let max = sort[sort.length-1]
  console.log(max)
}

findMax(1,9,3,)



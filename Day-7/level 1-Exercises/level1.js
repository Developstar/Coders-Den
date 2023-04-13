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


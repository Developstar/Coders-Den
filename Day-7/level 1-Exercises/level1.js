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
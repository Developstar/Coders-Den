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
//Create an empty object called dog
let dog = {}

//Print  the dog object on the console
console.log(dog)

//Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = 'Bingo'
dog.legs = 4
dog.color = 'Brown'
dog.age = 5
dog.bark = function(){
  return 'woof woof'
}

console.log(dog.bark())



//Get name, legs, color, age and bark value from the dog object
let getobjectValues = Object.values(dog);
console.log(getobjectValues)


//Set new properties the dog object: breed, getDogInfo
dog.breed = 'Rot'
dog.getDogInfo = function(){
  return  `These are the details of my dog : \n Name: ${this.name}, \n legs: ${this.legs}, \n color: ${this.color},\n age: ${this.age}`
}
console.log(dog.getDogInfo())
console.log(dog)









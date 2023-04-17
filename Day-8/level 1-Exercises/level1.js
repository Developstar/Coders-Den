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







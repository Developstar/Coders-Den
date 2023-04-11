// Develop a small script which generate any number of characters random id:
// fe3jo1gl124g,    xkqci4utda1lmbelpkm03rba

let n = Math.floor(Math.random()*(25-5+1)) + 5
let characters = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q',1,2,3,4,5,6,7,8,9]
let idInArray = []
for(let i = 1; i<= n; i++){
    let randomIndex = Math.floor(Math.random()*26)
    let each = characters[randomIndex]
    idInArray.push(each)  
}

console.log(idInArray)
let randomId = idInArray.join('')
console.log(randomId)


// Write a script which generates a random hexadecimal number.

let m = Math.floor(Math.random()*(7-5+1)) + 7
let char = ['a','c', 'b', 'd','e','g','h','i','j','k','l','f','m','n','o','p','q',1,2,3,4,5,6,7,8,9]
let idArrayy = []
for(let i = 1; i<= m; i++){
    let randomI = Math.floor(Math.random()*26)
    let each = char[randomI]
    idArrayy.push(each)  
}

idArrayy[0] = "#"
console.log(idArrayy)

let ranId = idArrayy.join('')
console.log(ranId)


// Write a script which generates a random rgb color number. rgb(240,180,80)

//get the three random numbers 

let loopResult = []
for(let p=1; p<=3; p++){
    let randomNumm = Math.floor(Math.random()*256)
    console.log(randomNumm)
    loopResult.push(randomNumm)
    
}
console.log(loopResult)
let result = `rgb(${loopResult})`
console.log(result)



const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  
  
//Using the above countries array, create the following new array
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

//get the index of countries in Array
// console.log(countries.length)

const newArry = []

for(let t=0; t< countries.length; t++){
  newArry.push(countries[t].toUpperCase())
}
console.log(newArry)


// Using the above countries array, create an array for countries length'.
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

let length = []
for(let q = 0; q<countries.length; q++){
length.push(countries[q].length)
}

console.log(length)


//Use the countries array to create the following array of arrays:

// [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]


console.log(countries)

let arrayOfArray = []
for(let w=0; w<countries.length; w++){
 arrayOfArray.push([countries[w],((countries[w]).slice(0,3)).toUpperCase(), countries[w].length])
}
console.log(arrayOfArray)




// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
// ['Finland','Ireland', 'Iceland']

let arraysOfLand = []

for(let c = 0; c<countries.length; c++){
  
 if(countries[c].includes('land') === true){
  arraysOfLand.push(countries[c])
 }
  
}

console.log(arraysOfLand)

//In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

console.log(countries)

// console.log('ia' === 'ia')
// console.log(countries[2].slice(countries[2].length-2))
let arrayOfIa = []
let withoutAi = []
for(let x=0; x<countries.length; x++){
  let lastTwoLetters = countries[x].slice(countries[x].length-2)
  if(lastTwoLetters === 'ia' === true){
    arrayOfIa.push(countries[x])
  }else if(lastTwoLetters === 'ia' === false){
    withoutAi.push(countries[x])
  }
}


console.log(arrayOfIa)

let without =`These are countries that ends without ia': ${withoutAi.toString()}` 
console.log(without)


//Using the above countries array, find the country containing the biggest number of characters.
let lengthOfEach = []
console.log(countries)
for(let z = 0; z<countries.length; z++){
lengthOfEach.push(countries[z].length) 
}
console.log(lengthOfEach)
let sortedArray = lengthOfEach.sort()
console.log(sortedArray)

for(let k = 0; k < sortedArray.length; k++){
 if(countries[k].length === sortedArray[sortedArray.length-1]){
  console.log(`The biggest number of character is ${countries[k]}`)
 }
}

console.log(countries)
//Using the above countries array, find the country containing only 5 characters.
// ['Japan', 'Kenya']

for(let j = 0; j<countries.length; j++){
  if(countries[j].length === 5){
    console.log(`Countries with 5 characters  are : ${countries[j]}`)
  }
}


//Find the longest word in the webTechs array
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

console.log(webTechs)
//get the lenght of each items in the array
let lengthOfEachItems= []
for(let h=0; h<webTechs.length; h++){
  lengthOfEachItems.push(webTechs[h].length)
}

console.log(lengthOfEachItems)
 lengthOfEachItems.sort((a, b) => a - b);
console.log(lengthOfEachItems)
//find the longest word
console.log(webTechs)

for(let g=0; g < webTechs.length; g++){
  let sortedWordLength = lengthOfEachItems[lengthOfEachItems.length-1]
  if(webTechs[g].length === sortedWordLength){
    console.log(webTechs[g])
  }
}



//Use the webTechs array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
console.log(webTechs)

let wtArrayofArr = []
for(let f = 0; f<webTechs.length; f++){
  wtArrayofArr.push([webTechs[f], webTechs[f].length])
}

console.log(wtArrayofArr)
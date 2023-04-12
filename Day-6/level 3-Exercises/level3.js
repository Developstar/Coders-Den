// Copy countries array(Avoid mutation)
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
    'Kenya'
  ]

let copiedCountries = []
for(let q=0; q<countries.length; q++){
    copiedCountries.push(countries[q])
}

copiedCountries[0] = 'Togo'
console.log(copiedCountries)
console.log(countries)


//Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries

const allCountries = [
    'Albania',
    'Kenya',
    'Bolivia',
    'Canada',
    'Hungary',
    'Denmark',
    'Finland',
    'Germany',
    'Ireland',
    'Japan',
    'Ethiopia'
  ]

  let copiedArray = [];
  for(let i = 0; i<allCountries.length; i++){
    copiedArray.push(allCountries[i])
  }
  console.log(copiedArray)
let sortedCountries = copiedArray.sort()
console.log(sortedCountries)



//Sort the webTechs array and mernStack array
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

  let sortedWebTechs = webTechs.sort();
  console.log(sortedWebTechs)

  let sortedMernStack = mernStack.sort();
  console.log(sortedMernStack)



  //Extract all the countries containing the word 'land' from the countries array and print it as array
console.log(countries)


let countriesWithLand = []
for(let i=0; i<countries.length; i++){
    if(countries[i].includes('land')=== true){
        countriesWithLand.push(countries[i])
    }
}
console.log(countriesWithLand)


//Find the country containing the hightest number of characters in the countries array
console.log(countries)
//get each countries length
let countriesLength = []
for(let i=0; i<countries.length; i++){
    countriesLength.push(countries[i].length)
}
//get the length of the longest word in the array.
console.log(countriesLength)
let sortLength = countriesLength.sort()
console.log(sortLength)
let longestWrdLength = sortLength[sortLength.length-1] 
console.log(longestWrdLength)


let hightestNumOfChar = []
for(let i=0; i<countries.length; i++){
    if(countries[i].length === longestWrdLength === true ){
        hightestNumOfChar.push(countries[i])
    }
}
console.log(hightestNumOfChar)



//Extract all the countries containing only five characters from the countries array and print it as array
let contriesWith5Char = []
for(let i = 0; i<countries.length; i++){
  if(countries[i].length === 5){
    contriesWith5Char.push(countries[i])
  }
}

console.log(contriesWith5Char)


//Extract all the countries containing two or more words from the countries array and print it as array
let countriesWith2WordsUpw = []
for(let i=0; i<countries.length; i++){
  if(countries[i].length >= 2){
    countriesWith2WordsUpw.push(countries[i])
  }
}

console.log(countriesWith2WordsUpw)


//Reverse the countries array and capitalize each country and stored it as an array
console.log(countries)
//reverse countries
let reversedCountries = countries.reverse();
console.log(reversedCountries);
//capitalize each country and stored it as an array
let capitalizedCountries = []
for(let i=0; i<reversedCountries.length; i++){
  capitalizedCountries.push(reversedCountries[i].toUpperCase())
}
console.log(capitalizedCountries)
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
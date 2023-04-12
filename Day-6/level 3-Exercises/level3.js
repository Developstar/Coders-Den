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
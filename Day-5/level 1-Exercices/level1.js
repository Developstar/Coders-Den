//Declare an empty array;
let array = []
let array2 = new Array()
let array3 = Array()

// // Declare an array with more than 5 number of elements
let players = ['Ronaldo', 'Messi', 'Mbappe', 'Bruno', 'Degea', 'Casemiro',]

// // Find the length of your array
let lengthOfMyArray = players.length;
console.log(lengthOfMyArray);

// // Get the first item, the middle item and the last item of the array

//Get the first item, the middle item and the last item of the array
//firstItem

let firstItem = fiveNumArray[0];
console.log(firstItem)

//midddle item
if(fiveNumArray.length % 2 != 0 ){
    let middleNumIndex = Math.floor(fiveNumArray.length / 2)
    let middleItem = fiveNumArray[middleNumIndex]
    console.log(middleItem)
}else if(fiveNumArray.length % 2 === 0){
    let middleNumIndex = Math.floor(fiveNumArray.length / 2)
    let middleItem1 = fiveNumArray[middleNumIndex]
    let middleItem2 = fiveNumArray[middleNumIndex - 1] 
    console.log(middleItem1, middleItem2)
}else{
    console.log(`not a valid input`)
}

//last item
let lastItemIndex = fiveNumArray.length-1
let lastItem = fiveNumArray[lastItemIndex]
console.log(lastItem) 



// // Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

let mixedDataTypes = [1,'Ade', true, ['cow', 'got'], {firstName: 'Boluwatife', secondName: 'Boluwatife'}, undefined ]
 console.log(mixedDataTypes.length)

// Declare an array variable name it Companies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

let companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// // Print the array using console.log()
console.log(companies);



//Print the first company, middle and last company

let firstCompany = itCompanies[0]
console.log(firstCompany)

//let middle company

if(itCompanies % 2 === 0){
    let middleCompany1 = firstCompany[(itCompanies.length) / 2] 
    let middleCompany2 = firstCompany[middleCompany1 - 1] 
    let middleCompany = `${middleCompany1},${middleCompany2}`
    console.log(middleCompany)
}else if(itCompanies % 2 != 0){
    let middleCompany = itCompanies[Math.floor(itCompanies.length / 2)]
    console.log(middleCompany)
}else{
    console.log('an error occured')
}

// let last company 

console.log(lastCompany = itCompanies[itCompanies.length-1] ) 



// Change each company name to uppercase one by one and print them out
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

itCompanies[0] = itCompanies[0].toUpperCase()
itCompanies[1] = itCompanies[1].toUpperCase()
itCompanies[2] = itCompanies[2].toUpperCase()
itCompanies[3] = itCompanies[3].toUpperCase()
itCompanies[4] = itCompanies[4].toUpperCase()
itCompanies[5] = itCompanies[5].toUpperCase()
itCompanies[6] = itCompanies[6].toUpperCase()

console.log(itCompanies)



// // Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

// console.log(companies.join())

 let arrayToString = `${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]}, and ${itCompanies[6]} are big IT companies}`
 console.log(arrayToString)



// // Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

let indexOfApple = companies.indexOf('APPLE')
if(indexOfApple === -1){
    console.log('This company is nt found')
}else{
    console.log(`${companies[indexOfApple]} exist`)
}

// // Sort the array using sort() method
console.log(companies)

// let sort = companies.sort();
console.log(sort)

 // Reverse the array using reverse() method
console.log(companies)
let reverse = companies.reverse()
console.log(reverse)

// // Slice out the first 3 companies from the array
console.log(companies)
let slice = companies.slice(0, 3)
console.log(slice)

// // Slice out the last 3 companies from the array
console.log(companies)
let lastThree = companies.slice(4)
console.log(lastThree)

// // Slice out the middle IT company or companies from the array
console.log(companies)
// Check if an array length is an odd number of even number 
if(companies.length % 2 === 0){
    console.log('even number')
}else{
    console.log('odd number')
};
//how to get the middle element in an Array if array.length is odd number
let middElementIndex = Math.floor(companies.length / 2)
console.log(middElementIndex)
//slice the middle number
let companySlice = companies.slice(middElementIndex, 4)
console.log(companySlice)

// Remove the first IT company from the array
console.log(companies)
let RemoveFirstCompany = companies.shift(companies[0])
console.log(companies);


// Remove the middle IT company or companies from the array
let companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// middle element in an Array if array.length is odd number
let middElementIndex = Math.floor(companies.length / 2)
console.log(middElementIndex);
// Remove the middle IT company or companies from the array
let removeMiddleItCompany = companies.splice(3, 1)
console.log(companies)


// Remove the last IT company from the array
let Companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
//get the last element in the array
let lastElementIndex = Companies.length - 1;
console.log(lastElementIndex)
let removeLastCompany = Companies.splice(6, 1);
console.log(Companies)

// Remove all IT companies
let removeAllelement = Companies.splice(0,6)
console.log(Companies)



const numbers = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(numbers.toString())



















// // Declare an empty array;
// let emptyArray = Array()

// // Declare an array with more than 5 number of elements
// let players = ['Ronaldo', 'Messi', 'Mbappe', 'Bruno', 'Degea', 'Casemiro',]

// // Find the length of your array
// let lengthOfMyArray = players.length;
// console.log(lengthOfMyArray);

// // Get the first item, the middle item and the last item of the array

// let firstItem = players[0]
// console.log(firstItem)


// // get the middle item
// // reversed the order of the array
// players = players.reverse()
// // check if the length of the array is odd or even
// if( players.length % 2 === 1){
//     let middleIndex = Math.floor(players.length / 2);
//     let middleNum = players[middleIndex];
//     console.log(middleNum);
// }else{
//     let middleIndex1 = players.length / 2;
//     let middleIndex2 = middleIndex1 - 1
//     let middleElement1 = players[middleIndex1]
//     let middleElement2 = players[middleIndex2]
//     // reverse the list
    
//     console.log(`${middleElement1} , ${middleElement2}`)
// }

// // last element in the array
// //Reverse the array back to its normal state
// players = players.reverse()
// let lastElementIndex = players.length - 1;
// let lastElement = players[lastElementIndex]

// console.log(lastElement)



// // Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

// let mixedDataTypes = [1,'Ade', true, ['cow', 'got'], {firstName: 'Boluwatife', secondName: 'Boluwatife'}, undefined ]
// console.log(mixedDataTypes.length)

// // Declare an array variable name it Companies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

// let companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// // Print the array using console.log()
// console.log(companies);

// // Print the first company, middle and last company

// let firstCompany = companies[0]
// console.log(firstCompany)

// //Middle
// // check if array length is even or odd
// let arrayLength = companies.length
// console.log(arrayLength)
// //Get the middle number
// let middleIndex = Math.floor(arrayLength / 2)
// let middleCompany = companies[middleIndex]
// console.log(middleCompany)


// // Print out each company
// console.log(companies[0])
// console.log(companies[1])
// console.log(companies[2])
// console.log(companies[3])
// console.log(companies[4])
// console.log(companies[5])
// console.log(companies[6])

// // Change each company name to uppercase one by one and print them out

// let companyOne = companies[0]
// companies[0] = companyOne.toUpperCase()
// console.log(companies);

// let companyTwo = companies[1];
// companies[1] = companyTwo.toUpperCase();
// console.log(companies)

// let companyThree = companies[2];
// companies[2] = companyThree.toUpperCase();
// console.log(companies)

// let companyFour = companies[3]
// companies[3] = companyFour.toUpperCase();
// console.log(companies);

// let companyFive = companies[5];
// companies[5] = companyFive.toUpperCase();
// console.log(companies)

// let companySeven = companies[6];
// companies[6] = companySeven.toUpperCase();
// console.log(companies)


// // Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

// console.log(companies.join())


// // Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

// let indexOfApple = companies.indexOf('APPLE')
// if(indexOfApple === -1){
//     console.log('This company is nt found')
// }else{
//     console.log(`${companies[indexOfApple]} exist`)
// }

// // Sort the array using sort() method
// console.log(companies)

// let sort = companies.sort();
// console.log(sort)

// // Reverse the array using reverse() method
// console.log(companies)
// let reverse = companies.reverse()
// console.log(reverse)

// // Slice out the first 3 companies from the array
// console.log(companies)
// let slice = companies.slice(0, 3)
// console.log(slice)

// // Slice out the last 3 companies from the array
// console.log(companies)
// let lastThree = companies.slice(4)
// console.log(lastThree)

// // Slice out the middle IT company or companies from the array
// console.log(companies)
// // Check if an array length is an odd number of even number 
// if(companies.length % 2 === 0){
//     console.log('even number')
// }else{
//     console.log('odd number')
// };
// //how to get the middle element in an Array if array.length is odd number
// let middElementIndex = Math.floor(companies.length / 2)
// console.log(middElementIndex)
// //slice the middle number
// let companySlice = companies.slice(middElementIndex, 4)
// console.log(companySlice)

// // Remove the first IT company from the array
// console.log(companies)
// let RemoveFirstCompany = companies.shift(companies[0])
// console.log(companies);


// Remove the middle IT company or companies from the array
// let companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
//middle element in an Array if array.length is odd number
// let middElementIndex = Math.floor(companies.length / 2)
// console.log(middElementIndex);
//Remove the middle IT company or companies from the array
// let removeMiddleItCompany = companies.splice(3, 1)
// console.log(companies)


// Remove the last IT company from the array
// let Companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
//get the last element in the array
// let lastElementIndex = Companies.length - 1;
// console.log(lastElementIndex)
// let removeLastCompany = Companies.splice(6, 1);
// console.log(Companies)

// Remove all IT companies
// let removeAllelement = Companies.splice(0,6)
// console.log(Companies)



// const numbers = [1, 2, 3, 4, 5, 3, 1, 2]

// console.log(numbers.toString())




//Declare an empty array;
let array = []
let array2 = new Array()
let array3 = Array()


//Declare an array with more than 5 number of elements

let fiveNumArray = ['Ade', 'Tola', 'Bolu', 'Segun', 'Tade']

//Find the length of your array
console.log(fiveNumArray.length)

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
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
ages.sort();
console.log(ages)
//minAge
let minAge = ages[0]
console.log(minAge)
//maxAge
let maxAgeIndex = ages.length - 1
console.log(maxAgeIndex)
let maxAge = ages[maxAgeIndex]
console.log(maxAge)


// Find the median age(one middle item or two middle items divided by two)
//To get if array length is odd or even number
if (ages.length % 2 === 0) {
    console.log('ages array length is even number')
} else {
    console.log('ages array length is odd')
}

//get the middle items of the array is array length is even
let firstMiddleElementIndex = ages.length/2
console.log(firstMiddleElementIndex)
let firstMiddleElement = ages[firstMiddleElementIndex]
console.log(firstMiddleElement)
let secondMiddleElementIndex = firstMiddleElementIndex-1
console.log(secondMiddleElementIndex)
let secondMiddleElement = ages[secondMiddleElementIndex];
console.log(secondMiddleElement)

//Median
let median = (firstMiddleElement + secondMiddleElement) / 2
console.log(median)
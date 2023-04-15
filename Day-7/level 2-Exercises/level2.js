// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
let array = [1,2,3,4,5,6]

function printArray(array){
    for(let i = 0; i<array.length; i++){
        console.log(array[i])
    }
}

printArray(array)


//Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

function showDateTime(){
let now = new Date(), day = now.getDate(), month = now.getMonth(), year = now.getFullYear(), hour = now.getHours(), minute = now.getMinutes()
console.log(`${day}/${month}/${year} ${hour}:${minute}`)
}

showDateTime()
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


// Declare a function name swapValues. This function swaps value of x to y.
// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4

function swapValues(x, y){
    let input1 = x;
    let input2 = y;
    console.log(`x => ${y}, y=>${x}`)
}

swapValues(5,4)
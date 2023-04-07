// Iterate 0 to 10 using for loop, do the same using while and do while loop

//for
for(let i = 0; i <= 10; i++){
    console.log(i)
}

//while
let i = 0
while( i <= 10){
   console.log(i)
   i++

}

//do while
let i = 0
do{
    console.log(i)
    i++
}while(i <= 10)

// Iterate 0 to n using for loop

let n = 15

for(i = 0; i<= n; i++){
  console.log(i)
}

// Write a loop that makes the following pattern using console.log():
// #
// ##
// ###
// ####
// #####
// ######
// #######


for(let i = 1; i <= 7; i++){
  let line = '';
  for(let n = 0; n < i; n++){
    line += '#'

  }
    console.log(line)
 }




// Use loop to print the following pattern:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

for(let i = 0; i <= 10; i++ ){
    console.log(`${i} x ${i} = ${i * i}`)
}

//another method
for(let i = 1; i <= 11; i++){
  let line = ''
  for(let n = 0; n < i; n++ ){
    line = `${n} x ${n} = ${n*n}`
  }
  console.log(line)
}


// Using loop print the following pattern

//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000

console.log(`i  i^2  i^3`)
for(let i = 0; i <= 10; i++){
    console.log(`${i}   ${i**2}   ${i**3}`)
}

// Use for loop to iterate from 0 to 100 and print only even numbers

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Use for loop to iterate from 0 to 100 and print only odd numbers

for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}


// Use for loop to iterate from 0 to 100 and print only prime numbers

for (let i = 2; i <= 100; i++) {
    let prime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      console.log(i);
    }
  }
  
// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0
for(let i = 0; i <= 100; i++){
  sum += i
  console.log(sum)
}



//use for loop to iterate from  0-100 and print the sum of all even numbers and the sum of all odds
let sumOfEven = 0
let sumOfOdd = 0
for(let i = 0; i<=100; i++){
  //sumOfEven numbers
  if(i % 2 != 0){
    continue
  }
  console.log(sumOfEven += i)
  
}

for(let i = 0; i<=100; i++){
  //sumOfOdd number
  if(i % 2 == 0){
    continue
  }
  console.log(sumOfOdd += i)
  
}





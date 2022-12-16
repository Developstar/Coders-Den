// Iterate 0 to 10 using for loop, do the same using while and do while loop
// for
// for(let i = 0; i <= 10; i++){
//     console.log(i)
// }

//while
// let i = 0
// while( i <= 10){
//    console.log(i) 
//    i++
    
// }

//do while
// let i = 0
// do{
//     console.log(i)
//     i++
// }while(i <= 10)

// Write a loop that makes the following pattern using console.log():
// #
// ##
// ###
// ####
// #####
// ######
// #######

// for(let i = 1; i <= 7; i++){
//   let line = '';
//   for(let n = 0; n < i; n++){
//     line += '#'
    
//   }
//     console.log(line)
//  }



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


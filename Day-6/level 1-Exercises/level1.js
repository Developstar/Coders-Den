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

for(let i = 1; i <= 7; i++){
  let line = '';
  for(let n = 0; n < i; n++){
    line += '#'
    
  }
    console.log(line)
 }


 



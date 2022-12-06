// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// let userAge = prompt('Enter your age')

// switch(true){
//     case userAge >= 18 :
//     alert('You are old enough to drive');
//     break;

//     default:
//         alert(`Sorry you'll have to wait for ${18 - userAge} year(s) before you can drive`);
// }


// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

let myAge = 24

let yourAge = prompt('Enter your Age')

if(yourAge > myAge){
    console.log(`you are ${yourAge - myAge} years older than me`)
}else{
    console.log('I am older than you are')
}
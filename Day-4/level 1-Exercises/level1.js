// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let userAge = prompt('Enter your age')

switch(true){
    case userAge >= 18 :
    alert('You are old enough to drive');
    break;

    default:
        alert(`Sorry you'll have to wait for ${18 - userAge} year(s) before you can drive`);
}
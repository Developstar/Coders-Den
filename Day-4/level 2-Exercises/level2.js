// Write a code which can give grades to students according to theirs scores:
// 90-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F


// let userScore = prompt('Enter your score here')
// let score = parseInt(userScore)


// switch(true){
//     case  score >= 90 :
//     console.log('your grade = A')
//     break

//     case score >= 70:
//     console.log('your grade = B')
//     break

//     case score >= 60:
//     console.log('your grade = C')
//     break

//     case score >= 50:
//         console.log('your grade = E')
//         break

//     case score >= 0:
//         console.log('Your grade = F' )
//         break

//     default:
//         console.log('Not a number')
// }


// let userInput = prompt("Enter you score")

// let grade = userInput;

// if(grade <= 49){
//     alert(`you had an F`)
// }else if(grade <= 59){
//     alert(`you had a D`)
// }else if(grade <= 69){
//     alert(`you had a C`)
// }else if(grade <= 89){
//     alert(`you had a B`)
// }else if(grade <= 100){
//     alert(`you had A`)
// }else{
//     alert(`Not a valid score`)
// }


// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer


// let userInput = prompt('What month are we?')
// let month = userInput.toLowerCase()


// switch(month){
//     case "september"  :
//     case  "october"   :
//     case  "november"  :
//         console.log('the season is Autumn')
//         break;
//     case  "december" :
//     case  "january"  :
//     case  "february" :  
//         console.log('the season is Winter')
//         break;
//     default :
//     console.log('Invalid input')
//     break;
// }


// Check if a day is weekend day or a working day. Your script will take day as an input.

// let userInput = prompt('What is the day  today?')
// this converts whatever the user writes to a lowerCase. This is to ensure that we do not have generic answers
// let day = userInput.toLowerCase()

    // this makes the first letter of the user's input always capital letter and the other letters in lowerCase
    // day = day[0].toUpperCase() + day.substring(1)

    // if(day === 'monday'){
    //     alert('Monday is a working day')
    // }else if (day === 'tuesday') {
    //     alert('Tuesday is a working day')
    // }else if(day === 'wednesday'){
    //     alert('Wednesday is a working day')
    // }else if(day === 'thursday'){
    //     alert('Thursday is a working day')
    // }else if(day === 'friday'){
    //     alert('Friday is a working day')
    // }else if(day === 'saturday'){
    //     alert('Saturday is a weekend day')
    // }else if(day === 'sunday'){
    //     alert('Sunday is a weekend day')
    // }else{
    //     alert(`${userInput} is Not a valid day in a week`)
    // }



    // Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

 
// let userInput = prompt("What Month is it?");

// let season = userInput.toLowerCase()

// switch(season){
//     case 'september':
//     case 'october':
//     case 'november':
//         alert('the season is Autumn')
//         break
//     case  'december':
//     case  'january':
//     case  'february':
//         alert('the season is Winter')
//         break
//     case  'march':
//     case  'april':
//     case  'may':
//         alert('the season is Spring')
//         break
//     case  'june':
//     case  'july':
//     case  'august':
//         alert('the season is Spring')
//         break
//     default: alert('not a valid month')

// }



// Check if a day is weekend day or a working day. Your script will take day as an input.

// What is the day  today? Saturday
// Saturday is a weekend.

// What is the day today? saturDaY
// Saturday is a weekend.

// What is the day today? Friday
// Friday is a working day.

// What is the day today? FrIDAy
// Friday is a working day.








// Write a program which tells the number of days in a month.
// Enter a month: January
// January has 31 days.

// Enter a month: JANUARY
// January has 31 day

// Enter a month: February
// February has 28 days.

// Enter a month: FEbruary
// February has 28 days.


let userInput = prompt('Enter a month');
let month = userInput

switch(month){
    case 'september' :
    case 'april':
    case 'june':
    case 'november':
        alert(`${month} has 30 days`)
        break;
    case 'february':
        alert(`${month} has 28 days`)
        break;
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        alert(`${month} has 31 days`)
        break;
}
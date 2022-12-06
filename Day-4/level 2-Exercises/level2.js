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


// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer


let userInput = prompt('What month are we?')
let month = userInput.toLowerCase()


switch(month){
    case "september"  :
    case  "october"   :
    case  "november"  :
        console.log('the season is Autumn')
        break;
    case  "december" :
    case  "january"  :
    case  "february" :  
        console.log('the season is Winter')
        break;
    default :
    console.log('Invalid input')
    break;
}



// Write a program which tells the number of days in a month.

let userInput = prompt("Enter a month");
let monthToLowr = userInput.toLowerCase();
let    month = monthToLowr[0].toUpperCase() + monthToLowr.substring(1)

switch (monthToLowr) {
  case 'january':
  case 'march':
  case 'may':
  case 'july':
  case 'october':
  case 'december':
  case 'july'
  :
    console.log(`${month} has 30 days`);
    break;

  case 'september':
  case 'april':
  case 'june':
  case 'november':
    console.log(`${month} has 30 days`);
    break;

  case 'february':
    console.log(`${month} has 28 days`);
    break;

  default:
    console.log(`${userInput} is not a valid month in a year`);
}

// alert(`${month} has ${num} days` )

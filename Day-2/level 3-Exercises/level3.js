// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

let sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'

let pattern = /love/gi
let num = sentence.match(pattern)
console.log(num);
let numOfLove = num.length;
console.log(numOfLove)


// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let sent = 'You cannot end a sentence with because because because is a conjunction';
let pattern2 = /because/g

let allBecause = sent.match(pattern2)
console.log(allBecause)

// number of all because 

let numOfBecause = allBecause.length;
console.log(numOfBecause)


// Clean the following text and find the most frequent word (hint, use replace and regular expressions).
 const sentenc = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

 let cleanUp = sentenc.replace('%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching', 'I am a teacher, and I love teaching. There is nothing as  more rewarding as educating and empowering people. I found teaching more interesting than other jobs. Does this motivate you to be a teacher? This 30DaysOfJavaScript is also the result of love of teaching')

 console.log(cleanUp)


//  Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let wholeSentence = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

//get the index and extract  the incomes
let firstIncomeIndex = wholeSentence.search(5000);
console.log(firstIncomeIndex);
let firstIncome = wholeSentence.substring(9,13)
console.log(firstIncome);

let secondIncomeIndex = wholeSentence.search(1000);
console.log(secondIncomeIndex);
let secondIncome = wholeSentence.substring(42, 46);
console.log(secondIncome)

let thirdIncomeIndex = wholeSentence.search(15000);
console.log(thirdIncomeIndex);
let thirdIncome = wholeSentence.substring(67, 72)
console.log(thirdIncome)


//Monthly salary
 firstIncome = parseInt(firstIncome)   
 secondIncome = parseInt(secondIncome)
 thirdIncome = parseInt(thirdIncome)

 let totalIncome = firstIncome + secondIncome + thirdIncome;

 console.log(totalIncome)


 
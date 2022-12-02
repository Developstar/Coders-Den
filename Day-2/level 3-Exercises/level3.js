// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

let sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'

let pattern = /love/gi
let num = sentence.match(pattern)
console.log(num);
let numOfLove = num.length;
console.log(numOfLove)
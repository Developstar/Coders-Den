// Develop a small script which generate any number of characters random id:
// fe3jo1gl124g,    xkqci4utda1lmbelpkm03rba

let n = Math.floor(Math.random()*(25-5+1)) + 5
let characters = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q',1,2,3,4,5,6,7,8,9]
let idInArray = []
for(let i = 1; i<= n; i++){
    let randomIndex = Math.floor(Math.random()*26)
    let each = characters[randomIndex]
    idInArray.push(each)  
}

console.log(idInArray)
let randomId = idInArray.join('')
console.log(randomId)


// Write a script which generates a random hexadecimal number.

let m = Math.floor(Math.random()*(7-5+1)) + 7
let char = ['a','c', 'b', 'd','e','g','h','i','j','k','l','f','m','n','o','p','q',1,2,3,4,5,6,7,8,9]
let idArrayy = []
for(let i = 1; i<= m; i++){
    let randomI = Math.floor(Math.random()*26)
    let each = char[randomI]
    idArrayy.push(each)  
}

idArrayy[0] = "#"
console.log(idArrayy)

let ranId = idArrayy.join('')
console.log(ranId)

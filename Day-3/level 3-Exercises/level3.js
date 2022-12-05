// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYYY-MM-DD HH:mm eg. 2020-01-02 07:05

let now = new Date();
console.log(now)


let year = now.getFullYear()
let month = now.getMonth()
let day = now.getDate()
console.log(day)
let hour = now.getHours();
let minutes = now.getMinutes();


// YYYY-MM-DD HH:mm
console.log(`${year}-${month}-0${day} ${hour}:${minutes}`)

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  
  //Find the person who has many skills in the users object.
  let person = Object.entries(users)

  function highest(){
let skillsNum = [];
for(let i=0; i<person.length; i++){
  skillsNum.push(person[i][1].skills.length)
}
skillsNum.sort()

for(let i=0; i<person.length; i++){
  if(person[i][1].skills.length === skillsNum[skillsNum.length-1]){
    console.log(person[i][0])
  }
}

  }

  highest()



  //Find people who are MERN stack developer from the users object

  function mernDevs(){

let mernStackDev = []
for(let i=0; i<person.length; i++){
  if(person[i][1].skills.includes('MongoDB') && person[i][1].skills.includes('Express') && person[i][1].skills.includes('React') && person[i][1].skills.includes('Node')){
    let individuals = person[i][0];
    mernStackDev.push(individuals)
  }
}
console.log(mernStackDev)

  }

  mernDevs()
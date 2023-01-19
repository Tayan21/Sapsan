



// const person = {
//    name: "Tayan",
//    surname: "Bostybaev",
//    age: 30,
//    lang: ['HTML', 'CSS', 'JS'],
//    sayHello: function() {
//       console.log(`Hello, ${person.name}!`)
//    } 
// }

// for(key in person) {
//    console.log(key)
//    console.log(person[key])
// }

// person.sayHello()

//HW
 const sapsanStudent = {}

 sapsanStudent.name = "Saule"
 sapsanStudent.surname = "Nazarbayeva"
 sapsanStudent.name = "Akmaral"
 console.log(sapsanStudent)
 delete(sapsanStudent.name)
 delete(sapsanStudent.surname)
 console.log(sapsanStudent)

function isEmpty(obj) {
   for(key in obj) {
      if(obj.hasOwnProperty(key)) {
         return false
      }
   }
   return true
}
const res = {}
console.log(isEmpty(sapsanStudent))

const myFamily = {
   me: {
      name: 'Tayan',
      age: 30,
      zodiacSign: 'cancer',
      chineseHorocsop: 'monkey',
   },
   mother: {
      name: 'Roza',
      age: 58,
      zodiacSign: 'saggitarius',
      chineseHorocsop: 'dragon',
   },
   father: {
      name: 'Rakhymzhan',
      age: 58,
      zodiacSign: 'gemini',
      chineseHorocsop: 'dragon',
   },
   sister: {
      name: 'Asel',
      age: 31,
      zodiacSign: 'libra',
      chineseHorocsop: 'horse',
   },
}

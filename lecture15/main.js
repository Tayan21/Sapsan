



/*
function greeting() {
   let name = prompt('write name')
   let surname = prompt('write surname')
   let age = prompt('write age')
   if(age >= 21) {
      console.log(`Hello, ${surname} ${name}! You can buy alcohol`)
   } else {
      console.log(`Hello, ${surname} ${name}! You can't buy alcohol`)
   }
}

greeting()*/

//HW TASK1
// let a = +prompt('Write first number')
// let b = +prompt('Write second number')


// function calculator(a, b) {
//    console.log(a+b)
//    console.log(a-b)
//    console.log(a*b)
//    console.log(a/b)   
// }
// calculator(a, b)

//HW TASK 2
// let a = prompt('Write first argument')
// let b = +prompt('Write second argument')

// function fill(a, b) {
//    let arr = []
//    for(let i = 0; i < b; i++){
//       arr.push(a)
//    }
//    console.log(arr)
// }

// fill(a, b)

//HW TASK3
let arr = [1, 2, 4, 5, 6, 7]
let b = 7

function cut(arr, b) {
   let res = []
   for(let i = 0; i < arr.length; i++){
      if(arr[i] === b) {
         continue
      }else{
         res.push(arr[i])
      }
   }
   console.log(res)
}

cut(arr, b)
/*let height = +prompt("Your height?");
let circle = +prompt('circle');
let isMan = confirm("are you man?");

if(isMan) {
   console.log(64 - (20 + height / circle));
} else {
   console.log(74 - (20 + height / cirlce));
}

let age = +prompt("Right your age");

if(age >= 0 && age <= 13) {
   console.log("You are child");
} else if(age >= 14 && age <= 21) {
   console.log("You are teenager");
} else if(age >= 22 && age <= 30) {
   console.log("It's the best years of your life");
} else {
   console.log("You are adult");
}*/
/*
let a = +prompt("Write number");
let b = +prompt("Write number");
a % b === 0 ? console.log("reminder") : console.log("not reminder");*/
/*
let a = +prompt("Write number");
let b = +prompt("Write number");
a > b ? console.log("bigger") : a < b ? console.log("smaller") : console.log("equal");*/

/*let b = 1

while(b <= 10) {
   console.log("3 * " + b + " = " + b*3)
   b++
}*/

// SUM
// let a = +prompt("Write number");
// let result = 0;
// for(let i = 1; i <= a; i++) {
//    result += i;
// }
// console.log(result)

//FIND ODD

// let a = +prompt("Write number");
// for(let i = 1; i <= a; i++) {
//    if(i % 2 !== 0) {
//       console.log(i)
//    }
// }

//FIND EVEN
// let a = +prompt("Write number");
// for(let i = 1; i <= a; i++) {
//    if(i % 2 === 0) {
//       console.log(i)
//    }
// }

//MULIPLICATION TABLE
// let a = +prompt("Write number");
// for(let i = 1; i <= 10; i++) {
//    console.log(i + " x " + a + " = " + a*i)
// }

// REVERSE MULIPLICATION TABLE
// let a = +prompt("Write number");
// for(let i = 10; i >= 1; i--) {
//    console.log(i + " x " + a + " = " + a*i)
// }


//PRIME NUMBERS
const isPrime = () => {
   let a = +prompt("Write number");
   if(a == 2) {
       return 'yes'
   }

   for(let i = 2; i < a; i++) {
      if(a % i === 0) {
         return 'no'
      }
   }
   return "yes"
}

console.log(isPrime())


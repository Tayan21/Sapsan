/*let height = +prompt("Your height?");
let circle = +prompt('circle');
let isMan = confirm("are you man?");

if(isMan) {
   console.log(64 - (20 + height / circle));
} else {
   console.log(74 - (20 + height / cirlce));
}
*/
let age = +prompt("Right your age");

if(age <= 13) {
   console.log("You are child");
} else if(age <= 21) {
   console.log("You are teenager");
} else if(age <= 30) {
   console.log("It's the best years of yourr life");
} else {
   console.log("You are adult");
}
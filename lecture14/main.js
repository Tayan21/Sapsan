

// HW TASK1
console.log("TASK 1")
let arr = []

for(let i = 1; i <= 100; i++) {
   arr.push(i)
}
console.log(arr)

for(let i = 0; i < arr.length; i++) {
   console.log(arr[i])
}

let arrRev = []
for(let i = arr.length - 1; i >= 0; i--) {
   arrRev.push(arr[i])
}
console.log(arrRev)

for(let i = 0; i < arrRev.length; i++) {
   console.log(arrRev[i])
}

//HW TASK2
console.log("TASK 2")
let arrOdd = []
for(let i = 1; i <= 99; i++) {
   if(i % 2 !== 0) {
      arrOdd.push(i)
   }
}
console.log(arrOdd)

//HW TASK3 and TASK4
console.log("TASK 3")
let arrEven = []
let sum = 0
for(let i = 2; i <= 20; i++) {
   if(i % 2 === 0) {
      arrEven.push(i)
      sum += i
      console.log(i)
   }
}
console.log("TASK 4")
console.log(sum)

//HW TASK5
console.log("TASK 5")
let arr5 = [null, 2, false, 5, 3, undefined, 7, '', 0, 8, 9]
let res = []
for(let i = 0; i < arr5.length; i++) {
   if(arr5[i]) {
      res.push(arr5[i])
   }
}
console.log(res)

//HW TASK6
console.log("TASK 6")
let arrNotSort = [12, 43, 65, 2, 4, 76, 98, 56]
let maxNum = -Infinity
for(let i = 0; i < arrNotSort.length; i++) {
   if(arrNotSort[i] > maxNum) {
      maxNum = arrNotSort[i]
   }
}
console.log(maxNum)


//HW TASK7
console.log("TASK 7")
let minNum = Infinity
for(let i = 0; i < arrNotSort.length; i++) {
   if(arrNotSort[i] < minNum) {
      minNum = arrNotSort[i]
   }
}
console.log(minNum)

//HW TASK8

console.log("TASK 8")
let arr1 = [1, 2, 3, 4]
let arr2 = [1, 2, 3]
let temp = true
if (arr1.length == arr2.length) {
   for(let i = 0; i < arr1.length; i++) {
      if(arr1[i] !== arr2[i]) {
         console.log('no')
         temp = false
         break
      }
   }
}else {
   temp = false
   console.log('no')
}

if(temp) {
   console.log('yes')
}

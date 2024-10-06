 let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
let num_even_more = [211, 212, 213, 214, 415, 416, 417, 418, 419]
console.log(num1.length)
delete num1[0]
console.log(num1.length)

let newArray = num1.concat(num_more, num_even_more)//three two arry  and creat a new arry
console.log(newArray)
console.log(num1, num_more)

// sort method
let num2 = [1656, 2777, 38, 4878, 75, 6, 7, 8, 9]
num2.sort()
console.log(num2)//alpahbat mai sort kar raha hai number ko laker
// sort in assending order

let compare = (a, b)=>{
  return b - a
}
//desanding oder shoting
let compare1 = (a, b)=>{
  return a-b
}
let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
num.sort(compare)
num.sort(compare1)
num.reverse()
console.log(num)
// Splice and Slice
//splice
let number = [551, 22, 3, 14, 5, 6, 7, 8, 229]
let deletedValues = number.splice(2, 4, 1021, 1022, 1023, 1024, 1025)
// 2 : is position of starting
// 4: is number of remove
console.log(number)
console.log(deletedValues)
//slice
let newNum = number.slice(3)
let wNum1= number.slice(3, 5)
console.log(newNum)
console.log(wNum1)
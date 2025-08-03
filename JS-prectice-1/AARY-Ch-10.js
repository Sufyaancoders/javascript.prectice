//Array Methods
let num = [1, 2, 3, 34, 99]
let b = num.toString() // b is now a string 
console.log(b, typeof b)
let c = num.join(" and ")
console.log(c, typeof c)
let s = num.pop() // pop returns the popped element
console.log(num, s)
let m = num.push(56) // push returns the new array length
console.log(num, m)

let r = num.shift()
console.log(r, num) // Removes an element from the start of the array

let i= num.unshift(78)
console.log(i, num);
console.log(r);

let arr = [45, 23, 21]
// Array map method
let a = arr.map((value, index, array) => {
   console.log(value, index, array)
  return value + index
})
 console.log(arr)
console.log(a)
let b= arr.map((value, index, array) => {
  console.log(value, index, array)
 return index++
})
console.log(b)
// Array filter method
let arr2 = [45, 23, 21, 0, 3, 5]
let a2 = arr2.filter =(a) => {
  //console.log(arr2) 
  return a+a
}
 console.log(a2, arr2)

// Array reduce method
let arr3 = [1, 2, 3, 5, 2, 1]
const reduce_func = (h1, h2) => {
  console.log(arr3)
  return h1+h2
}//true check when you use return h1<10
let newarr3 = arr3.reduce(reduce_func)//count the number but filter method
// is not count only check
console.log(newarr3)
console.log(arr3)
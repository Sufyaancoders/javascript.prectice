let arr = [45, 23, 21]
// Array map method
let a = arr.map((value, index, array) => {
   console.log(value, index, array)
  return value + index
})
 console.log(arr)
console.log(a, "map method")
let b= arr.map((value, index, array) => {
  console.log(value, index, array)
 return index++
})
console.log(b)
// Array filter method
let arr2 = [45, 23, 21, 0, 3, 5]
let a2 = arr2.filter ((a) => {
  console.log(arr2 ,"filter method") 
  return a+a
})
 console.log(a2, arr2)
// Filter even numbers
let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter(num =>{
 let a =num%2==0;
 console.log(num)
 return a
}
 
);
// Result: [2, 4, 6]

console.log(evenNumbers)
// Filter strings longer than 3 characters
let words = ['hi', 'hello', 'hey', 'howdy'];
let longWords = words.filter(word => word.length > 3);
// Result: ['hello', 'howdy']

// Filter non-null values
let mixed = [0, null, undefined, 1, '', 'hello'];
let validValues = mixed.filter(item => item !== null && item !== undefined);
// Result: [0, 1, '', 'hello']



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
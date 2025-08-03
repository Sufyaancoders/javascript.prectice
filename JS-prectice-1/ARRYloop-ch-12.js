let num = [3, 5, 1, 2, 4]
for(let i=0; i<num.length;i++){
  console.log(num[i])
}
// ForEach Loop
num.forEach((element) => {
  console.log( element)
})
num.forEach((element) => {
  console.log( element*element)
})
//Array.from 
let name = "Harry"
let arr = Array.from(name) 
console.log(arr)
console.log(typeof(arr))
// for...of 
for (let item of num){
  console.log(item)
//console.log(num[item])
}
// for...in
for (let i in num){
//  console.log(num[i])
  console.log( "  ")
  console.log(i)
}
 // Array.fill mathod
let arry= new Array(5).fill(Math.random())
console.log(arry);
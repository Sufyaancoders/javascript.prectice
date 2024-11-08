async function getData(){
let a = await fetch('https://jsonplaceholder.typicode.com/posts/1');// await == wait for the data comming
let b = await a.json(); 
console.log(b);
}
getData();
// .json() convert to object notation ==exampele
// let obj = {
//     name : "Priyansh",}
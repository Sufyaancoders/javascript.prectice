// get api
async function getData(){
let a = await fetch('https://jsonplaceholder.typicode.com/posts/1');// await == wait for the data comming
let b = await a.json(); 
console.log(b);
}
getData();
// .json() convert to object notation ==exampele
// let obj = {
//     name : "Priyansh",}
 //---post API
 async function postData(){
     
 
 let a = {
    method: 'POST',
  body: JSON.stringify({
    title: 'sufyaan',
    body: 'ahmad',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}
let content = await fetch('https://jsonplaceholder.typicode.com/posts',a);
let b = content.json();
return b;
 }
 postData();
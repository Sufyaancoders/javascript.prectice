let arr = ["MyName","is","Priyansh","Patel"];
for(let key of arr) {
    console.log(key);
}

arr = [10,15,20];
for(let key of arr) {
    console.log(key);
}
let Employee = {
  name :"sufyaan",
  age : 20  
}
//key words
for(let key of Object.keys(Employee)){
    // [] ka ander key use krte hai
    console.log(key);
}
//entries words
for(let key of Object.entries(Employee)){
    // [] ka ander key use krte hai
    console.log(key);
}
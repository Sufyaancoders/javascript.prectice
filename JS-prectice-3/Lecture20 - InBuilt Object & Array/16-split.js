let message = "My Name is Priyansh Patel";
console.log(message);

let arr = message.split("is");
// jaha jaha space hai waha split hoga 
// ['My Name ', ' Priyansh Patel' ]
console.log(arr);

arr.forEach(e => console.log(e));
//My
//Name
//is
//Priyansh
//Patel
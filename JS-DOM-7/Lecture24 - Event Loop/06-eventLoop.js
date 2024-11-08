setTimeout(() => {console.log("this is the first message")}, 5000);
setTimeout(() => {console.log("this is the second message")}, 3000);
setTimeout(() => {console.log("this is the third message")}, 1000);
// 1000 , 3000 , 5000 > it will be printed in order of time 
// it will be printed with the help of setTimeout
// Output:

// this is the third message
// this is the second message
// this is the first message

setTimeout(function timer() {
    console.log('You clicked the button!');    
}, 2000);

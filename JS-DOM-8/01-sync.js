setTimeout(() => {
    console.log("This is PRint after seconds");
},300)
function sync() {
    console.log("Sync Function");
}
sync();
console.log("Hello");
//
//-----------------------------
//API === application programming interface
// promise === promise is an object that can run parllely background task
// promise === resolve and reject function 
 let point = new Promise((resolve, reject) => {
     setTimeout(() => {
        console.log("This is PRint after seconds");
         
     },400);
     resolve(221);// reject(221);
 })
 console.log("first");
 console.log(point);
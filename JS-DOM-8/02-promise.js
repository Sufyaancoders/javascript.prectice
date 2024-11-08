let part1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("This is part 1");
    },200);
    resolve(true);
});
let output= part1.then(()=>{
    
let part2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("This is part 2");
    },100);
    resolve("Hello");
})
return part2;
})
output.then((res)=>{ console.log(res); });
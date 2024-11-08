function a() {
    console.log('hi');
    b();
}

function b() {
    console.log('Hello');
}
// stack type function call 
a();
b();
//o/p> 
// hi 
// hello 
//hello
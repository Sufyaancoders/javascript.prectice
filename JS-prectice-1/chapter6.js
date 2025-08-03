let obj = {
    harry: 90,
    shubh: 45,
    shivika: 56,
    ritika: 57,
    shiv: 23
  }
  
  // For in loop
  for (let a in obj) {
    console.log("Marks of " + a + " are " + obj[a]) // (a) is a keypiont if you  use [] braket it access under value
  }
  
  // For of loop
  for (let b of "harrash") 
    // (of) use in arry with string
    {
    console.log(b)
  }
  
  const item ={
    name  : "sufyaan ahmad",
    age  : "20"
 }
 for (let i=0; i<Object.keys(item).length;i++){
 console.log("the "+Object.keys(item)[i]+"and"+item[Object.keys(item)[i]])
 }
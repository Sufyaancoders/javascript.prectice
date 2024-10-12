let arr = [1,2,3,4,5,6];
console.log(arr);


let newArray = arr.slice();
console.log(newArray);
//0 is start index and -1 is end index -1 shows last element
newArray = arr.slice(0, -1);
console.log(newArray);

newArray = arr.slice(2,5);

// 2 is start index and 5 is end index
console.log(newArray);
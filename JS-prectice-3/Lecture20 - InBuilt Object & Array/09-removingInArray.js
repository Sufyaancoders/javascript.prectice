let arr = [1,2,5,4,7];
console.log(arr);

// Remove at Beginning of Array
arr.shift();
console.log(arr);
//[ 2, 5, 4, 7 ]

// Remove at End of Array 
arr.pop();
console.log(arr);
//[ 2, 5, 4 ]

// Remove at Middle 
arr.splice(1,1);
console.log(arr);
//[ 2, 4 ]
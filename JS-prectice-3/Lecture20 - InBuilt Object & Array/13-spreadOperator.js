// Combines two array
let first = [1, 2, 3, 4];
let second = [4, 3, 2, 1];
// spread operator .... copys the array and other methods can be used with the help of concat method
let combine = [...first, ...second];
console.log(combine);
let combine1 = [...first, ...second, "a", true,"b", false]
console.log(combine1);
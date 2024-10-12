const prompt=require('prompt-sync')();
const input = prompt('What\'s your name?');
console.log(`Your name is ${input}`);
let str = '';

for (let i = 65; i <= 220; i++) {
  str += String.fromCodePoint(i);
}
console.log(str);
// Output:
//Now let’s see the characters with codes 65..220 
//(the latin alphabet and a little bit extra) by making a string of them:
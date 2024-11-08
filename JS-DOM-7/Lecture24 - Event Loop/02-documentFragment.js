// using document fragment is increase speed and optimise code
/// update dom node 
let fruits = ["Mangoes","Oranges","Bananas","Strawberry","Apple"];

let list = document.querySelector('ul');
console.log(list);

let t1 = performance.now();
for(let key of fruits)
{
    let item = document.createElement('li');
    item.textContent = key;
// createElement('') >>>== textContent= >>>== appendChild(-)
    list.appendChild(item);
}
let t2 = performance.now();
console.log(`Adding one by one takes time ${t2-t1}ms`);

let listOL = document.querySelector('ol');
console.log(list);
// document fragment is a lite weight document object
t1 = performance.now();
let fragment = document.createDocumentFragment();
for(let key of fruits)
{
    let item = document.createElement('li');
    item.textContent = key;

    fragment.appendChild(item);
}
listOL.appendChild(fragment);
console.log(listOL);
// 1 reflow and 1 repaint
t2 = performance.now();
console.log(`Fragment takes time ${t2-t1}ms`);
//use the Documentfragment to compose DOM node before updating them to the active DOM tree 
//to get better performance 
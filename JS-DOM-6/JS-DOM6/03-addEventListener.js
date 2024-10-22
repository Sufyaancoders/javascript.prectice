// event target>>>> is a interface by object that can recieive event and may have listeners gor them 
//three-type of event>>> == > addEventListener(), removeEventListener(), dispatchEvent()
let btn = document.getElementById('btn');
console.log(btn);   

// function for random 
function random(number){
    return Math.floor(Math.random() * (number + 1));
}

// add event listener
btn.addEventListener('click', () => {
    let red = random(255);
    let green = random(255);
    let blue = random(255);
    let color = `rgb(${red}, ${green}, ${blue})`;
    document.body.style.backgroundColor = color;
});
// js mai css ki property add karth time style.cssText hota hai
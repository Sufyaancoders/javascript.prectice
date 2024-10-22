// pahse of event >>>== 1- capturing phase,
// 2- target phase, 3- bubbling phase
// Sequence - div, -> h1,-> span <== taget , bubble , capturi
let head = document.querySelector('#head');
head.addEventListener('click',function(event){
    alert("target = " + event.target.tagName + ", this=" + this.tagName);
});

head.parentNode.addEventListener('click',function(event){
    alert("target = " + event.target.tagName + ", this=" + this.tagName);
    head.parentNode.parentNode.style.backgroundColor = 'aliceblue';
});

head.parentNode.parentNode.addEventListener('click',function(event){
    alert("target = " + event.target.tagName + ", this=" + this.tagName);
});

// Sequence - span , h1 , div 
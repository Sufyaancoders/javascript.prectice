let link = document.getElementById('link');
link.addEventListener('click',function(e)
{
    e.preventDefault();
});
//preventdefault event is  a event whear the diffrent  event occur other object by default
let a =document.querySelectorAll('a');
let thirdLink= link[2];// secound link as a work diffrent
thirdLink.addEventListener('click', function(event)// first it add event
{event.preventDefault();
    console.log("maza ae gaya ")

})
const profile=document.querySelector(".profile");
setInterval(() => {
    profile.style.border=`6px solid rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`;
}, 1000);

var about=`" A full-stack developer is a web developer or engineer who works with both the front and back ends of a website or application ! "`;

about=about.split("");
var i=0;

const para=document.querySelector(".para")
setInterval(()=>{
    para.innerHTML+=about[i];
    if(i==about.length-1)
    {
        i=0;
        para.innerHTML='';
    }

    i++;
},100)
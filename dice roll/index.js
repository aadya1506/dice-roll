var a;
var b;
a= Math.random()*6;
a=Math.floor(a)+1;
b= Math.random()*6;
b=Math.floor(b)+1;
var c=document.querySelector(".img1").setAttribute("src","images/dice"+a+".png");
var d=document.querySelector(".img2").setAttribute("src","images/dice"+b+".png");
if(a>b){
    document.querySelector("h1").innerText="🚩 Play 1 Wins!";
}
else if(a<b){
    document.querySelector("h1").innerText="🚩 Play 2 Wins!";
}
else if(a===b){
    document.querySelector("h1").innerText="Draw!";
}

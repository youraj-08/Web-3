var k= Math.floor(Math.random() * 6) + 1;
var ri1="images/dice"+k+".png";
var img1=document.getElementsByClassName("img1");
img1[0].src=ri1;

var y= Math.floor(Math.random() * 6) + 1;
var ri2="images/dice"+y+".png";
var img2=document.getElementsByClassName("img2");
img2[0].src=ri2;

if(k>y){
    document.querySelector("h1").innerHTML=" 🚩 Player 1  Won";
}
else if(y>k){
    document.querySelector("h1").innerHTML=" Player 2  Won 🚩 ";
}
else{
    document.querySelector("h1").innerHTML=" It's 💬 Draw";
}



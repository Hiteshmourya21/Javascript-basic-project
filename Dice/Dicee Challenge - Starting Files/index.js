var randn1 = Math.random();
var randn2 = Math.random();
randn1 = Math.floor(randn1*6)+1;
randn2 = Math.floor(randn2*6)+1;
console.log(randn1);
console.log(randn2);

document.querySelector(".img1").setAttribute("src","images/dice"+randn1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randn2+".png");

if(randn1==randn2){
    document.querySelector(".container h1").innerHTML = "Draw";
}
else if(randn1 > randn2){
    document.querySelector(".container h1").innerHTML = "🏆Player 1 Win";
}
else{
    document.querySelector(".container h1").innerHTML = "Player 2 Win🏆";
}
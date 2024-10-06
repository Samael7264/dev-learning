var p1 =  "./images/dice"+ Math.ceil(6*Math.random()) +".png"
var p2 =  "./images/dice"+ Math.ceil(6*Math.random()) +".png"
document.querySelector(".dice .img1").setAttribute("src",p1);
document.querySelector(".dice .img2").setAttribute("src",p2);

if(p1>p2){
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
}else if(p2>p1){
    document.querySelector("h1").textContent = "🚩 Player 2 Wins!";
} else {
    document.querySelector("h1").textContent = "Refresh Me";
}
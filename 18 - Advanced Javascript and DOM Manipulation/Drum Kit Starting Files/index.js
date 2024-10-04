// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick(){
//     alert("I got clicked.");
// }

for (var i=0; i< document.querySelectorAll(".drum").length; i++ ){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        handleClick(this.innerText);
        addAnimation(this.innerText);
    });    
}

for (var i=0; i< document.querySelectorAll(".drum").length; i++ ){
    document.addEventListener("keydown", (event) => {
        handleClick(event.key);
        addAnimation(event.key);
    });
}

// document.querySelectorAll("button")[0].addEventListener("click", handleClick);
var delayInMilliseconds = 100;  //0.1 second

//function to play sounds based on the element interacted with
function handleClick(element){
    var audio;
    switch(element){
        case 'w':
            audio = new Audio("./sounds/crash.mp3")
            break;
        case 'a':
             audio = new Audio("./sounds/kick-bass.mp3")
            break;
        case 's':
             audio = new Audio("./sounds/snare.mp3")
            break; 
        case 'd':
             audio = new Audio("./sounds/tom-1.mp3")
            break; 
        case 'j':
             audio = new Audio("./sounds/tom-2.mp3")
            break; 
        case 'k':
             audio = new Audio("./sounds/tom-3.mp3")
            break;     
        case 'l':
             audio = new Audio("./sounds/tom-4.mp3")
            break;      
        default: console.log(ele);
    }
    audio.play();
    // this.style.color = "white";
    
    
    // setTimeout(function() {
    //     ele.style.color = "red";//your code to be executed after 1 second
    // }, delayInMilliseconds);

}

//function to add animations based on the element interacted with
function addAnimation(element){
    document.querySelector("." + element).classList.add("pressed");     //Add the class pressed for the pressed button
    setTimeout(function() {
        document.querySelector("." + element).classList.remove("pressed");     //Remove the class pressed after waiting for 0.1 second
    }, delayInMilliseconds);
}
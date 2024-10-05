//Array to store button colors.
var color = ["green","red","yellow","blue"];


//Array to store game pattern and User generated Pattern.
var gamePattern = [];
var userClickedPattern = [];

//Variable to keep track of the level
var level = 0;

//variable to keep track of the game start
var started = false;

// for(var i = 0; i< gamePattern.length; i++){

// }

// var gameOver = "Game Over, Press Any Key to Restart!";

//Handling Keyboard Key
$(document).keypress(function(event){
    if(started === false){nextSequence();}
    started = true;
});


//Handling User Clicks
$(".btn").click(function(){
    handleClick(this.id);
});

// Function for behaviour on a user click
function handleClick(button){
    var userChosenColor = button;
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    buttonSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
}

// Function for playing sounds as per the choosen color
function buttonSound(button){
    var audio;
    switch(button){
        case "blue": 
        audio = new Audio("./sounds/blue.mp3")
        break;
        case "yellow": 
        audio = new Audio("./sounds/yellow.mp3")
        break;
        case "green": 
        audio = new Audio("./sounds/green.mp3")
        break;
        case "red": 
        audio = new Audio("./sounds/red.mp3")
        break;
        default: 
        audio = new Audio("./sounds/wrong.mp3")
        break;
    }
    audio.play();
}

// Function for generating game sequence
function nextSequence(){
    var randomNumber = Math.floor(3*Math.random());
    var randomChosenColor = color[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
    buttonSound(randomChosenColor);
    level++;
    $("h1").text("Level " + level);
    userClickedPattern = [];
}


// Function for animating buttons when pressed
function animatePress(currentColor){
    $("."+currentColor).addClass("pressed");
    setTimeout(function(){
        $("."+currentColor).removeClass("pressed");
      }, 100);
    
}

//Function of check User Answer
function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
        console.log("success");
        if(currentLevel === (gamePattern.length - 1)){
            setTimeout(function(){
                nextSequence();
              }, 1000);
        }
    }
    else{
        console.log("wrong");
        new Audio("./sounds/wrong.mp3").play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
          }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}


function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}
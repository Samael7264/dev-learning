/*Basic Function Syntax*/

function function_name(){
    //function definition
}

// use console.log() instead of alert() to get the outputs recorded in the browser console

// Karel IDE for JS functions Practice

/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
    //your code here
    for(int i=0; i<100;i++)
    {moveCircle();}
 }
 
 function moveCircle(){
    move();
    turnLeft();
    move();
    turnLeft();
    move();
    turnLeft();
    move();
    turnLeft();
 }


 //Put Beeper Exercise
 function main(){
    putBeeper();
    moveLeft();
    moveRight();
    putBeeper();
    moveLeft();
    moveRight();
    putBeeper();
    moveLeft();
    moveRight();
    putBeeper();
    moveLeft();
    moveRight();
    putBeeper();
   }
   
   function moveLeft(){
      move();
      turnLeft();
   }
   
   function moveRight(){
      move();
      turnRight();
   }
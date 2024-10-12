//Put Beeper Exercise
 function main(){
 
    chess();
 
 }
 
 function chess(){
    coverFront();
    coverBack();
    coverFront();
    coverBack();
    coverFront();

 }

 function cover(){
    putBeeper();
    move();
    move();
 }

 function coverFront(){
    cover();
    cover();
    putBeeper();  
    turnLeft();
    move();
    turnLeft();
    move();
 }
 function coverBack(){
    cover();
    putBeeper();
    move();
    turnRight();
    move();
    turnRight();
 }
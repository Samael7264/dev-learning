// Random Number Generation

var n = Math.random(); // Genrates random number between 0 to 1 to a 16 digit decimal point excluding 1.

//Psuedo Dice Roll Simulator
console.log(Math.ceil(6*(Math.random(10))));

//Personal Note: Refer to the khan academy video - "Randomness" to learn more about Psuedo Random and Random Numbers.

prompt("Enter your name: ");
prompt("Enter your lover's name: ");
var loveScore = Math.ceil(100*(Math.random()))

if(loveScore > 75){
    console.log("Your love score is " + loveScore + "%. You guys are made for each other.");
} else if (loveScore > 50) {
    console.log("Your love score is " + loveScore + "%. You are like Bread and Butter.");
} else if (loveScore > 25) {
    console.log("Your love score is " + loveScore + "%. You are like tea and honey.");
} else {
    console.log("Your love score is " + loveScore + "%. You go together like oil and water.");
}



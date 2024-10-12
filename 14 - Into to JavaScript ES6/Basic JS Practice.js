var tweet = prompt("Enter your tweet:");
var char = tweet.length;
var rem = 280 - char;
alert("You have written " + char + " characters, you have " + rem + " characters left. Your prompt '" + tweet.slice(0,280) + "'");


// alert(prompt("Enter your name:").slice(0,140));
var name = prompt("Enter your name:");

name = name.slice(0,1).toUpperCase() + name.slice(1,100).toLowerCase();

alert("Hello, "+name);


//Dog Age to Human Age Converter
alert("Human Age Equivalent: " + (((prompt("Enter your dog's age: ")-2)*4)+21));
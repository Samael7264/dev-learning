var fizzBuzz = [];
var i = 0;
function fB(){
    i++;
    if (i%3 === 0 || i%5 ===0){
        if (i%3 !== 0){
            fizzBuzz.push("Buzz");    
        } else if (i%5 !== 0){
            fizzBuzz.push("Fizz");    
        }else{
            fizzBuzz.push("FizzBuzz");    
        }
    }else{
        fizzBuzz.push(i);
    }
    console.log(fizzBuzz);
}

fB();

//Read article : Now that's what I call a hacker
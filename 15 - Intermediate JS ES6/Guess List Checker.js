var guestList = ["Rahul", "Priya", "Mukul", "Shrishti"];

function check(Name){
    if (guestList.includes(Name)){
        console.log("Welcome!");
    }else{
        console.log("Maybe Next Time!");
    }
}

check(prompt("Enter Your Name: "));
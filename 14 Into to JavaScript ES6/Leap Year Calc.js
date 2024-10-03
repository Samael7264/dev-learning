function isLeap(year = prompt("Enter Year: ")){
    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                console.log("Its a leap year.");
            } else {
                console.log("Its not a leap year.");
            }
        } else {
            console.log("Its a leap year.");
        }    
    } else {
        console.log("Its not a leap year.");
    }
}
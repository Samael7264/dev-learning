var people = ["Rahul", "Priya", "Mukul", "Shrishti"];

function lunch(people){
    return people[Math.floor(people.length*Math.random())]+" is going to buy lunch today."
}

lunch(people);
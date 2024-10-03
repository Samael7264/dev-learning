/*Use repl.it to play around with your JS code
*/

function lifeInWeeks(age){
    var remAge = 90 - age;
    var days = remAge * 365;
    var weeks = remAge * 52;
    var months = remAge * 12;

    console.log("You have " + days + " days, " + weeks + " weeks and " + months + " months left.")
}
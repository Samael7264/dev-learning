function anotherAddEventListner(typeOfEvent, callback) {
    //Detect COde Here
    var event = {
        eventType: "keypress",
        key: "p"
    }
if (event.eventType === typeOfEvent)
{callback(event)}
}


anotherAddEventListner("keypress",function(event) {
    console.log(event);
})

document.addEventListener("click",function(params) {
    console.log(params);
})
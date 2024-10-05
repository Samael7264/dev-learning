//CSS
//Manipulate CSS using jQuery
$("h1").css("color","red"); 
//Read CSS using jQuery
$("h1").css("color");


//Attributes
//Manipulate Attributes using jQuery
$("h1").attr("class","red"); 
$("h1").addClass("red"); 
$("h1").removeClass("red"); 
//Check for Attributes using jQuery
$("h1").hasClass("red"); 
//Read Attributes using jQuery
$("h1").attr("class");


//Text
//Manipulate Attributes using jQuery
$("h1").text("bye"); 
//Read Attributes using jQuery
$("h1").text();

//HTML
//Manipulate HTML using jQuery
$("h1").html("<em>Hey</em>"); 
//Read HTML using jQuery
$("h1").html();

//Event Listners
//Adding EventListners using jQuery
$("button").click(function(){
    $("h1").css("color","purple");
});
$("input").keypress(function(event){
    console.log(event.key);
});
$(document).keypress(function(event){
    $("h1").text(event.key);
});
$(document).on("keypress",function(event){
    $("h1").text(event.key);
});


//Elements
//Adding elements using jQuery
$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");
$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");
//Removing elements using jQuery
$("button").remove();

//Animations using jQuery
//Hide/Unhide using toggle function
$(document).on("click",function(event){
    $("h1").toggle();
});


$(document).on("click",function(event){
    $("h1").fadeOut();
});

$(document).on("click",function(event){
    $("h1").fadeIn();
});

$(document).on("click",function(event){
    $("h1").fadeToggle();
});

$(document).on("click",function(event){
    $("h1").animate({margin: "20%"});
});
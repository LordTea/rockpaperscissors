// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var losses = 0;
var wins = 0;
var times = 0;


$("#shoot").click(function(){
   $("#userChoice").text($("#input").val().toLowerCase()); 
   if ($("#input").val().toLowerCase() == "rock"){
       $("#computerChoice").text("paper");
       $("#result").text("You Lose.");
       losses = losses + 1;
       alert("You played Rock. You Lose!");
   } else if ($("#input").val().toLowerCase() == "scissors"){
       $("#computerChoice").text("rock");
       $("#result").text("You Lose.");
       losses = losses + 1;
       alert("You played Scissors. You Lose!");
   } else if ($("#input").val().toLowerCase() == "paper"){
       $("#computerChoice").text("scissors");
       $("#result").text("You Lose.");
       alert("You played Paper. You Lose!");
       losses = losses + 1;
   } else {
    var x = Math.floor(Math.random()*3);
    if (x == 0){
            $("#computerChoice").text("rock");
    } else if (x==1){
            $("#computerChoice").text("scissors");
    } else if (x==2){
            $("#computerChoice").text("paper");
    }
       $("#result").text("You Cheated. You Lose.");
       alert("You Cheated. You Lose.");
       losses = losses + 1;
   }
   times = times + 1;
   $("#totaltimes").text(times);
   $("#wins").text(wins);
   $("#losses").text(losses);
   
});


// DOCUMENT READY FUNCTION BELOW


$("#rock").click(function(){
    $("#userChoice").text("rock");
    $("#computerChoice").text("paper");
    $("#result").text("You Lose.");
    alert("You played rock. You Lose!");
    losses = losses + 1;
    times = times + 1;
    $("#totaltimes").text(times);
    $("#wins").text(wins);
    $("#losses").text(losses);
});

$("#scissors").click(function(){
    $("#userChoice").text("scissors");
    $("#computerChoice").text("rock");
    $("#result").text("You Lose.");
    alert("You played scissors. You Lose!");
    losses = losses + 1;
    times = times + 1;
    $("#totaltimes").text(times);
    $("#wins").text(wins);
    $("#losses").text(losses);
});

$("#paper").click(function(){
    $("#userChoice").text("paper");
    $("#computerChoice").text("scissors");
    $("#result").text("You Lose.");
    alert("You played paper. You Lose!");
    losses = losses + 1;
    times = times + 1;
    $("#totaltimes").text(times);
    $("#wins").text(wins);
    $("#losses").text(losses);
});
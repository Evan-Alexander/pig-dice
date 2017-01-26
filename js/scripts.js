//backend
var currentScore;
var gameScore = 0;

var dieRoll = function() {
  return Math.floor(Math.random() * 6) + 1;
}; //returns a number
var turnScore = 0;

function turn() { //
  var dice = dieRoll();
  if ( dice != 1 ) {
    turnScore += dice;
  } else {
    turnScore = 0;
  }
  return turnScore;
}

//User interface
$(document).ready(function() {
  $("#roll1").click(function() {

    //var roll = dieRoll();
    currentScore = turn();

    $("#roll-output1").text(currentScore);

    console.log(currentScore);

    });


  $("#hold1").click(function() {
    gameScore += currentScore;

    $("#total-score1").text(gameScore);
    console.log(gameScore);

      });
});

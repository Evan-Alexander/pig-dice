//backend



var dieRoll = function() {
  return Math.floor(Math.random() * 6) + 1;
};

var currentTurn = function() {
  var score = 0;
  score = dieRoll();
  if (score != 1) {
    return score;
  } else
  score = 0; //otherwise resets to 0
}


  //for (i = 1; i <= roll; i++)

//var sum = tempScore.reduce(function(first, last) {
  //return first + last; }, 0);


//User interface
$(document).ready(function() {
  $("#roll1").click(function() {

    var roll = parseInt(dieRoll());
    var turnScore = roll+=roll;

    $("#roll-output1").text(roll);
    $("#turnScore").text(turnScore);
    console.log(turnScore);


  });
});

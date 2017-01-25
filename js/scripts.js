var player1;
var player2;

var dieRoll = function() {
  return Math.floor(Math.random() * 6) + 1;
};

var tempScore = [];





$(document).ready(function() {
  $("#roll1").click(function(event) {
    event.preventDefault();
    var roll = dieRoll();

    
    $("#roll-output1").text(roll);
  });
});

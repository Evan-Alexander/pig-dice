//backend
var dieRoll = function() {
  return Math.floor(Math.random() * 6) + 1;
};

var arraySum = function(total, number) {
  return total + number;
}

//for merging the two arrays
//$.merge( [ 0, 1, 2 ], [ 2, 3, 4 ] )

// testArray = [1,2,3,4,5];
// testArray.push(5)
// console.log(testArray.reduce(arraySum));

var currentTurn = function(roll) {
  var rolls = [];
  for (i = 1; i <= dieRoll; i++);
  console.log(dieRoll);
  return dieRoll;
}
//var sum = tempScore.reduce(function(first, last) {
  //return first + last; }, 0);


//User interface
$(document).ready(function() {
  $("#roll1").click(function() {

    var roll = parseInt(dieRoll());
    = currentTurn();

    $("#roll-output1").text(roll);
    $("#turnScore").text(turnScore);
    console.log(turnScore);


  });
});

//business logic

var roundScoresP1 = [];
var roundScoresP2 = [];

function Player(name) {
  this.name = name;
  this.totalScore;
  this.setTotalScore();
}

Player.prototype.setTotalScore = function(roll1, roll2) {

}


function diceRoll(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var diceRollsP1 = [];
var diceRollsP2 = [];


//user interface logic

$(document).ready(function() {
  $("#player1Roll").click(function(event) {
  event.preventDefault();
  var player2TurnTotal = diceRollsP2.splice(0,2);
  var pigDice = diceRoll(1, 6);
  if (diceRollsP1.length <=1) {
    if ((pigDice === 1) && (diceRollsP1.length = 0)) {
      diceRollsP1.push(0,0);
    } else if ((pigDice === 1) && (diceRollsP1.length = 1)) {
      diceRollsP1.shift();
      diceRollsP1.push(0,0);
    } else if (diceRollsP1.length <=1) {
      diceRollsP1.push(pigDice);
    };
  } else {
        alert("Player 1, Your turn is up!");
        console.log("P2 Total" + player2TurnTotal);
        console.log("roundScoreP2" + roundScoresP2);
  };
  roundScoresP2.concat(player2TurnTotal);
  console.log(diceRollsP1);
   // $(".die-display").append(diceRolls);
 });

  $("#player2Roll").click(function(event) {
  event.preventDefault();
  var player1TurnTotal = diceRollsP1.splice(0,2);
  var pigDice = diceRoll(1, 6);
  if (diceRollsP2.length <=1) {
    if ((pigDice === 1) && (diceRollsP2.length = 0)) {
      diceRollsP2.push(0,0);
    } else if ((pigDice === 1) && (diceRollsP2.length = 1)) {
      diceRollsP2.shift();
      diceRollsP2.push(0,0);
    } else if (diceRollsP2.length <=1) {
      diceRollsP2.push(pigDice);
    };
  } else {
    alert("player2 your turn is done!")
  };
  console.log(diceRollsP2);
  roundScoresP1.concat(player1TurnTotal);
  console.log("P1 Total" + player1TurnTotal);
  console.log("roundScoreP1" + roundScoresP1);
  // $(".die-display").append(diceRolls);
  });//close player2Roll click function
});//close document ready function









// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
//
// var pigDice = getRandomIntInclusive(1, 6);
// alert(pigDice);

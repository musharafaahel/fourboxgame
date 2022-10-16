var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];
gamePattern.push(randomChosenColour);


var randomChosenColour = buttonColours[nextSequence()];

$("."+randomChosenColour).click( function() {
  $("#"+randomChosenColour).addClass("pressed");
  makeSound(randomChosenColour);
  setTimeout(function () {
    $("#"+randomChosenColour).removeClass("pressed");
  }, 100);

});



function nextSequence() {
  var randomNumber = Math.floor((Math.random()*3)+1);
  return randomNumber;
}

function makeSound(colour) {
  var audio = new Audio("./sounds/"+colour+".mp3");
  audio.play();
}


$(".").keydown( function() {
    var userChosenColour =
})

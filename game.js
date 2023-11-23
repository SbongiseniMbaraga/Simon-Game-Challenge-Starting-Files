var buttonColours  = ["red", "blue", "green", "yellow"];
var randomChosenColour = nextSequence(1, 3);
var gamePattern = [buttonColours[randomChosenColour]];

function nextSequence(min, max) {
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}
console.log(gamePattern);
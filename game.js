var buttonColours  = ["red", "blue", "green", "yellow"]; //button color arry
var randomChosenColour = nextSequence(0, 3); //random number parameters 
var gamePattern = buttonColours[randomChosenColour]; //pattern veriable

//this function will return a random number between the min and the max based on parameters passed
function nextSequence(min, max) {
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

//this function will make the button flash
function flashElement(colorP){
    $("#"+ colorP).animate({opacity: 0}, 300, 'linear', function(){
        $(this).animate({opacity: 1}, 300, 'linear', flashElement);
    });
}

//this function will play the sound based on the file path
function playAudio(soundSrc){
    var audio = new Audio(soundSrc);
    audio.play();
}

$(document).ready(function(){
    var sound = "sounds/";
    var colorP2 = gamePattern + "";
    var fullSr = sound + colorP2 + ".mp3";

    $("#" + gamePattern).on("click", function(){
        var soundSource = fullSr;
        playAudio(soundSource);
        console.log(colorP2);
    });
});

flashElement(gamePattern);
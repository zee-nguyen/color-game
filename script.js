var colors = [
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 255)"
];

var squares = document.querySelectorAll(".square");

var pickedColor = pickColor();
var pickedColorDisplay = document.getElementById("pickedColorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");

pickedColorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
       var clickedColor = this.style.backgroundColor; 
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            //change all square to the clickedColor
            changeColors(clickedColor);
        } else {
            messageDisplay.textContent = "Try Again";
            this.style.backgroundColor = "#232323";
        }
    });
}

function changeColors(color) {
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    //get a random number
    var random = Math.floor(Math.random() * colors.length);
    //return picked color at random position
    return colors[random];
}
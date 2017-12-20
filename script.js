var colors = [
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 255)"
];

var squares = document.querySelectorAll(".square");

var pickedColor = "rgb(0, 255, 255)";
var pickedColorDisplay = document.getElementById("pickedColorDisplay");
pickedColorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    //add event listener to each square
    squares[i].addEventListener("click", function(){
       var clickedColor = this.style.backgroundColor; 
        if (clickedColor === pickedColor) {
            alert ("yaaay! correct!");
        } else {
            alert ("sorry, incorrect...");
        }
    });
}
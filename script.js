var numSquares = 6;
var pickedColor;
var colors = [];

var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var pickedColorDisplay = document.getElementById("pickedColorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");

init();

function init() {
    setupModeBtns();
    setupSquares();
    reset();
}

//setup mode buttons
function setupModeBtns() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");

            //figure out how many squares to show
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }   
}

//setup squares
function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function(){
           var clickedColor = this.style.backgroundColor; 
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                //change all square to the clickedColor
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetBtn.textContent = "Play Again?";
            } else {
                messageDisplay.textContent = "Try Again";
                this.style.backgroundColor = "#232323";
            }
        });
    }
}

//reset function
function reset() {
    colors = generateRandomColorArray(numSquares);
    //pick a win color
    pickedColor = pickColor();
    //update pickedColorDisplay
    pickedColorDisplay.textContent = pickedColor;
    //change colors of the squares
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";   
        }
    }
    //reset h1
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    resetBtn.textContent = "New Colors";
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

function generateRandomColorArray(num) {
    //create an array
    var arr = [];
    //generate random colors num times
    for (var i = 0; i < num; i++) {
        arr[i] = randomizeColors();
        // or arr.push(randomizeColors());
    }
    //return the array
    return arr;
}

function randomizeColors() {
    //for red chanel, get a random number from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //for green chanel, get a random number from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //for blue chanel, get a random number from 0 - 255
    var b = Math.floor(Math.random() * 256);
    //generate the rgb using template literals
    return randomRGB = `rgb(${r}, ${g}, ${b})`;
}

//reset button
resetBtn.addEventListener("click", function(){
    reset();
});


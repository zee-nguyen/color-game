var numSquares = 6;
var colors = generateRandomColorArray(numSquares);

var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var pickedColor = pickColor();
var pickedColorDisplay = document.getElementById("pickedColorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");


pickedColorDisplay.textContent = pickedColor;


//reset button
resetBtn.addEventListener("click", function(){
   //generate new random colors
    colors = generateRandomColorArray(numSquares);
    //pick a win color
    pickedColor = pickColor();
    //update pickedColorDisplay
    pickedColorDisplay.textContent = pickedColor;
    //change colors of the squares
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    //reset h1
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
});

easyBtn.addEventListener("click", function(){
   // change button active mode
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    
    numSquares = 3;
    colors = generateRandomColorArray(numSquares);
    pickedColor = pickColor();
    pickedColorDisplay.textContent = pickedColor;
    
    for(var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
});

hardBtn.addEventListener("click", function(){
   // change button active mode
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    
    numSquares = 6;
    colors = generateRandomColorArray(numSquares);
    pickedColor = pickColor();
    pickedColorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
    h1.style.backgroundColor = "steelblue";
});

//loop through the squares and change colors
for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
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
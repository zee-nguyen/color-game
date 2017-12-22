# Color Game

This is my first try so I used this as a guideline and a note.

## Features
* The app is responsive
* Each time the page loads, hard mode is on and there are 6 random colors.
* One of these colors is selected to be the goal and is listed at the top, in RGB format.
* The game has 2 states - easy (3 colors) or hard (6 colors).
* Every time user clicks a box
    * if it's incorrect, the box fades away and show a message to try again.
    * if it's correct, all the boxes are displayed and changed to the correct color
    * the header also is changed to the correct color
* There are buttons for generating new games and selecting difficulty mode.
* When a user guesses correctly, the button changed to ask if the user wants to play again.

### V1 
* There should be a header
* There should be 6 squares that are responsive
    * Each should have background color and margin
* There should be an array of colors where each item is assigned to one square
* There should be one picked color (the goal) and its RGB should be displayed at the top
* There should be a way to listen to click event on each square
    * When a square is clicked, we should be able to retreive its color and compare that to the goal
    * The logic needs to handle 2 scenarios - when the user picked correctly and incorrectly

### v2 
* There should be way to display message to users whether they guess correctly or not
* The display message should start empty and change depending on the user's guess
* When the user picked correctly, the colors of the squares should all change to the correct color
* When picked incorrectly, the color of the picked square should be the same as background
* There should be a function that picks a randon color from the color array to be the correct color


### v3
* There should be a function that generates an array of x numbers of random colors 
* The color array should now be generated randomly
* When user guessed the correct answer, h1 should change to the correct color


### v4
* There should be a button to reset the game
    * Applicable when the user won or would like to generate a new set of colors
* There should be a "nav"

### v5
* There should be 2 modes for the game - easy (3 squares) and hard (6 squares)
* There should be 2 buttons that reflet the 2 modes
    * Style the buttons depending on which is active
    * Display numbers of squares accordingly
* Each time a mode is selected, the colors should be newly generated

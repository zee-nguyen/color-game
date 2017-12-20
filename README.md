# Color Game

## Features
* The app is responsive
* Each time the page loads, there are 6 random colors.
* One of these 6 colors is selected to be the goal and is listed at the top, in RGB format.
* The game has 2 states - easy or hard.
* Every time user clicks a box
    * if it's incorrect, the box fades away and show a message to try again.
    * if it's correct, all the boxes are displayed and changed to the correct color
    * the header also is changed to the correct color
* There should be a button to generate new game.
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


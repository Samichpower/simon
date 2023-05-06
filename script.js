//PHASE 1
//Button to start the game -- SAVE THIS UNTIL AFTER THE GAME IS WORKING

//Function to get the simon. A random number will be generated and if statement for returning the color.
//The color will be pushed into an array
//A function for executing the array.
//It will cycle through the array, making the corresponding squares flash.

//PHASE 2
//The player will chose a square. 
//The choice will be pushed into an array with the same value as the simon so it returns true when compared.
//At every player click, it will be compared to the corresponding simon array value.
//Every loop reset the playerSequence to [].
//if at the end of the sequence the players array is equal to simons array, run showSimonPattern().
//If not, give an error, perhaps flash all squares white 3 times, end the game.


//START GAME
//gives a pattern
//player matches the pattern
//once the players array is equal to simons array, proceed to the next iteration, aka showSimonPattern()
//After the players answer is completely equal to simons, it needs to behave as if start game was clicked again, as it is now at least.
//inside the playGame function, the game needs to be in a while loop.

//every click it needs to compare the last array element with the corresponding simon one.
//if it's false, the game is lost.
//if it's true, nothing.
//it goes until the players array is === to simons, then it empties the players array.

const startBtn = document.querySelector('.start-button');
const greenTile = document.querySelector('#green');
const redTile = document.querySelector('#red');
const yellowTile = document.querySelector('#yellow');
const blueTile = document.querySelector('#blue');

const simonSequence = [];
const playerSequence = [];

function getSimonColor() {
  let simonNum = Math.floor(Math.random() * 4);
  if (simonNum === 0) {
    let simonColor = "green";
    return simonColor;
  } else if (simonNum === 1) {
    let simonColor = "red";
    return simonColor;
  } else if (simonNum === 2) {
    let simonColor = "yellow";
    return simonColor;
  } else if (simonNum === 3) {
    let simonColor = "blue";
    return simonColor;
  }
}

function displaySimonPattern() {
  simonSequence.push(getSimonColor());
  function displayTileColor(colorTile, originalColor) {
    colorTile.style.backgroundColor = "white";
    setTimeout(function() {
      colorTile.style.backgroundColor = originalColor;
    }, 300); //sets how long the white is shown for
  }

  for (let i = 0; i < simonSequence.length; i++) {
    setTimeout(function() {
    if (simonSequence[i] === "green") {
      displayTileColor(greenTile, "green");
    } else if (simonSequence[i] === "red") {
      displayTileColor(redTile, "red");
    } else if (simonSequence[i] === "yellow") {
      displayTileColor(yellowTile, "yellow");
    } else if (simonSequence[i] === "blue") {
      displayTileColor(blueTile, "blue");
    }
    }, i * 500);
  }
}

greenTile.addEventListener('click', () => {
  playerSequence.push("green");
  compare()
})
redTile.addEventListener('click', () => {
  playerSequence.push("red");
  compare()
})
yellowTile.addEventListener('click', () => {
  playerSequence.push("yellow");
  compare()
})
blueTile.addEventListener('click', () => {
  playerSequence.push("blue");
  compare()
})

function compare() {
  if (playerSequence[playerSequence.length - 1] === simonSequence[playerSequence.length -1]) {
    console.log("VERY GOOD");
  } else {
    console.log("YOU LOSE");
  }
}



function playSimon() {
  playerSequence.length = 0;
  displaySimonPattern();

}

startBtn.addEventListener('click', playSimon);
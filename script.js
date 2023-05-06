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

function showSimonPattern() {
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
    }, i * 600);
  }
}

function compareSequences() {
  for (let i = 0; i < playerSequence.length; i++) {
    if (playerSequence === simonSequence) {
      showSimonPattern();
    }
  }
}

greenTile.addEventListener('click', () => {
  playerSequence.push("green");
  compareSequences();
})
redTile.addEventListener('click', () => {
  playerSequence.push("red");
  compareSequences();
})
yellowTile.addEventListener('click', () => {
  playerSequence.push("yellow");
  compareSequences();
})
blueTile.addEventListener('click', () => {
  playerSequence.push("blue");
  compareSequences();
  console.log(playerSequence)
})



function playSimon() {
  simonSequence.push(getSimonColor());
  showSimonPattern();

}

startBtn.addEventListener('click', playSimon);
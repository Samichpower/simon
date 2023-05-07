//if at the end of the sequence the players array is equal to simons array, run displaySimonPattern().
//If not, give an error, perhaps flash all squares white 3 times, end the game.

//START GAME
//gives a pattern
//player matches the pattern
//once the players array is equal to simons array, proceed to the next iteration, aka displaySimonPattern()
//After the players answer is completely equal to simons, it needs to behave as if start game was clicked again, as it is now at least.

//FANCY THINGS TO ADD:
//Counter to display the players current streak/level
//Flashing lights for when the player clicks a wrong tile
//Add sounds. Final step.

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

function displayTileColor(tileColor, originalColor) {
  tileColor.style.backgroundColor = "white";
  setTimeout(function() {
    tileColor.style.backgroundColor = originalColor;
  }, 300); //sets how long the white is shown for
}

function displaySimonPattern() {
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
    }, i * 500); //sets time between white flashes
  }
}

function displayLosingPattern() {
  setTimeout(function() {

  })
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
})

let n = 0;
function compareSequences() {
  if (playerSequence.toString() === simonSequence.toString()){
    setTimeout(function() {
      simonSequence.push(getSimonColor());
      displaySimonPattern();
    }, 250); //sets time between last player click and the next simon cycle
    playerSequence.length = 0;
    n = 0;
  } else if (playerSequence[n] !== simonSequence[n]) {
    simonSequence.length = 0;
    console.log("YOU LOSE");
  } else {
    n++;
  }
}


function playSimon() {
  simonSequence.push(getSimonColor());
  playerSequence.length = 0;
  displaySimonPattern();

}

startBtn.addEventListener('click', playSimon);
//if at the end of the sequence the players array is equal to simons array, run displaySimonPattern().
//If not, give an error, perhaps flash all squares white 3 times, end the game.

//START GAME
//gives a pattern
//player matches the pattern
//once the players array is equal to simons array, proceed to the next iteration, aka displaySimonPattern()
//After the players answer is completely equal to simons, it needs to behave as if start game was clicked again, as it is now at least.

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
  function displayTileColor(tileColor, originalColor) {
    tileColor.style.backgroundColor = "white";
    setTimeout(function() {
      tileColor.style.backgroundColor = originalColor;
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
    }, i * 500); //sets time between white flashes
  }
}

greenTile.addEventListener('click', () => {
  playerSequence.push("green");
  console.log(playerSequence[playerSequence.length - 1], simonSequence[simonSequence.length - 1]);
  compare()
})
redTile.addEventListener('click', () => {
  playerSequence.push("red");
  console.log(playerSequence[playerSequence.length - 1], simonSequence[simonSequence.length - 1]);
  compare()
})
yellowTile.addEventListener('click', () => {
  playerSequence.push("yellow");
  console.log(playerSequence[playerSequence.length - 1], simonSequence[simonSequence.length - 1]);
  compare()
})
blueTile.addEventListener('click', () => {
  playerSequence.push("blue");
  console.log(playerSequence[playerSequence.length - 1], simonSequence[simonSequence.length - 1]);
  compare()
})

function compare() {
  if (playerSequence[playerSequence.length - 1] === simonSequence[simonSequence.length - 1]) {
    displaySimonPattern();
    playerSequence.length = 0;
  } else {
    console.log("asdasd");
  }
}

//UP ABOVE ITS CHECKING THE STRING VALUE NOT THE NUMBERICAL VALUE
//NEEDS TO RETURN THE NUMBERICAL VALUE?
//What's happening, it's not comparing the last two array indexes to see if they're the same, it's grabbing the playerSequence as it's clicked, and when it happens to be the same as the last of the simonSequence, for example Red-Blue-Red, it will repeat after the first click, as red === red.


function playSimon() {
  playerSequence.length = 0;
  displaySimonPattern();

}

startBtn.addEventListener('click', playSimon);
//FANCY THINGS TO ADD:
//Counter to display the players current streak/level
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

const docHighScore = document.querySelector('#high-score');
const docCurrentScore = document.querySelector('#current-score');

//WHAT AM I TRYING TO DO? Every time the player clicks a correct tile it will increment current score by one. If it's higher than the high, it will also increment high score. After the player loses, the current score will be reset, while high score will remain.

let highScore = 0;
let currentScore = 0;

function scoreCounter() {
  currentScore++;
  docCurrentScore.textContent = currentScore;
  if (currentScore > highScore) {
    highScore++;
    docHighScore.textContent = highScore;
  }
}

let roundCounter = 0;
function compareSequences() {
  if (playerSequence.toString() === simonSequence.toString()){
    setTimeout(function() {
      simonSequence.push(getSimonColor());
      displaySimonPattern();
    }, 250); //sets time between last player click and the next simon cycle
    scoreCounter();
    playerSequence.length = 0;
    roundCounter = 0;
  } else if (playerSequence[roundCounter] !== simonSequence[roundCounter]) {
    simonSequence.length = 0;
    function displayLosingPattern() {
      displayTileColor(greenTile, "green");
      displayTileColor(redTile, "red");
      displayTileColor(yellowTile, "yellow");
      displayTileColor(blueTile, "blue");
    }
    currentScore = 0;
    docCurrentScore.textContent = 0;
    displayLosingPattern();
  } else {
    scoreCounter();
    roundCounter++;
  }
}

function playSimon() {
  simonSequence.push(getSimonColor());
  playerSequence.length = 0;
  displaySimonPattern();
}

startBtn.addEventListener('click', playSimon);
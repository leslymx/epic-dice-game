const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const current0 = document.getElementById("current--0");
const current1 = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, playing;

// conditions
const init = () => {
  diceEl.classList.add("hidden");

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
};
init();

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

// rolling dice
btnRoll.addEventListener("click", () => {
  if (playing) {
    const dice = Math.floor(Math.random() * 6) + 1;
    // display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `../images/dice-${dice}.png`;

    if (dice !== 1) {
      // add dice to current score
      currentScore += dice;

      // seleccion dinamica del jugador activo
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", () => {
  if (playing) {
    // scores[1] = scores[1] + currentScore; // es lo mismo que usar el activeplayer
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

// reset button

btnNew.addEventListener("click", init);

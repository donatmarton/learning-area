const startButton = document.querySelector('.startButton');
const newCardButton = document.querySelector('.newCardButton');

const statusText = document.querySelector('.status');
const cardsText = document.querySelector('.cards');
const sumText = document.querySelector('.sum');

newCardButton.disabled = true;
let cards = [];

startButton.addEventListener('click', startNewGame);
function startNewGame(event) {
  cards = [];
  newCardButton.disabled = false;
  updateGame();
}

newCardButton.addEventListener('click', drawCard);
function drawCard(event) {
  const newCard = randomBetween(2,11);
  cards.push(newCard);
  updateGame();
}

function updateGame() {
  let cardString = 'Cards: ';
  for (let card of cards) {
    cardString = cardString + card + ' ';
  }
  cardsText.textContent = cardString;

  const currentSum = sumCards();
  sumText.textContent = `Sum: ${currentSum}`;

  if (currentSum === 21) {
    statusText.textContent = 'Blackjack! You win';
    newCardButton.disabled = true;
  } 
  else if (currentSum > 21) {
    statusText.textContent = 'You are over 21 :(';
    newCardButton.disabled = true;
  }
  else {
    statusText.textContent = 'Draw some cards';
  }
}

function sumCards() {
  let sum = 0;
  for(let i = 0; i < cards.length; i++) {
    sum += cards[i];
  }
  return sum;
}

function randomBetween(lower, upper) {
  return Math.floor(Math.random() * (upper - lower + 1) + lower)
}

let player = {
  name: "Andrei",
  chips: 200,
};
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.querySelector("#player-el");
let startButton = document.querySelector("button");
let anotherCard = document.querySelector("#new-card");

playerEl.innerContent = player.name + ": $ " + player.chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;

  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "do you want another card?";
  } else if (sum === 21) {
    message = "Wohoo! you got Blackjack";
    hasBlackJack = true;
  } else {
    message = "you are out of the game";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

startButton.addEventListener("click", function () {
  return startGame();
});

anotherCard.addEventListener("click", function () {
  return newCard();
});

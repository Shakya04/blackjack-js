let playerInfo = {
  name: "Gaurav",
  money: 200,
};

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let msg = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");
let player = document.getElementById("player");

player.textContent = playerInfo.name + " Rs." + playerInfo.money;

function getRandomCard() {
  let randomNo = Math.floor(Math.random() * 13 + 1);
  if (randomNo === 1) {
    return 1;
  } else if (10 < randomNo) {
    return 10;
  } else {
    return randomNo;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards.push(firstCard, secondCard);
  sum = firstCard + secondCard;
  game();
}

function game() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum < 21) {
    message = "Do yo want to add more cards? If yes then press New card";
  } else if (sum === 21) {
    message = "You won";
    hasBlackJack = true;
  } else {
    message = "You lost";
    isAlive = false;
  }

  msg.textContent = message;
}

function newCard() {
  let thirdCard = getRandomCard();
  if (isAlive == true && hasBlackJack == false) {
    sum = sum + thirdCard;
    cards.push(thirdCard);
    game();
  }
}

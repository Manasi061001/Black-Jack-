// VARIABLES

let cards = []
let message = ""
let sum = 0
let actualCount = 0
let initialCount = 0
let betMoney = 0
let profit = 0
let loss = 0
let addProfit = 0
let isGameOver = false;
let isNewCardDrawn = false;

// VARIABLE ID's

let titleEl = document.getElementById("title")
let cardsEl = document.getElementById("cards-drawn")
let sumEl = document.getElementById("sum-formed")
let startEl = document.getElementById("start-game")
let newEl = document.getElementById("new-card")
let nameEl = document.getElementById("player-name")
let addEl = document.getElementById("add-money")
let showEl = document.getElementById("show-money")
let displayEl = document.getElementById("display-result")
let resultEl = document.getElementById("result-message")

// START BUTTON

function startGame(){
    if (isGameOver) {
        return; 
    }
    if(initialCount === 0){
        initialCount = prompt ("Enter the total amount you want to bet: ")
        nameEl.textContent = "Manasi: $" + initialCount
        console.log(initialCount)
        actualCount += parseFloat(initialCount)
    } 
    if (actualCount === 0){
        nameEl.textContent = "SORRY YOU HAVE LOST ALL YOUR MONEY. PLEASE REFRESH TO START A NEW GAME"
    }
    betMoney = 0
    showEl.textContent = "Currently Placed bets: $" + 0
    resultEl.textContent = "ALL THE BEST"
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

// ADD MONEY BUTTON

function addMoney(){
    if (isGameOver) {
        return; 
    }
    if (sum < 21 && actualCount > 0){ 
        actualCount -= 100 
        betMoney += 100
        nameEl.textContent = "Manasi: $" + actualCount
        showEl.textContent = "Currently Placed bets: $"+ betMoney
    }
    renderGame()
}

// DISPLAY THE RESULT BUTTON 

function stopGame(){
    if (isNewCardDrawn) {
        loss = initialCount - actualCount
        if(sum != 21){
            resultEl.textContent = "You Lost: $" + loss
        } else if(sum === 21) {
            resultEl.textContent = "You Won: $"+profit
        }
    } 
    renderGame()
}

// NEW CARD BUTTON

function newCard() {
    if (isGameOver) {
        return; 
    }
    // if (isPlaying === true && hasBlackJack === false) 
    if (sum < 21){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        isNewCardDrawn = true;
    }
    renderGame()
}

// GIVES A RANDOM CARD

function getRandomCard() {
    let randomNumer = Math.floor(Math.random() * 13) + 1
    return randomNumer
}

// RENDERS THE GAME ALL OVER AGAIN

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    console.log(initialCount)
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21 && betMoney > 0) {
        profit = betMoney * 10;
        addProfit = actualCount + profit;
        nameEl.textContent = "Manasi: $" + addProfit;
        message = "Congrats, You've got Blackjack! You can now refresh the page to start a fresh new game.";
        isGameOver = true;
    } else {
        message = "You're out of the game! START AGAIN";
    }
    titleEl.textContent = message;
}








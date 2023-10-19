let cards = []
let count = 5000
let counts = 0
let profit = 0
let sum = 0
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let nameEl = document.getElementById("name-el")
let betsEL = document.getElementById("bets-el")
let lossEl = document.getElementById("loss-el")

function addMoney() {
    if (sum < 21) {
        count -= 100
        counts += 100 
        nameEl.textContent = "Manasi: $" + count
        betsEL.textContent = "Currently Placed bets: $" + counts
    }
    renderGame()
}

function display() {
    if (sum > 21) {
        lossEl.textContent = "You Lose: $" + (5000 - count)
    } else if (sum === 21) {
        lossEl.textContent = "You Win: $" + Math.abs(profit - count)
    }
}

function getRandomCard() {
    let randomNumer = Math.floor(Math.random() * 13) + 1
    return randomNumer
}

function startGame() {
    counts = 0
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        profit = Math.abs(count * 2)
        nameEl.textContent = "Manasi: $" + profit
        message = "You've got Blackjack!"
    } else {
        message = "You're out of the game!"
        betsEL.textContent = "Currently Placed bets: $0"
    }
    messageEl.textContent = message
}

function newCard() {
    if (sum < 21) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

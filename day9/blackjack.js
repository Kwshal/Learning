let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let playerEl = document.getElementById("player-el")
let player = {
     name: "Mosh",
     chips: 200
}
playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
     isAlive = true

     let firstCard = getRandomCard()
     let secondCard = getRandomCard()
     cards = [firstCard, secondCard]
     renderCards()
}
function renderCards() {
     cardsEl.textContent = "Cards: " + cards.slice(",").join(" ")
     sum = cards.reduce((a, b) => a + b, 0)
     sumEl.textContent = "Sum: " + sum

     if (sum < 21) {
          message = "Do you want to draw another card?"
     } else if (sum === 21) {
          hasBlackJack = true
          message = "You've got Blackjack!"
     } else {
          isAlive = false
          message = "You're out of the game!"
     }

     console.log(message)
     messageEl.textContent = message
}

function getRandomCard() {
     let randomCard = Math.floor(Math.random() * 13) + 1
     if (randomCard > 10) {
          return 10
     } else if (randomCard === 1) {
          return 11
     } else {
          return randomCard
     }
}

function newCard() {
     if (!isAlive || hasBlackJack) return
     let newCard = getRandomCard()
     cards.push(newCard)
     renderCards()
}

// finished.
// Learnings: 
// 1. how to use reduce(function(previousValue, currentValue), initialValue)
// 2. how to use slice(start, end) .. excludes end
// 3. how to use join(separator) to convert array to string
// 4. arrys are objects and they are mutable, objects are group of key-value pairs,
// 5. booleans, if else statements, comparison operators, logical operators,for loops, The Math object
// 6. how to use Math.random(), return statements



let cards = [] 
let sum = 0
let hasBlackJack = false
let isAlive = true 
let message = ""
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

let player = {
    name: "AAA",
    chips: 1000
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    rand = Math.floor(Math.random() * 13) + 1
    if(r === 1){
        return 11
    } else if(r > 11){
        return 10
    } else{
        return rand
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for(i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if(sum <= 20) {
        message = ("Do you want to draw a new card?")
    } 
    else if(sum === 21) {
        message = ("You've got Blackjack!")
        hasBlackJack = true
    }
    else{
        message = ("You're out of the game!")
        isAlive = false
    }
    
    console.log(hasBlackJack)
    messageEl.textContent = message
    sumEl.textContent = sumEl
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}
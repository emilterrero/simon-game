let contentCon = document.querySelector('.content-container')
let gameTitle = document.querySelector('.game-title')
let startBtn = document.querySelector('.start-btn')
let gameDiv = document.querySelector('.game-div')
let gameBtns = document.querySelectorAll('.game-btn')
let scoreboard = document.querySelector('.scoreboard')
let scoreCount = document.querySelector('.score-count')
let countIndex = 0
let gamePattern = []
let playerPattern = []

let startGame = () => {
    let randomBtn = Math.floor(Math.random() * 4)
    let btn = document.querySelector(`[data-id*='${randomBtn}']`)
    console.log(btn)
    gamePattern.push(randomBtn)
    for (let i = 0; i < gamePattern.length; i++) {
    }
    console.log(gamePattern)
}

startBtn.addEventListener('click', startGame)


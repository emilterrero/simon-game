let contentCon = document.querySelector('.content-container')
let gameTitle = document.querySelector('.game-title')
let gameBtn = document.querySelector('.index-btn')
let startBtn = document.querySelector('.start-btn')
let resetBtn = document.querySelector('.reset-btn')
let gameDiv = document.querySelector('.game-div')
let gameOverDiv = document.querySelector('.game-over')
let gameBtns = document.querySelectorAll('.game-btn')
let scoreboard = document.querySelector('.scoreboard')
let scoreCount = document.querySelector('.score-count')
let updateP = document.querySelector('.update')
let gamePattern = []
let playerPattern = []
let patternEvent = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
}
let playerScore = 0
let index = 0
let matches = 0

// Checsks to see the current card clicked by player matches game pattern
let checkMatches = () => {
    if (playerPattern[index] == gamePattern[index]) {
        matches++
        index++
        if (matches == gamePattern.length){
            updateP.innerText = "Pattern matched!"
            playerScore++
            scoreCount.innerText = `Score: ${playerScore}`
            index = 0
            matches = 0
            playerPattern = []
            setTimeout(startGame, 3000)
        }

    } else if (playerPattern[index] !== gamePattern[index]) {
        gameOverDiv.style.display = "block"
        updateP.innerText = "Wrong button, press Reset to start again"
    }
}

// StartGame function will create new randomBtn then push to gamePattern array
let startGame = () => {
    let randomBtn = Math.floor(Math.random() * 4)
    let btn = document.querySelector(`[data-id*='${randomBtn}']`)
    gamePattern.push(randomBtn)
    startBtn.style.display = "none"
    resetBtn.style.display = "block"
    updateP.innerText = "Remember the pattern"
    gameDiv.style.pointerEvents = 'none'
    resetBtn.style.pointerEvents = 'none'
    
// ParentLoop will run through the gamePattern array to render the pattern on the gameBtns
    let patternLoop = async () => {
        for (let i = 0; i < gamePattern.length; i++) {
            let currentBtn = gameBtns[gamePattern[i]]
            await patternEvent(600)
            currentBtn.style.borderColor = "black"
            currentBtn.classList.add('pattern')
            await patternEvent (600)
            currentBtn.style.borderColor = "white"
            currentBtn.classList.remove('pattern')
            await patternEvent(500)
            gameDiv.style.pointerEvents = 'auto'
            resetBtn.style.pointerEvents = 'auto'
        }
        updateP.innerText = "Repeat the pattern"

    }
    patternLoop()
}

// Resets Games
let resetGame = () => {
    gameOverDiv.style.display = "none";
    playerScore = 0
    scoreCount.innerText = "Score: 0"
    index = 0
    matches = 0
    gamePattern = []
    playerPattern = []
    updateP.innerText = `Press 'Start' to begin`
    startBtn.style.display = "block"
    resetBtn.style.display = "none"
}

// Loop created for gameBtns for player response
for (let i = 0; i < gameBtns.length; i++) {
    gameBtns[i].classList.add('active-btn')
    let playerResponse = () => {
        let playerClick = gameBtns[i].getAttribute('data-id')
        playerPattern.push(playerClick)
        setTimeout(function() {
            gameBtns[i].style.borderColor = "black"
        }, 0)
        setTimeout(function() {
            gameBtns[i].style.borderColor = "white"
        }, 100)
        checkMatches()
    }
    gameBtns[i].addEventListener('click', playerResponse)
}

startBtn.addEventListener('click', startGame)
resetBtn.addEventListener('click', resetGame)

let contentCon = document.querySelector('.content-container')
let gameTitle = document.querySelector('.game-title')
let gameBtn = document.querySelector('.index-btn')
let startBtn = document.querySelector('.start-btn')
let resetBtn = document.querySelector('.reset-btn')
let gameDiv = document.querySelector('.game-div')
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
let checkMatches = () => {
    if (playerPattern[index] == gamePattern[index]) {
        console.log("matched")
        matches++
        index++
        if (matches == gamePattern.length){
            console.log("all matched!")
            playerScore++
            scoreCount.innerText = playerScore
            index = 0
            matches = 0
            playerPattern = []
            startGame()
        }

    } else if (playerPattern[index] !== gamePattern[index]) {
        console.log("no Match")
    }
}

// startGame function needs work, should declare things before running conidtions or loops
let startGame = () => {
    let randomBtn = Math.floor(Math.random() * 4)
    let btn = document.querySelector(`[data-id*='${randomBtn}']`)
    gamePattern.push(randomBtn)
    startBtn.style.display = "none"
    resetBtn.style.display = "block"
    updateP.innerText = "Remember the pattern"

    let patternLoop = async () => {
        for (let i = 0; i < gamePattern.length; i++) {
            let currentBtn = gameBtns[gamePattern[i]]
            await patternEvent(1000)
            currentBtn.classList.add('pattern')
            await patternEvent (1000)
            currentBtn.classList.remove('pattern')
            await patternEvent(500)
        }
        updateP.innerText = "Repeat the pattern"

    }
    patternLoop()
}
let resetGame = () => {

}
startBtn.addEventListener('click', startGame)

for (let i = 0; i < gameBtns.length; i++) {
    gameBtns[i].classList.add('active-btn')
    let playerResponse = () => {
        let playerClick = gameBtns[i].getAttribute('data-id')
        playerPattern.push(playerClick)
        checkMatches()
    }
    gameBtns[i].addEventListener('click', playerResponse)
}


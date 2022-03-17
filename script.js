let contentCon = document.querySelector('.content-container')
let gameTitle = document.querySelector('.game-title')
let gameBtn = document.querySelector('.index-btn')
let startBtn = document.querySelector('.start-btn')
let resetBtn = document.querySelector('.reset-btn')
let gameDiv = document.querySelector('.game-div')
let gameBtns = document.querySelectorAll('.game-btn')
let scoreboard = document.querySelector('.scoreboard')
let scoreCount = document.querySelector('.score-count')
let countIndex = 0
let gamePattern = []
let playerPattern = []
let patternEvent = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
}

let index = 0
let matches = 0
let checkMatches = (val) => {
    if (val == gamePattern[index] && gamePattern.length > index) {
        console.log("first match")
        index++;
        checkMatches(val)
    } else if (gamePattern.length == index) {
        console.log("checking done")
        startGame()
    }
}

// startGame function needs work, should declare things before running conidtions or loops
let startGame = () => {
    let randomBtn = Math.floor(Math.random() * 4)
    let btn = document.querySelector(`[data-id*='${randomBtn}']`)
    gamePattern.push(randomBtn)
    startBtn.style.display = "none"
    resetBtn.style.display = "block"

    let patternLoop = async () => {
        for (let i = 0; i < gamePattern.length; i++) {
            let currentBtn = gameBtns[gamePattern[i]]
            await patternEvent(1000)
            currentBtn.classList.add('pattern')
            await patternEvent (1000)
            currentBtn.classList.remove('pattern')
            await patternEvent(500)
        }

        for (let i = 0; i < gameBtns.length; i++) {
            gameBtns[i].classList.add('active-btn')
            let playerResponse = () => {
                console.log(gamePattern)
                let playerClick = gameBtns[i].getAttribute('data-id')
                playerPattern.push(playerClick)
                console.log(playerClick)
                checkMatches(playerClick)
            }
            gameBtns[i].addEventListener('click', playerResponse)
        }
    }
    patternLoop()
}
let resetGame = () => {

}
startBtn.addEventListener('click', startGame)



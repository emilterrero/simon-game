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

let startGame = () => {
    if (gamePattern.length == 0) {
        let randomBtn = Math.floor(Math.random() * 4)
        let btn = document.querySelector(`[data-id*='${randomBtn}']`)
        gameBtn.classList.remove('start-btn')
        gameBtn.classList.add('reset-btn')
        gamePattern.push(randomBtn)
        gameBtn.innerText = "Reset"
        gameBtn.style.backgroundColor = "#ff6666"

        let patternLoop = async () => {
            for (let i = 0; i < gamePattern.length; i++) {
                await patternEvent(1000)
                gameBtns[gamePattern[i]].classList.add('pattern') 
                await patternEvent(1000)
                gameBtns[gamePattern[i]].classList.remove('pattern') 
                await patternEvent(500)
                for (let i = 0; i < gameBtns.length; i++) {
                    gameBtns[i].classList.add('active-btn')
                    let playerResponse = () => {
                        console.log(gameBtns[i])
                    }
                    gameBtns[i].addEventListener('click', playerResponse)
                }
            }
        }
        patternLoop();
        console.log(gameBtns)
    } else {
        for (let i = 0; i < gameBtns.length; i++) {
            gameBtns[i].classList.remove('active-btn')
            gameBtns[i].classList.remove('pattern')
        }
        gameBtn.innerText = "Start"
        gameBtn.style.backgroundColor = 'lightblue'
        gamePattern = []
        playerPattern = []
        countIndex = 0
    }
}

startBtn.addEventListener('click', startGame)


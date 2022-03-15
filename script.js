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
let patternEvent = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
}

let startGame = () => {
    let randomBtn = Math.floor(Math.random() * 4)
    let btn = document.querySelector(`[data-id*='${randomBtn}']`)
    gamePattern.push(randomBtn)

    let patternLoop = async () => {
        for (let i = 0; i < gamePattern.length; i++) {
            //let patternClick = () => {
            //}
            await patternEvent(1000)
            console.log("pattern1")
            gameBtns[gamePattern[i]].classList.add('pattern') 
            //let patternUnclick = () => {
            //}
            await patternEvent(1000)
            //console.log(gameBtns[gamePattern[i]]);
            console.log("pattern2")
            gameBtns[gamePattern[i]].classList.remove('pattern') 
        }
        //console.log(gamePattern)
    }
    patternLoop();
}

startBtn.addEventListener('click', startGame)


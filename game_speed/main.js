//  1. run the game ==> it will auto turn off the one light
// 2. when we click to correct light it will turn on
// 3. if we click wrong ==> the game will be over
// 4. button start ==> click ==> to start the game
// 5. button gameover ==> click ==> to reset the game
// 6. 
const cursor = document.querySelector('.cursor')
let lights = document.querySelectorAll('.light')
let candles = document.querySelectorAll('.candle')
let count_down = document.querySelector('.count_down')
let score = document.querySelector('#score_result')
let fires = document.querySelectorAll('.fire')
let start = document.querySelector('.start')
let reset = document.querySelector(".reset")
let closeBtn = document.querySelector('#close')
let modal = document.querySelector('#modal')
let stopBtn = document.querySelector('.stop')

let totalScore = 0
// flag is use to check that in case the time run out 
// if the user turn on light on time. 
// flag will be true 
// order while flag will be false. 

//  that mean  user lose the game
let flag = false;
// let the stop flag that check when the game wanna stop 

let stopFlag = true

let oldNumber = 0

// 1. turn on the candle
const turnOnCandle = (candle) => {

    candle.classList.add('fire')


}
// 2.put turn on function for every candles
candles.forEach(candle =>
    candle.addEventListener('click', () => {
        if (flag) {
            turnOnCandle(candle.children[1])
            totalScore++
            score.textContent = totalScore

        }
    })
)





// 3. random turn off the light 
const turnOffCandle = (arr) => {
    // let randomNumber = Math.round(Math.random() * 3)
    // console.log(randomNumber()
    // arr[randomNumber].classList.remove('fire')
    let createRandomNum = () => {
        return Math.round(Math.random() * 3)
    }
    let flag = true
    console.log('turn of the candle')
    let randomNumber = 0
    while (flag) {
        if (randomNumber === oldNumber) {
            randomNumber = createRandomNum()
        } else {
            flag = false
            oldNumber = randomNumber
            arr[randomNumber].classList.remove('fire')
        }
    }

}
// 4. interval function auto turn off the light

// const intervalTurnOffLight = setInterval(turnOffCandle(lights), 2000)


const checkUntil = (millisecondsInterval) => {
    flag = true
    let promise = new Promise((resolve, reject) => {

        setTimeout(function () {
            if (document.querySelectorAll('.fire').length < 4 && stopFlag) {
                reject(false)
                // console.log('you lose the game')
                // clearInterval(timer)
                return
            }
            else if (document.querySelectorAll('.fire').length === 4) {
                resolve(true)
                // count++
                // console.log('total score' + totalScore)
                // turnOffCandle(lights)
                // clearInterval(timer)
                // runTheGame(millisecondsInterval - (count * 50))
            }
        }, millisecondsInterval);
    });

    return promise;
}

// 5. count down 
const countDown = () => {

}


// 6.check the if and run to turn off the light againt
const checkToRun = () => {

}

// 7. run the game

const runTheGame = (time) => {
    let count = 1

    // let timer = 2000

    if (stopFlag) {
        checkUntil(time).then(res => {
            if (stopFlag) {

                turnOffCandle(lights)

                runTheGame(time - (count * 50))
            }


        }).catch(err => {
            flag = false
            showModal()
        })
    }

}

// 8 start
start.addEventListener('click', (e) => {
    start.classList.add('clicked')
    runTheGame(2000)
})


// 9. reset the game 

const resetGame = () => {
    totalScore = 0;

    score.innerHTML = totalScore
    start.classList.remove('clicked')
    lights.forEach(i => {
        // console.log(i)
        i.classList.add('fire')

    })
    flag = false
    stopFlag = true
}


reset.addEventListener('click', resetGame)

// 10. on/off modal 

const showModal = () => {
    modal.classList.remove('display_none')
}

const closeModal = () => {
    modal.classList.add('display_none')
}

closeBtn.addEventListener('click', () => {
    console.log(modal.classList.contains('display_none'))
    if (!modal.classList.contains('.display_none')) {
        console.log('do it')
        closeModal()
    }
})


// cursor: 

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px'
    cursor.style.top = e.pageY + 'px'
})


// 11. stop game

const stopThegame = () => {
    stopFlag = false
}

stopBtn.addEventListener('click', () => {
    stopThegame()
})
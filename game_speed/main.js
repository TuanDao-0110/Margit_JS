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
let yourLife = document.querySelector('.your_life')

let totalScore = 0
// flag is use to check that in case the time run out 
// if the user turn on light on time. 
// flag will be true 
// order while flag will be false. 

//  that mean  user lose the game , but it also prevent user click before the game run
let flag = false;
// let the stop flag that check when the game wanna stop 
let stopFlag = true
// oldNumber  to make sure the number  will not the same 2 in 1 round
let oldNumber = 0
// your life balance left ==> make sure how many life you want
let yourLifeLeft = 3
yourLife.textContent = yourLifeLeft

// 1. turn on the candle
const turnOnCandle = (candle) => {
    if (candle.classList.contains('fire')) {
        reduceLife()
    } else {
        addLife()
        candle.classList.add('fire')
        totalScore++
        score.textContent = totalScore
    }


}
// 2.put turn on function for every candles
candles.forEach(candle =>
    candle.addEventListener('click', () => {
        if (flag) {
            turnOnCandle(candle.children[1])

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
    let randomNumber = 0
    while (flag) {
        if (randomNumber === oldNumber) {
            randomNumber = createRandomNum()
        } else {
            oldNumber = randomNumber
            if (arr[randomNumber].classList.contains('fire')) {

                flag = false
                arr[randomNumber].classList.remove('fire')
            }

        }
    }

}
// 4. promise to check  function auto turn off the light



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

// 5. add the life 
const addLife = () => {
    if (yourLifeLeft < 3) {

        yourLifeLeft++
        yourLife.textContent = yourLifeLeft
    }

}


// 6.reduce the life number
const reduceLife = () => {

    if (yourLifeLeft >0){

        yourLifeLeft--
        yourLife.textContent = yourLifeLeft
        
    }
    if(yourLifeLeft ===0){
        flag = false
        stopFlag =false
        showModal()
    }
}

// 7. run the game function ==> 

const runTheGame = (time) => {
    let count = 1

    // let timer = 2000

    if (stopFlag) {
        checkUntil(time).then(res => {
            if (stopFlag) {
                turnOffCandle(lights)
                runTheGame(time - (totalScore * 10))
            }
        }).catch(err => {
            if (yourLifeLeft > 0) {
                reduceLife()
                turnOffCandle(lights)
                runTheGame(time - (totalScore * 10))

            } else {
                flag = false
                showModal()
            }
        })
    }

}

// 8 start to run the game when click button
start.addEventListener('click', (e) => {
    start.classList.add('clicked')
    runTheGame(3000)
})


// 9. reset the game 

// const resetGame = () => {
//     totalScore = 0;

//     score.innerHTML = totalScore
//     start.classList.remove('clicked')
//     lights.forEach(i => {
//         // console.log(i)
//         i.classList.add('fire')

//     })
//     flag = false
//     stopFlag = true
//     yourLifeLeft = 3
//     yourLife.textContent = yourLifeLeft
// }
reset.addEventListener('click', ()=>{
    window.location.reload();
})

// 10. on/off modal 

const showModal = () => {
    modal.classList.remove('display_none')
}

const closeModal = () => {
    modal.classList.add('display_none')
}
// 11.  put event for close button
closeBtn.addEventListener('click', () => {
    if (!modal.classList.contains('.display_none')) {
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
    flag = false
    alert('game stop')
}

stopBtn.addEventListener('click', () => {
    stopThegame()
})
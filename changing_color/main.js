let butObject = document.querySelectorAll('button')
let btns = document.getElementsByClassName("btn");
let form = document.querySelector('form')
let color_1 = document.querySelector('#color_1')
let color_2 = document.querySelector('#color_2')
let color_show = document.querySelector('#color_show')
let result = document.querySelector('#result')
let objectStyle = {
    direction: 'bottom right',
    color_1Value: '#aaa',
    color_2Value: '#aaa'
}
const colorChange = (e, objectColorValue) => {
    if (objectColorValue == 1) {
        objectStyle.color_1Value = e.target.value
    }
    if (objectColorValue === 2) {
        console.log('done')
        objectStyle.color_2Value = e.target.value
    }
    let styleColor = `linear-gradient(to ${objectStyle.direction} , ${objectStyle.color_1Value}, ${objectStyle.color_2Value})`
    console.log(styleColor)
    color_show.style.background = styleColor
    result.textContent = styleColor
}
// let body = document.body
color_1.addEventListener('input', (e) => {
    colorChange(e, 1)
})
color_2.addEventListener('input', (e) => {
    colorChange(e, 2)
})

// color_1.addEventListener('input', (e) => {
//     objectStyle.color_1Value = e.target.value
//     let styleColor = `linear-gradient(to ${objectStyle.direction} , ${objectStyle.color_1Value}, ${objectStyle.color_2Value})`
//     color_show.style.background = styleColor
//     result.textContent = styleColor
// })
// color_2.addEventListener('input', (e) => {
//     objectStyle.color_2Value = e.target.value
//     let styleColor = `linear-gradient(to ${objectStyle.direction} , ${objectStyle.color_1Value}, ${objectStyle.color_2Value})`
//     color_show.style.background = styleColor
//     result.textContent = styleColor

// })
const setDirection = (buttonValue) => {
    objectStyle.direction = buttonValue
    let styleColor = `linear-gradient(to ${objectStyle.direction} , ${objectStyle.color_1Value}, ${objectStyle.color_2Value})`
    color_show.style.background = styleColor
    result.textContent = styleColor

}


for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function (e) {
        form.addEventListener('submit', e => e.preventDefault())
        setDirection(e.target.value)
        let current = document.getElementsByClassName("active");
        let labels = document.querySelectorAll('label')
        current[0].className = current[0].className.replace("active", "");
        // this.className += " active";
        labels.forEach(e => (e.htmlFor === this.id) && (e.className += 'active'))
        // console.log(labels)


    });
}



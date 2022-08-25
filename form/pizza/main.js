let pizzaSize = document.getElementById('pizza_size')
let pizzaTopping = document.getElementById('topping')
let pizzaDelivery = document.getElementById('delivery')
let btn = document.getElementById('submit')
const cost = {
    size: {
        size2: 7.5,
        size3: 10.5,
        size4: 12.5,
        size5: 15.5,
    },
    topping: {
        free: 0,
        extra: 0.5,
    },
    delivery: {
        home: 5,
        other: 0,
    }
}


const calculate = () => {
    console.log(pizzaSize.value)
}


btn.addEventListener('click',calculate)
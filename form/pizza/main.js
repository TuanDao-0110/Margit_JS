let pizzaSize = document.getElementById('pizza_size')
let pizzaTopping = document.getElementById('topping')
let pizzaDelivery = document.getElementById('delivery')
let btn = document.getElementById('submit')
let bill = document.getElementById('bill')
// Cost for each 
const cost = {
    size: {
        size2: 7.5,
        size4: 10.5,
        size6: 12.5,
        size8: 15.5,
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

// calculate function : 
const calculate = () => {
    // create cost 
    let sizeCost = 0
    let toppingCost = 0
    let deliCost = 0
    let totalCost
    let flag = true

    while (flag) {
        // get value from radio and do calculation

        for (key in cost.size) {

            ((pizzaSize.elements['size'].value) == key) && (sizeCost = cost.size[key]);
        }

        // get value from checkbox 
        let count = 0
        for (const i of pizzaTopping) {
            i.checked && count++

        }
        (count > 4) ? (toppingCost = ((count - 4) * cost.topping.extra)) : (toppingCost = 0);
        // get value from select 

        ((pizzaDelivery.elements['deli'].value) == 'home') ? (deliCost = cost.delivery.home) : deliCost = 0;
        // check is
        flag = false

    }

    totalCost = sizeCost + toppingCost + deliCost;
    (sizeCost == 0) ? alert('you have to choose your pizza size') : (bill.textContent = `${totalCost} Eur Include (Pizza Cost : ${sizeCost}, Topping Cost: ${toppingCost}, Delivery Cost: ${deliCost})`);

}


btn.addEventListener('click', calculate)
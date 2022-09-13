let form = document.querySelector('form')
let inputs = document.querySelectorAll('#form input')
let data = document.querySelector('#data')
let reset = document.querySelector('#reset')
let searchButton = document.querySelector('#search')
let searchText = document.querySelector('#search_input')
let searchResult = document.querySelector('#search_result')
let resetTable = document.querySelector('#reset_table')
// create text input for data-table
let tableText = ''
// arr that store all information
let arrCar = [{
    licence: '1',
    carMaker: 'volvo',
    model: 'v40',
    price: 40000,
    color: 'blue',
    carOwner: 'joe'
},
{
    licence: '2',
    carMaker: 'toyota',
    model: 'corrola',
    price: 10000,
    color: 'red',
    carOwner: 'Rose'
},
{
    licence: '3',
    carMaker: 'toyota',
    model: 'corrola',
    price: 10000,
    color: 'red',
    carOwner: 'Jack'
}
]
// add car
const addData = (arrCar) => {
    tableText = ''
    arrCar?.map((item, index) => {
        tableText += `<tr ${index % 2 == 0 ? 'class= black' : ''}>
        <td>${item.licence}</td>
        <td>${item.carMaker}</td>
        <td>${item.model}</td>
        <td>${item.price}</td>
        <td>${item.color}</td>
        </tr>`

    })
    data.innerHTML = tableText

}
// auto add to table when open browser
addData(arrCar)
// submit the form to the table
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let temp = {}
    let index = 0
    for (item of inputs) {
        index++;
        let chectkIndex = arrCar.findIndex(e => e.licence === item.value)
        if (index === 1) {
            if (chectkIndex !== -1) {

                return alert('this licence number already used')
            } else {
                temp[item.name] = item.value

            }
        }
        if (index > 1) {
            temp[item.name] = item.value
        }
    }
    arrCar.push(temp)
    addData(arrCar)
    console.table(arrCar)
    resetInput()
})
// empty the input
const resetInput = () => {
    for (item of inputs) {
        item.value = ''
    }
}

// empty table
const emptyTable = () => {
    arrCar.length = 0
    addData(arrCar)
}
resetTable.addEventListener('click', emptyTable)
// click reset button to empty the input
reset.addEventListener('click', resetInput)
// search function
const search = () => {
    
    const index = arrCar?.findIndex(e => e.licence === searchText.value);
        (index !== -1) ? searchResult.textContent = `this car belong to ${arrCar[index].carOwner}` : searchResult.textContent = 'this licence no result';

}
searchButton.addEventListener('click', search)
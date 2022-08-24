let cel = (document.getElementById('cel'))
let fah = document.getElementById('fah')
let kel = document.getElementById('kel')
const convertFromCel = () => {
    fah.value = (parseFloat(cel.value ) *2 + 32).toFixed(2)
    kel.value = (parseFloat(cel.value )+273.15).toFixed(2)
}







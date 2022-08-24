let cel = document.getElementById('cel')
let fah = document.getElementById('fah')
let kel = document.getElementById('kel')
const convertFromCel = () => {
    fah.value = Math.floor(cel.value / 2)
    kel.value = Math.floor(cel.value / 3)
}







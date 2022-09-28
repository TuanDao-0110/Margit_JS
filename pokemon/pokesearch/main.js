let main = document.querySelector('.main')
let spieces = document.querySelector('.spieces')
let linkGetApiSpieces = 'https://pokeapi.co/api/v2/pokemon-species'
let cardRenderArea = document.querySelector('.main')
let spiecesArrBtns = []
let spiecesRenderArr = []



// call api function
const callApiPokemon = async (link) => {
    const data = await fetch(link)
    return await data.json()
}
// render spices button 
const renderSpicesBtn = async () => {
    spieces.innerHTML = ''
    await callApiPokemon(linkGetApiSpieces).then(res => {
        spiecesArrBtns = [...res.results]
    }
    )

    // console.log(spiecesArr)
    spiecesArrBtns.map((item, index) => {
        spieces.innerHTML += `<li><button id=${item.name} link=${item.url} class=${item.name}>${item.name}</button></li>`
    })
}


renderSpicesBtn()
// render each spices 


const renderSpieceCard =(arr)=> { 
    cardRenderArea.innerHTML =''
    arr?.map((item, index) => {
        container.innerHTML += ` 
        <div class="card">
        <div class="img">
                  <img src="${item.type.sprites.other.dream_world.front_default}" alt="">
        </div>
        <div class="text_description">
            <p><span class="name">${item.name}</span></p>
            <p><span class="type">${renderTypePokemon(item.type.types)}</span></p>
        </div>
      </div>`
    })
}



let container = document.querySelector('.container')
let linkAPIPokemon = 'https://pokeapi.co/api/v2/pokemon?limit=50'
let renderArray = []
const callApiPokemon = async (link) => {
    const data = await fetch(link)
    return await data.json()
}
const renderTypePokemon = (arr) => {
    // console.log(arr)
    return arr.map((item, index) => {
        return `<img class='${item.type.name} icon' src="../img/${item.type.name}.svg"/>`
    })
}
const createRenderCard = (arr) => {
    container.innerHTML = ''
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
// get all type of pokemon
callApiPokemon(linkAPIPokemon).then(res => {

    renderArray = [...res.results]

}).then(async () => {
    // after have each pokemon url link ==> we can call it get all information each pokemon
    // use async await for each arr ==> each item must have all information ==> before it can start render new card
    for (i = 0; i < renderArray.length; i++) {
        await callApiPokemon(renderArray[i].url).then(res => {
            renderArray[i].type = res
            return res
        })
    }
    createRenderCard(renderArray)
})





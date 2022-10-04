let main = document.querySelector('.main')
let spieces = document.querySelector('.spieces')
let inputSearch = document.querySelector('#search')
let container = document.querySelector('.container')
let pokeMonNumber = 0
let limitPokemon = 10
let linkAPIPokemon = `https://pokeapi.co/api/v2/pokemon?limit=${limitPokemon}&offset=${pokeMonNumber}`
let renderArray = []
const callApiPokemon = async (link) => {
    const data = await fetch(link)
    return await data.json()
}
// render type pokemon ==> which will show the porperty of pokemon on read card. 
const renderTypePokemon = (arr) => {
    // console.log(arr)
    return arr.map((item, index) => {
        return `<img class='${item.type.name} icon' src="../img/${item.type.name}.svg"/>`
    })
}
const createRenderCard = (arr) => {
    main.innerHTML = ''
    arr?.map((item, index) => {
        main.innerHTML += ` 
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
// get all type of pokemon by call api
const renderPokemonCard = (linkUrl) => {
    callApiPokemon(linkUrl).then((res) => {
        renderArray = [...res.results]

    }).then(() => {
        // after have each pokemon url link ==> we can call it get all information each pokemon
        // use async await for each arr ==> each item must have all information ==> before it can start render new card
        // for (i = 0; i < renderArray.length; i++) {
        //     await callApiPokemon(renderArray[i].url).then(res => {
        //         renderArray[i].type = res
        //         return res
        //     })
        // }


        // other way to do 
        let fetchs = renderArray.map((item, index) => {

            return callApiPokemon(renderArray[index].url)

        })

        Promise.all(fetchs).then(res => {

            res?.map((item, index) => {
                renderArray[index].type = item
            })
            createRenderCard(renderArray)
        }



        )

    })
}
// callrenderpokemoncard from the begining
renderPokemonCard(`${linkAPIPokemon}${pokeMonNumber}`)
// render gen button 
const renderSpicesBtn = () => {
    spieces.innerHTML = ''
    for (i = 1; i < 10; i++) {

        spieces.innerHTML += `<li>
        
        <button type="radio" 
       id="${i}" class="button-19" name="${i}" onclick="renderNewPokemon(${i},2)"
         >gen ${i}</button>
        </li>`

    }

}
// now we render button for each generation
renderSpicesBtn()
// function to render every generation

const renderNewPokemon = (id, limit) => {
    renderPokemonCard(`https://pokeapi.co/api/v2/pokemon?limit=${limit}0&offset=${id}0`)
}
// search for each pokemon when we type
const searchPokemon = (name) => {
    console.log(name.length)
    let tempArr = []
    for (i of renderArray) {
        console.log(i.name.slice(0, name.length))
        if (i.name.slice(0, name.length).toLowerCase() === name.toLowerCase()) {
            tempArr.push(i)
        }
    }
    if (name.length === 0) {

        createRenderCard(renderArray)
    } else {

        console.log('render new card' + tempArr)
        createRenderCard(tempArr)
    }
}

inputSearch.addEventListener('input', (e) => {
    searchPokemon(e.target.value)
})

let backTop = document.querySelector('#back_top')
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    let header = document.querySelector("header");
    // scroll > 100 ? (header.style.background = "tranparent") : (header.style.opacity = "1");
    scroll > 10 ? (header.classList.add("scroll_header")) : (header.classList.remove("scroll_header"));
    scroll < 10 ? backTop.classList.add('display_none') : backTop.classList.remove('display_none')
});

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};


// scroll function  back to top

backTop.addEventListener('click', topFunction)
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



let burger = document.querySelector('#burger')
let displayMenu = document.querySelector('#menu_detail')
burger.addEventListener('click', () => {
    burger.classList.contains('change') ? burger.classList.remove('change') : burger.classList.add('change')
    toogleMenu()
})



const toogleMenu = () => {
    if (displayMenu.classList.contains('display_menu')) {
        console.log('reomve')
        displayMenu.classList.remove('display_menu')
    } else {
        displayMenu.classList.add('display_menu')

    }


}


let menuButton = document.querySelectorAll('ul li a')

for (button of menuButton) {

    button.addEventListener('click', toogleMenu)
}


// add modal 

let modalButton = document.querySelector('#modal_open')
let modal = document.querySelector('#modal')
let closeModelButton = document.querySelector('#modal_button_close')
const opendModal = () => {
    if (modal.classList.contains('display_none')) {

        modal.classList.remove('display_none')
    }
}

const closeModal = () => {
    if (!modal.classList.contains('display_none')) {
        modal.classList.add('display_none')
    }
}

modalButton.addEventListener('click', opendModal);
closeModelButton.addEventListener('click', closeModal)
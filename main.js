//fai apparire il menu al click dell icona hb
const menuHamburger = document.querySelector(".hamburger-menu");
const clickHamburger = document.querySelector(".header-right > a");

clickHamburger.addEventListener("click", function () {
    /* console.log("click") */
    menuHamburger.style.display = "block"
})

//fai scomparire il menu al click dell icona di chiusura
const iconaDiChiusura = document.querySelector(".close")
iconaDiChiusura.addEventListener("click", function () {
    /* console.log("click") */
    menuHamburger.style.display = "none"
})
//inserisci l immagine mancante
const immagineLogo = document.querySelector(".header-left")
immagineLogo.innerHTML = '<img src="http://boolean.careers/images/misc/logo.png" alt="">'
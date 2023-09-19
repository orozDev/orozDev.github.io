function navToggle() {
    document.querySelector('#navBars').classList.toggle('hidden')
    document.querySelector('#navX').classList.toggle('hidden')
    document.querySelector('#navBar').classList.toggle('active')
    document.querySelector('nav').classList.toggle('poFixed')
    document.querySelector('#frame').classList.toggle('active')
}

function loginToggle() {
    document.querySelector('#loginId').classList.toggle('active')
    document.querySelector('#frame2').classList.toggle('active')
    document.querySelector('#login_card').classList.toggle('active')
}

function shoppingToggle() {
    document.querySelector('#shoppingId').classList.toggle('active')
    document.querySelector('#frame3').classList.toggle('active')
    document.querySelector('#shopping_card').classList.toggle('active')
}

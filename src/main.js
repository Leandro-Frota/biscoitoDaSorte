const buttonOpenOtherCookie= document.getElementById('buttonOpenOtherCookie')
const card = document.getElementById('card')
const cardMensage = document.getElementById('cardMensage')
const imageCracker = document.getElementById('imageCracker')

console.log(imageCracker)


imageCracker.addEventListener('click',()=>{
    card.classList.toggle('close')

    cardMensage.classList.toggle('open')
    cardMensage.classList.toggle('close')
})


buttonOpenOtherCookie.addEventListener("click",()=>{

    window.location.reload()
    // card.classList.toggle('close')
    // card.classList.toggle('open')

    // cardMensage.classList.toggle('open')
    // cardMensage.classList.toggle('close')
})
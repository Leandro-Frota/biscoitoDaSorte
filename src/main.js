const buttonOpenOtherCookie= document.getElementById('buttonOpenOtherCookie')
const card = document.getElementById('card')
const cardMensage = document.getElementById('cardMensage')
const imageCracker = document.getElementById('imageCracker')
const testMensage = document.getElementById('testMensage')

const phrases = {
    mensage1: ["A vida trará coisas boas se tiver paciência",
                "O bom-senso vale mais do que muito conhecimento.",
                "Quem quer colher rosas tem de estar preparado para suportar os espinhos.",
                "A sorte favorece a mente bem preparada.",
                "Você é do tamanho do seu sonhos",
                "Deixe de lado as preocupações e seja feliz.",
                "Nós somos o que pensamos.",
                "A maior barreira para o sucesso é o medo do fracasso.",
                "Motivação não é sinónimo de transformação, mas um passo em sua direção.",
                "O que empobrece o ser humano, não é a falta de dinheiro, mais sim, a falta de fé,motivação e criatividade.",
                "O pilar do sucesso é a constância"],

}


imageCracker.addEventListener('click',()=>{
    card.classList.toggle('close')

    cardMensage.classList.toggle('open')
    cardMensage.classList.toggle('close')

    let indice = Math.round(Math.random(0,1)*10)

    let phrase = phrases.mensage1[indice]
   
    testMensage.innerText = `${phrase}`
   
    
})


buttonOpenOtherCookie.addEventListener("click",()=>{

    window.location.reload()

})
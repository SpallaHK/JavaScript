function carregar(){
    var msg = document.getElementById('msg')
    var foto1 = document.getElementById('foto1')
    var data = new Date()
    var body = document.getElementsByTagName('body')[0]
    var hora = data.getHours()
    //var hora = 21


if(hora >= 5 && hora < 12){
    msg.innerHTML = `Bom dia, agora são ${hora} horas`
    foto1.src = 'imagens/morning/mountain.png'
    body.style.backgroundColor = '#FEC166'
}

else if(hora >= 12 && hora < 19){
    msg.innerHTML = `Boa tarde, agora são ${hora} horas`
    foto1.src = 'imagens/afternoon/afnoon.png'
    body.style.backgroundColor = '#b9846f'
}

else{
    msg.innerHTML = `Boa noite, agora são ${hora} horas`
    foto1.src = 'imagens/night/night.png'
    body.style.backgroundColor = '#0c1f46'
}


}

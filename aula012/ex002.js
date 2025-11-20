var now = new Date()
var hora = now.getHours()
var minutos = now.getMinutes()
console.log(`Agora são extamente ${hora} horas e ${minutos} minutos`)
if(hora < 12 && hora >= 5){
    console.log('Bom dia')
}
else if(hora >= 18 && hora < 23 || hora >= 0 && hora < 5){
    console.log('Boa noite')
}
else{
    console.log('Boa tarde')
}
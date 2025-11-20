var age = 59
console.log(`Você tem ${age} anos`)
if (age < 16){
    console.log('Você não vota')
}
else if (age >= 16 && age < 18 || age >= 65){
        console.log('Seu voto é opcional')}
    
 else{
        console.log('Seu voto é obrigatório')
    }

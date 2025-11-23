var soma1 = document.getElementById('soma1')
var soma2 = document.getElementById('soma2')
var subtr1 = document.getElementById('subtr1')
var subtr2 = document.getElementById('subtr2')
var mult1 = document.getElementById('mult1')
var mult2 = document.getElementById('mult2')
var divs1 = document.getElementById('divs1')
var divs2 = document.getElementById('divs2')
var potn1 = document.getElementById('potn1')
var potn2 = document.getElementById('potn2')
var radc1 = document.getElementById('radc1')
var radc2 = document.getElementById('radc2')
var porc1 = document.getElementById('porc1')
var porc2 = document.getElementById('porc2')



var button = window.document.getElementById('button')
const h = document.querySelector('.h')

function soma(){
    var s1 = Number(soma1.value)
    var s2 = Number(soma2.value)
    var s = s1 + s2
    var ress = document.getElementById('ress')
    ress.innerText = `O resultado da soma de ${s1} e ${s2} é igual a ${s}`
}

function subtr(){
    var sub1 = Number(subtr1.value)
    var sub2 = Number(subtr2.value)
    var sub0 = sub1 - sub2
    var ressub = document.getElementById('ressub')
    ressub.innerText = `O resultado da subtração de ${sub1} e ${sub2} é igual a ${sub0}`
}

function mult(){
    var mul1 = Number(mult1.value)
    var mul2 = Number(mult2.value)
    var mul0 = mul1 * mul2
    var resmult = document.getElementById('resmult')
    resmult.innerText = `O resultado da multiplicação de ${mul1} vezes ${mul2} é igual a ${mul0}`
}

function divs(){
    var div1 = Number(divs1.value)
    var div2 = Number(divs2.value)
    var div0 = div1 / div2
    var resdivs = document.getElementById('resdivs')
    resdivs.innerText = `O resultado da divisão de ${div1} por ${div2} é igual a ${div0}`
}

function potn(){
    var pot1 = Number(potn1.value)
    var pot2 = Number(potn2.value)
    var pot0 = Math.pow(pot1,pot2)
    //var pot0 = pot1**pot2
    var respotn = document.getElementById('respotn')
    respotn.innerHTML =` O resultado da potência de ${pot1} elevado a ${pot2}
    é igual a ${pot0}`
}

function radc(){
    var rad1 = Number(radc1.value)
    //var rad2 = Number(radc2.value)
    var rad0 = Math.sqrt(rad1)
    var resradc = document.getElementById('resradc')
    resradc.innerHTML = `A raiz quadrada de ${rad1} é igual a <strong style="text-decoration: underline;">${rad0}</strong>`
}

function porc(){
    var por1 = Number(porc1.value)
    var por2 = Number(porc2.value)
    var por3 = por1/100
    var por0 = por3*por2
    var resporc = document.getElementById('resporc')
    resporc.innerHTML = `${por0} Representa ${por1}% de ${por2}`

}

button.addEventListener('click', press )

function press(){
    ress.innerText = 'vai reprovar'
    ressub.innerText = 'mt burro'
    resmult.innerText = 'sabe nem matemática'
    resdivs.innerText = 'lerdão'
    h.innerText = 'burrão'
    button.style.boxShadow  = 'inset 2px 2px 10px 2px black'
}
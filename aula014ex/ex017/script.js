/* SOLUÇÃO 1
function calcular() {
    var num = document.getElementById('txtn')
    var res = document.getElementById('res')
    var n1 = Number(num.value)
    res.innerHTML = 
    `${n1} x 0 = 0 <br> 
    ${n1} x 1 = ${n1} <br>
    ${n1} x 2 = ${n1*2} <br>
    ${n1} x 3 = ${n1*3} <br>
    ${n1} x 4 = ${n1*4} <br>
    ${n1} x 5 = ${n1*5} <br>
    ${n1} x 6 = ${n1*6} <br>
    ${n1} x 7 = ${n1*7} <br>
    ${n1} x 8 = ${n1*8} <br>
    ${n1} x 9 = ${n1*9} <br>`
}
*/
/* SOLUÇÃO 2 [Ambas sem Select]
function calcular() {
    var num = document.getElementById('txtn')
    var res = document.getElementById('res')
    var n1 = Number(num.value)
    if (num.value.length == 0) {
        alert('Número inválido!')
    } else {
        var multi = 0
        res.innerHTML = ''
    while (multi < 10) {
        res.innerHTML += `${n1} x ${multi} = ${n1*multi} <br>` 
        multi ++
    }

    }    
}
*/
function calcular() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if (num.value.length ==0){
        alert('Número inválido')
    } else {
        var n1 = Number(num.value)
        tab.innerHTML = ''
        for (c= 0;c < 10;c++){
            var item = document.createElement('option')
            item.text = `${n1} x ${c} = ${n1*c}`
            item.value = `tab${c+1}`
            tab.appendChild(item)
        }
            
        
    }
    

}

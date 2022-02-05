let num = document.getElementById('numtxt')
let tab = document.getElementById('anatab')
let res = document.getElementById('res')
let conjunto = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <=100) {
        return true
    } else {
       return false 
    }

}

function inLista(n, l) {          // Verificando se há o nº na lista
    if (l.indexOf(Number(n))!= -1) {
        return true
    } else {
        return false
    }
    
}

function add() {
    if (isNumero(num.value) && !inLista(num.value, conjunto)) {
        conjunto.push(Number(num.value))
        let item = document.createElement('option')
        item.innerHTML = `Valor ${num.value} adicionado`
        tab.appendChild(item)
        res.innerHTML = ''

    }else {
        alert('Valor inválido ou já inserido!')
    }
    
    num.value = ''
    num.focus()
}

function analisar() {
    if (conjunto.length <= 1) {
        alert('Insira pelo menos dois números!')
    } else {
        let maior = conjunto[0]
        let menor = conjunto[0]
        let soma = 0
        let media = 0
        for (let pos in conjunto) {
            soma+= conjunto[pos]
            media = soma/conjunto.length
            if (conjunto[pos] > maior)
            maior = conjunto[pos]
            if (conjunto[pos] < menor)
            menor = conjunto[pos]
        }
        
        res.innerHTML = ''
        res.innerHTML += `<p>O número de itens é ${conjunto.length}</p>`
        res.innerHTML += `<p>O maior valor inserido é ${maior}</p>`
        res.innerHTML += `<p>O menor valor inserido é ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores é igual a ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é igual a ${media}</p>`

    }


}

/*function add() {
    if (num.value < 1 || num.value > 100 || num.length == 0) {
        alert('Número inválido! Digite um número de 1 a 100')
    } else {
        var item = document.createElement('option')
        item.innerHTML = `Valor ${num.value} adicionado`
        tab.appendChild(item)

    }

}
*/
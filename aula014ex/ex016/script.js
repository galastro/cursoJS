function contar() {
    var ini = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Faltam dados'
        window.alert('Insira pelo menos um número no campos!')
    } else {
        res.innerHTML = 'Resultado: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p<= 0) {
            p = 1
            alert('Valor impossível! Calculando com passo = 1')
        }
        if (i<f) {
            for (let c = i; c<= f; c+=p) {
                res.innerHTML += ` ${c}  \u{1F449}`   
            }
        } else {
            for (let c = i; c>= f; c-=p) {
                res.innerHTML += `${c} \u{1F449}`
    
            }

        }

        
            
            
        
        
        
        res.innerHTML += `\u{1F3C1}`

        
        

    }


}

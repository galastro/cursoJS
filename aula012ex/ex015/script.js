function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value <= 1900 || fano.value > ano) {
        window.alert('[ERRO] Verifique a data e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')  
        img.setAttribute('id', 'foto')

        var gen = ''
        if (fsex[0].checked) {
            gen = 'Mulher'
            if (idade >=0 && idade < 12){
                // criança
                img.setAttribute('src', 'fcriança.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'fjovem.png')
            } else if (idade < 59) {
                // adulta
                img.setAttribute('src', 'fadulta.png')
            } else {
                // idosa
                img.setAttribute('src', 'fidosa.png')
            } 
        } else {
            gen = 'Homem'
            if (idade >=0 && idade < 12){
                // criança
                img.setAttribute('src', 'hcriança.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'hjovem.png')
            } else if (idade < 59) {
                // adulto
                img.setAttribute('src', 'hadulto.png')
            } else  {
                // idoso
                img.setAttribute('src', 'hidoso.png')
            } 
        }
        var br = document.createElement("br")
        res.style.textAlign = 'center'
        res.innerHTML = `${gen}:  ${idade} anos`
        res.appendChild(br)
        res.appendChild(img)
        
        
    }
}
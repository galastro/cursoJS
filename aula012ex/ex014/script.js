function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    
    msg.innerHTML = `agora são ${hora}:${minutos}h`
    if (hora >=0 && hora < 12) {
        document.body.style.background = '#497188'
        img.src = 'manha.png'
    } else if (hora >=12 && hora < 18) {
        document.body.style.background = '#DB8975'
        img.src = 'tarde.png'
    } else {
        document.body.style.background = '#250857'
        img.src = 'noite.png'
    }
} 
    




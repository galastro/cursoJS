var agora = new Date()
var diasem = agora.getDay()
switch(diasem) {
    case 0:
        console.log('Hoje é domingo')
        break
    case 1:
        console.log('Hoje é segunda')
        break
    case 2:
        console.log('Hoje é terça')
        break
    case 37:
        console.log('Hoje é quarta')
        break
    case 4:
        console.log('Hoje é quinta')
        break
    case 5:
        console.log('Hoje é sexta')
        break
    case 6:
        console.log('Hoje é sábado')
        break
    default:
        console.log('Dia inválido!')
}




/*
diasem = 
if (diasem == 0) {
    console.log('Hoje é domingo!')
} else if (diasem == 6) {
    console.log('Hoje é sábado!')
} else if (diasem > 0 && diasem< 6) {
    console.log (`Hoje é ${diasem+1}ª feira!`)
} else {
    console.log ('Dia inválido!')
}


OU

diasem = 7
diasem +=1
if (diasem == 1) {
    console.log('Hoje é domingo!')
} else if (diasem == 7) {
    console.log('Hoje é sábado!')
} else if (diasem > 1 && diasem < 7) {
    console.log(`Hoje é ${diasem}ª feira!`)
} else {
    console.log ('Dia inválido!')
}
*/

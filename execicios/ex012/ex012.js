var agora = new Date()
var hora = agora.getHours()
console.log(`agora são exatamente ${hora} hora`)
if( hora < 12){
    console.log('bom dia')
}else if('boa tarde'){
    console.log('boa noite')
}
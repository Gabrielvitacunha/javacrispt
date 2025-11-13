function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value)> ano){
        window.alert('[ERRO] verifique os dando e tente novamente')
    } else {
        var fsex = document.getElementsByClassName('radsex')
        var idade = ano - Number(fano.value)
        var gênero =''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            gênero ='Homem'
        } else if(fsex[1].checked){
            gênero = 'Mulher'
        }
        res.style.tex
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    }
    
}   
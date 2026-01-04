function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0|| Number(fano.value) > ano){
        window.alert(`[ERRO] verifique os dados e tente novamte!`)
    }else{
        var fex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','imagen')
        if(fex[0].checked){
            gênero = 'homen'
            if(idade >=0 && idade <10){
                //criança
                img.setAttribute('src','imagens/crinçahomen.jpg')
            }else if (idade < 21){
                //jovem
                 img.setAttribute('src','imagens/adolecentehomen.jpg')
            }else if (idade < 50){
                //velho
                 img.setAttribute('src','imagens/adultohomen.jpg')
            }
        }else if(fex[1].checked){
            gênero = 'Mulher'
              if(idade >=0 && idade <10){
                //criança
                 img.setAttribute('src','imagens/crinçamulher.jpg')
            }else if (idade < 21){
                //jovem
                 img.setAttribute('src','imagens/adolecentemulher.jpg')
            }else if (idade < 50){
                //velho
                 img.setAttribute('src','imagens/adultamulher.jpg')
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML =`Detectamos ${gênero} com ${idade} ano `;
        res.appendChild(img)
        
        
    
      

    }
    
   
    
}   
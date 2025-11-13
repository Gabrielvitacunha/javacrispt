function carregar() {  
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`;
    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = 'imgens/amanha.jpg'
        document.body.style.background = '#f6a368'
    }else if(hora >= 12 && hora < 18){ 
        //boa tarde
         img.src = 'imgens/tarde.jpg'
         document.body.style.background = ' #8a4310bb'
    }else{
        // Boa noite
         img.src = 'imgens/noite.jpg'
          document.body.style.background = '#472d11c3'
    }
}

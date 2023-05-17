function carregar(){
    var msg = window.document.querySelector('#msg')
    var data = new Date()
    var hora = data.getHours()
    if (hora >= 1 && hora <= 5){
        msg.innerHTML = 'Que bela madrugada em, Seja bem vindo ao meu portifolio'
    }else if ( hora >= 6 && hora <= 12){
        msg.innerHTML = 'Que belo dia em, Seja bem vindo ao meu portifolio'
    }else if ( hora >= 13 && hora <= 18){
        msg.innerHTML = 'Que bela tarde em, Seja bem vindo ao meu portifolio'
    }else if( hora >= 19 && hora <= 24){
        msg.innerHTML = 'Que bela noite em, Seja bem vindo ao meu portifolio'
    }
}
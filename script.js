function carregar(){
    let msg = window.document.querySelector('div#msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let horaAtual = data.getHours()
    horaAtual = 8
    msg.innerHTML = `Agora são ${horaAtual} hora(s).`
    if (horaAtual >= 6 && horaAtual < 12) {
        img.src = "manha.png"
        msg.innerHTML += '<p>Bom Dia!</p>'
        window.document.body.style.background = '#da955d'
    } else if (horaAtual >= 12 && horaAtual < 18) {
        img.src = "tarde.png"
        msg.innerHTML += '<p>Boa Tarde!</p>'
        window.document.body.style.background = '#CA6F0D'
    } else if (horaAtual >= 0 && horaAtual < 6) {
        img.src = "noite.png"
        msg.innerHTML += '<p>Boa Madrugada!</p>'
        window.document.body.style.background = '#513859'
    } else {
        //Boa Noite!
        img.src = "noite.png"
        msg.innerHTML +='<p>Boa Noite!</p>'
        window.document.body.style.background = '#513859'
    }
}

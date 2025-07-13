function mostrardados(){
    var nome = document.getElementById('nome')
    var sobrenome = document.getElementById('sobrenome')
    var texto = document.getElementById('mensagem')

    texto.innerHTML = `Seu nome é ${nome.value} e seu sobrenome é ${sobrenome.value}...`
    texto.style.color = 'darkgreen'
}
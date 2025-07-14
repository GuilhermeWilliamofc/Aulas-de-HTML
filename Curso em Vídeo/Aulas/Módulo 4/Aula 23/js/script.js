function dados_enviados(event){
    event.preventDefault();
    var nome_digitado = document.getElementById('inome')
    var email_digitado = document.getElementById('iemail')
    var telefone_digitado = document.getElementById('itelefone')
    var texto = document.getElementById('mensagem')
    if (email_digitado.value.length != 0 && email_digitado.value.includes("@") && email_digitado.value.includes(".com") && telefone_digitado.value.length != 0){
    texto.innerHTML = ''
    texto.innerHTML = 'Dados enviados com sucesso!'
    texto.style.color = 'darkgreen'
    nome_digitado.value = ''
    email_digitado.value = ''
    telefone_digitado.value = ''
    }
    else{
        texto.innerHTML = 'Erro! Digite os Dados Corretamente para prosseguir!'
        texto.style.color = 'red'
    }
}

function limpar_texto(){
    var texto = document.getElementById('mensagem')
    texto.innerHTML = ''
}
function soma(){
    var num1 = Number(document.getElementById('inum1').value)
    var num2 = Number(document.getElementById('inum2').value)
    var soma = document.getElementById('isoma')

    if (num1 > 50 || num1 < 0 || num2 > 50 || num2 < 0){
        soma.innerHTML = 'Erro! Digite um número entre 0 e 50'
        soma.style.color = 'red'
        soma.style.fontWeight = 'bold'
    }
    else{
    var conta = num1 + num2
    soma.style.color = 'black'
    soma.innerHTML = conta
    soma.style.fontWeight = 'normal'
    }
}

function limpar_texto(){
    var soma = document.getElementById('isoma')
    soma.innerHTML = "0"
    soma.style.color = 'black'
    soma.style.fontWeight = 'normal'
}
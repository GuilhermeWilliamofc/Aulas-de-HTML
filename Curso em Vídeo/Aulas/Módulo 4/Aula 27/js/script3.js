var ano_digitado = document.getElementById('iano')
var data_atual = new Date()
var texto_idade = document.getElementById('iidade')
ano_digitado.max = data_atual.getFullYear()

function calcular_idade(){
    if (ano_digitado.value < 1900 || ano_digitado.value > data_atual.getFullYear()){
        texto_idade.innerHTML = `Erro! Digite um ano válido (Entre 1900 e ${data_atual.getFullYear()})`
        texto_idade.style.color = 'red'
        texto_idade.style.fontWeight = 'bold'
        return;
    }

    var calculo = Number(data_atual.getFullYear()) - Number(ano_digitado.value)

    texto_idade.innerHTML = calculo
    texto_idade.style.color = 'black'
    texto_idade.style.fontWeight = 'normal'
}

function limpar_texto(){
    texto_idade.innerHTML = '0'
    texto_idade.style.color = 'black'
    texto_idade.style.fontWeight = 'normal'
}
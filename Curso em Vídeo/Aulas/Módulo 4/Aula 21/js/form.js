var data_atual = new Date()
var ano_atual = data_atual.getFullYear()
var mes_atual = String(data_atual.getMonth() + 1).padStart(2, '0')
var dia_atual = String(data_atual.getDate()).padStart(2, '0')
var hora_atual = data_atual.getHours()
var min_atual = data_atual.getMinutes()

var hora_total_atual = `${hora_atual}:${min_atual}`
// padStart para garantir que o mês tenha dois digitos
// O método padStart() preenche a string original com um determinado caractere, ou conjunto de caracteres, (várias vezes, se necessário) até que a string resultante atinja o comprimento fornecido. O preenchimento é aplicado antes do primeiro caractere da string original.

var input_mes = document.getElementById('imes')
var input_data_completa = document.getElementById('idia')
var input_hora = document.getElementById('ihora')

input_mes.value = `${ano_atual}-${mes_atual}`
input_data_completa.value = `${ano_atual}-${mes_atual}-${dia_atual}`
input_hora.value = hora_total_atual
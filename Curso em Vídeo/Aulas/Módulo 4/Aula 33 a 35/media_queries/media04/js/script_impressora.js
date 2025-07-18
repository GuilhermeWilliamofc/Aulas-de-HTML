var data_atual = new Date()
var dia_atual = data_atual.getDate()
var mes_atual = data_atual.getMonth()
var ano_atual = data_atual.getFullYear()
var hora_atual = data_atual.getHours()
var min_atual = String(data_atual.getMinutes()).padStart(2, '0');

switch (mes_atual){
    case 0:
        mes_atual = 'Janeiro'
        break
    case 1:
        mes_atual = 'Fevereiro'
        break
    case 2:
        mes_atual = 'Março'
        break
    case 3:
        mes_atual = 'Abril'
        break
    case 4:
        mes_atual = 'Maio'
        break
    case 5:
        mes_atual = 'Junho'
        break
    case 6:
        mes_atual = 'Julho'
        break
    case 7:
        mes_atual = 'Agosto'
        break
    case 8:
        mes_atual = 'Setembro'
        break
    case 9:
        mes_atual = 'Outubro'
        break
    case 10:
        mes_atual = 'Novembro'
        break
    case 11:
        mes_atual = 'Dezembro'
        break
}

var data_e_hora_artigo_impresso = document.getElementById('data')
data_e_hora_artigo_impresso.innerHTML = `Esse site foi impresso no dia ${dia_atual} de ${mes_atual} de ${ano_atual} às ${hora_atual}:${min_atual}`
data_e_hora_artigo_impresso.style.fontWeight = 'bold'
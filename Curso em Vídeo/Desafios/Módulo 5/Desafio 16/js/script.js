function menu_hamburguer(){
    var opcoes = document.getElementById('menu')
    if (opcoes.style.display == 'none'){
        opcoes.style.display = 'block'
    }
    else{
        opcoes.style.display = 'none'
    }
}
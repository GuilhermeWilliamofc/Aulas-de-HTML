function menu_hamburguer(){
    var opcoes = document.getElementById('menu')
    if (opcoes.style.display == 'none'){
        opcoes.style.display = 'block'
    }
    else if (opcoes.style.display == 'block'){
        opcoes.style.display = 'none'
    }
    else{
        opcoes.style.display = 'block'
    }
}
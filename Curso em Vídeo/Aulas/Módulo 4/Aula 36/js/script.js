function abrir_fechar_menu(){
    var opcoes = document.getElementById('menu_opcoes')
    
    if (opcoes.style.display == 'none'){
        opcoes.style.display = 'block'
    }
    else{
        opcoes.style.display = 'none'
    }
}
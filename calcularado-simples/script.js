function inserir(num){
    const tela = document.getElementById('Result').innerHTML += num
}

function Remover(){
    const tela = document.getElementById('Result').innerHTML = ""
}


function Apagar(){
    const tela = document.getElementById('Result').innerHTML;
    document.getElementById('Result').innerHTML = tela.substring(0, tela.length -1)
}

function Calcular() {
    const tela = document.getElementById('Result').innerHTML;
    if(tela){
        document.getElementById('Result').innerHTML = eval(tela)
    }else {
        document.getElementById('Result').innerHTML = 'N/A'
    }

}

    
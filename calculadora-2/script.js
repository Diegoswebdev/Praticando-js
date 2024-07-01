let display = document.querySelector('.display');

function digito(n){
    const lastChar = display.innerHTML.slice(-1);
    const operadores = ['+', '-', '*', '/'];

    if(operadores.includes(n) && operadores.includes(lastChar)){
        return; // evitar a reptição de sinais
    }
    display.innerHTML += n; // inserir digito no display
}

function limpar(){
    display.innerHTML = ""; // função limpar tela
}

function apagar() {
    if (display.innerHTML.length > 0) {
        display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length -1);
    }
}

function calcular(){
    try {
        display.innerHTML = eval(display.innerHTML);
    } catch (e){
        display.innerHTML = 'erro';
    }
}
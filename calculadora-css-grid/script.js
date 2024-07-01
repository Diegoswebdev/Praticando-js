let display = document.querySelector('.display');

function digito(n){
    const noRepita = display.innerHTML.slice(-1);
    const operadores = ["/", "*", '-', "+",]
    
    if(operadores.includes(n) && operadores.includes(noRepita)){
        return; // vericação para não repitir os sinal de operação!
    }    
    display.innerHTML += n;
}

function limpar(){
    display.innerHTML = ""
}

function apagar(){
   if(display.innerHTML.length > 0){
    display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1)
   }
}

function operador(){
    try{
        display.innerHTML = eval(display.innerHTML);
    }catch(e){
        display.innerHTML = 'erro'
    }
}
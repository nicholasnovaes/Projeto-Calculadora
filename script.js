let resultado = document.querySelector('.result')
let igual = document.querySelector('.igual')

function insert(valor){
    resultado.textContent += valor
}

function clean(){
    resultado.textContent = ''
}

function backspace(){
    if(resultado.textContent){
        let result = document.getElementById('resultado').innerHTML
        resultado.textContent = result.substring(0, result.length -1)
    }
}

function confirma(){
    if(resultado.textContent !== 'Erro'){
        document.getElementById('resultado').innerHTML = eval(resultado.innerHTML)
    }
}
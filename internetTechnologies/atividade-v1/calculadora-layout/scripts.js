function insert(num) {
    var numero = document.getElementsById('resultado').innerHTML;
    document.getElementsById('resultado').innerHTML = numero + num;
}

function clean() {
    document.getElementsById('resultado').innerHTML = "";
}

function back() {
    var resultado = document.getElementsById('resultado').innerHTML;
    document.getElementsById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    var resultado = document.getElementsById('resultado').innerHTML;
    if (resultado) {
        document.getElementsById('resultado').innerHTML = eval(resultado);
    } else {
        document.getElementsById('resultado').innerHTML = "Nada..."
    }
}
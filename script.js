function soma() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);

    var resultado = num1 + num2;

    document.getElementById('resultado').innerHTML = resultado;
}

function subtracao() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);

    var resultado = num1 - num2;

    document.getElementById('resultado').innerHTML = resultado;
}

function multiplicacao() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);

    var resultado = num1 * num2;

    document.getElementById('resultado').innerHTML = resultado;
}

function divisao() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);

    var resultado = num1 / num2;

    document.getElementById('resultado').innerHTML = resultado;
}
function resultadoQuadrado() {

    var diferenca;
    var n1 = parseFloat(document.getElementById("numero1").value);
    var n2 = parseFloat(document.getElementById("numero2").value);

    diferenca = n1-n2;

    rQuadrado.value = Math.pow(diferenca, 2);
}
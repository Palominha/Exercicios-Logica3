function conversaoReal(){

    var arredondar;
    var valorDolar = parseFloat(document.getElementById("dolar").value);
    var dolar = 5.26;

    arredondar = valorDolar * dolar;

    conversao.value = arredondar.toFixed(2);

}
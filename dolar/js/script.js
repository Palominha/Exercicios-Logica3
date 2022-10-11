function conversaoDolar(){

    var arredondar;
    var valorReal = parseFloat(document.getElementById("real").value);
    var dolar = 5.26;

    arredondar = valorReal / dolar;

    conversao.value = arredondar.toFixed(2);

}
function quadradoNumero(){

    var resultado;

    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var numero3 = parseFloat(document.getElementById("numero3").value);
    
    qprimeiro.value = Math.pow(numero1, 2);

    qsegundo.value = Math.pow(numero2, 2);

    qterceiro.value = Math.pow(numero3, 2); 

    qtotal.value = qprimeiro.value + qsegundo.value + qterceiro.value;
}
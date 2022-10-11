function volumeCaixa(){
    var comprimento = parseFloat(document.getElementById("comprimento").value);
    var largura = parseFloat(document.getElementById("largura").value);
    var altura = parseFloat(document.getElementById("altura").value);

    volume.value = comprimento*largura*altura;

}
function eleitores(){

    let result1, result2, result3;

    let qntdEleitores = parseFloat(document.getElementById("qntdEleitores").value);
    let votosBrancos = parseFloat(document.getElementById("votosBrancos").value);
    let votosNulos = parseFloat(document.getElementById("votosNulos").value);
    let votosValidos = parseFloat(document.getElementById("votosValidos").value);

    result1 = votosBrancos/qntdEleitores*100;
    result2 = votosNulos/qntdEleitores*100;
    result3 = votosValidos/qntdEleitores*100;

    percentualBrancos.value = result1.toFixed(2);
    percentualNulos.value = result2.toFixed(2);
    percentualValidos.value = result3.toFixed(2);
}
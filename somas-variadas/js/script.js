function calculo() {
    var ab, ac, ad, bc, bd, cd; //Variaveis de Adição
    var axb, axc, axd, bxd, cxd; //Variaveis de Multiplicação

    // Pegando os numeros digitados
    var n1g = parseFloat(document.getElementById("numero1").value);
    var n2B = parseFloat(document.getElementById("numero2").value);
    var n3C = parseFloat(document.getElementById("numero3").value);
    var n4D = parseFloat(document.getElementById("numero4").value);


    // Calculo das somas
    ab = n1g + n2B;
    ac = n1g + n3C;
    ad = n1g + n4D;
    bc = n1g + n3C;
    bd = n2B + n4D;
    cd = n3C + n4D

    // Apresentado as somas
    soma.value = ab + ac + ad + bc + bd + cd;


    // Calculo das multiplicações

    axb = n1g * n2B
    axc = n1g * n3C
    axd = n1g * n4D
    bxc = n1g * n3C
    bxd = n2B * n4D
    cxd = n3C * n4D

    // Apresentano as multiplicações
    multiplicacao.value = axb +axc +axd +bxc +bxd +cxd;

}
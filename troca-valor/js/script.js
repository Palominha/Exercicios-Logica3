function trocaValor(){

    // Variaveis auxiliares
    let soman1n3, soman2n4;

    let n1 = parseFloat(document.getElementById("numero1").value);
    let n2 = parseFloat(document.getElementById("numero2").value);
    let n3 = parseFloat(document.getElementById("numero3").value);
    let n4 = parseFloat(document.getElementById("numero4").value);

    soman1n3 = n1 + n3;
    soman2n4 = n2 + n4;

    resultado1.value = soman1n3
    resultado2.value = soman2n4

}
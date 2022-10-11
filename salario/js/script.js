function reajusteSalario(){

    let resultado;

    let salario = parseFloat(document.getElementById("salario").value);
    let reajuste = parseFloat(document.getElementById("porcentagem").value);

    resultado = (reajuste/100+1)*salario;

    novosalario.value = resultado;


    
}
function Calcular() {

    var elementoResultado = document.getElementById("resultado");

    var notaPrimeiroBimestre = parseFloat(document.getElementById("primeiroBim").value);
    var notaSegundoBimestre = parseFloat(document.getElementById("segundoBim").value);
    var notaTerceiroBimestre = parseFloat(document.getElementById("terceiroBim").value);
    var notaQuartoBimestre = parseFloat(document.getElementById("quartoBim").value);

    var notaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4;

    var notaFixada = notaFinal.toFixed(2);

    if (notaFixada >= 6) {
        elementoResultado.innerHTML = "Você foi aprovado. Sua média foi de: " + notaFixada;
    } 
    else{
        elementoResultado.innerHTML = "Você foi reprovado. Sua média foi de: " + notaFixada;
    }

}
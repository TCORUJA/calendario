/*--SIMULADOR--*/
/*--Eventos que acontecem na pagina--*/
function calcularParte1(){

    /* document.querySelector('#divisaoMediaFinal2').style.display = "none";
    document.querySelector('#divisaoMediaFinal2Situacao').style.display = "none"; */

    /*--Chamar notas das AP's colocadas pelo aluno--*/
    var atividade1 = parseFloat(document.getElementById('atividade1').value.replace(",",".").replace("","0"));
    var atividade2 = parseFloat(document.getElementById('atividade2').value.replace(",",".").replace("","0"));
    var atividade3 = parseFloat(document.getElementById('atividade3').value.replace(",",".").replace("","0"));
    var atividade4 = parseFloat(document.getElementById('atividade4').value.replace(",",".").replace("","0"));

    /*--aceitar os valores das notas certo--*/
    if (atividade1 <= 2 && atividade2 <= 2.5 && atividade3 <= 5.5){
        /*--Calcular as notas colocadas pelo aluno e colocar no campo Parte1--*/
        var soma = atividade1 + atividade2 + atividade3;
        var somaDecimal = Math.trunc(soma * 100) / 100;
        document.getElementById('resultadoParte1').value = somaDecimal.toString().replace(".", ",");
        
        if(atividade4 >= atividade3){
            var soma = atividade1 + atividade2;
            document.getElementById('mediaFinal1').value = soma.toString().replace(".", ",");
        }
        else{
            document.getElementById('mediaFinal1').value = somaDecimal.toString().replace(".", ",");
        }

    }
    else if (atividade1 > 2 && atividade2 > 2.5 && atividade3 > 5.5){
        window.alert("Verifique se as notas de: \n\n\Escrita e Reflexão está entre 0 e 2\n\Questionário está entre 0 e 2,5\n\Prova Regular (presencial) está entre 0 e 5,5");
    }
    else if (atividade1 > 2 && atividade2 > 2.5){
        window.alert("Verifique se as notas de: \n\n\Escrita e Reflexão está entre 0 e 2\n\Questionário está entre 0 e 2,5");
    }
    else if (atividade1 > 2 && atividade3 > 5.5){
        window.alert("Verifique se as notas de: \n\n\Escrita e Reflexão está entre 0 e 2\n\Prova Regular (presencial) está entre 0 e 5,5");
    }
    else if (atividade2 > 2.5 && atividade3 > 5.5){
        window.alert("Verifique se as notas de: \n\Questionário está entre 0 e 2,5\n\Prova Regular (presencial) está entre 0 e 5,5");
    }
    else if (atividade1 > 2){
        window.alert("Verifique se a nota de Escrita e Reflexão está entre 0 e 2");
    }
    else if (atividade2 > 2.5){
        window.alert("Verifique se a nota de Questionário está entre 0 e 2,5");
    }
    else if (atividade3 > 5.5){
        window.alert("Verifique se a nota de Prova Regular (presencial) está entre 0 e 5,5");
    }

   
    
    /*--Condição da média do aluno--*/   
    var resultado = parseFloat(document.getElementById('resultadoParte1').value);
    var resultadoDecimal = Math.trunc(resultado * 100) / 100;

    if (resultadoDecimal >= 6) {
        document.getElementById('situacaoMediaFinal1').value = "Aprovado";
        document.getElementById('situacaoMediaFinal1').style.color = "#55cb50";
    }
    else {
        document.getElementById('situacaoMediaFinal1').value = ("Deve realizar a prova Substitutiva");
        document.getElementById('situacaoMediaFinal1').style.color = "#c2a202";
        document.getElementById('divisaoMediaFinal2').style.display = "grid";
        document.getElementById('divisaoMediaFinal2Situacao').style.display = "grid";
    }
    
    document.getElementById('mediaFinal1').disabled = true;
}

function calcularMediaFinal2(){
    /*--Chamar notas das AP's colocadas pelo aluno--*/
    var atividade1 = parseFloat(document.getElementById('atividade1').value.replace(",",".").replace("","0"));
    var atividade2 = parseFloat(document.getElementById('atividade2').value.replace(",",".").replace("","0"));
    var atividade3 = parseFloat(document.getElementById('atividade3').value.replace(",",".").replace("","0"));
    var atividade4 = parseFloat(document.getElementById('atividade4').value.replace(",",".").replace("","0"));
    var mediaFinal1 = parseFloat(document.getElementById('mediaFinal1').value.replace(",",".").replace("","0"));

    if(mediaFinal1 != ""){
        var soma = mediaFinal1 + atividade4;        
    }
    else if(atividade4 <= atividade3){
        var soma = atividade1 + atividade2 + atividade3;
        var somaDecimal = Math.trunc(soma * 100) / 100;
    
        document.getElementById('resultadoMediaFinal2').value = somaDecimal.toFixed(2).toString().replace(".", ",");
    }
    else if(atividade4 == atividade3){
        var soma = atividade1 + atividade2 + atividade3;
        var somaDecimal = Math.trunc(soma * 100) / 100;
    
        document.getElementById('resultadoMediaFinal2').value = somaDecimal.toFixed(2).toString().replace(".", ",");
    }
    else{
        var soma = atividade1 + atividade2 + atividade4;
        var somaDecimal = Math.trunc(soma * 100) / 100;
    
        document.getElementById('resultadoMediaFinal2').value = somaDecimal.toFixed(2).toString().replace(".", ",");
    }





    /*--aceitar os valores das notas certo--*/
    if (mediaFinal1 < 6  && atividade4 <= 5.5){
        /*--Calcular as notas colocadas pelo aluno e colocar no campo Parte1--*/
        var soma = mediaFinal1 + atividade4;
        var somaDecimal = Math.trunc(soma * 100) / 100;
        document.getElementById('resultadoMediaFinal2').value = somaDecimal.toString().replace(".", ",");

    }
    else if (mediaFinal1 > 6 && atividade4 > 5.5){
        window.alert("Verifique se as notas de: \n\n\Média está entre 0 e 6\n\Prova Substitutiva está entre 0 e 5,5");
    }
    else if (mediaFinal1 > 6){
        window.alert("Verifique se a nota de Média está entre 0 e 6");
    }
    else if (atividade4 > 5.5){
        window.alert("Verifique se a nota de Prova Substitutiva está entre 0 e 5,5");
        document.getElementById('atividade4').value = "";
        document.getElementById('resultadoMediaFinal2').value = "";
        document.getElementById('situacaoMediaFinal2').value = "";
    }
    else if(atividade4 >= atividade3){
        var soma = atividade1 + atividade2;
        document.getElementById('mediaFinal1').value = soma.toString().replace(".", ",");
    }
    else{
        document.getElementById('mediaFinal1').value = somaDecimal.toString().replace(".", ",");
    }

    

     /*--Condição da média do aluno--*/
    var resultado = parseFloat(document.getElementById('resultadoMediaFinal2').value);
    var resultadoDecimal = Math.trunc(resultado * 100) / 100;
    if (resultadoDecimal >= 6) {
        document.getElementById('situacaoMediaFinal2').value = "Aprovado";
        document.getElementById('situacaoMediaFinal2').style.color = "#55cb50";
    }
    else if (resultadoDecimal <= 6){
        document.getElementById('situacaoMediaFinal2').value = "Reprovado";        
        document.getElementById('situacaoMediaFinal2').style.color = "#c52010";
    }
}

function deletar(){
    document.location.reload(true);
}



$('#botaoInfo').click(function(){
    window.scrollTo(0, 0);
    $('.conteudoBotao').toggleClass('conteudoBotaoNone');
    $('.conteudoDecricao').toggleClass('conteudoDecricaoExibir');
    $('.conteudoSimulador').toggleClass('conteudoSimuladorNone');
});

$('#botaoInfoFechar').click(function(){
    $('.conteudoDecricao').toggleClass('conteudoDecricaoExibir');
    $('.conteudoBotao').toggleClass('conteudoBotaoNone');
    $('.conteudoSimulador').toggleClass('conteudoSimuladorNone');
});



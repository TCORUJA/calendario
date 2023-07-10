/*--SIMULADOR--*/
/*--Eventos que acontecem na pagina--*/
function calcularParte1(){

    /* document.querySelector('#divisaoMediaFinal2').style.display = "none";
    document.querySelector('#divisaoMediaFinal2Situacao').style.display = "none"; */

    /*--Chamar notas das AP's colocadas pelo aluno--*/
    var atividade1 = parseFloat(document.getElementById('atividade1').value.replace(",",".").replace("","0"));
    var atividade2 = parseFloat(document.getElementById('atividade2').value.replace(",",".").replace("","0"));
    var atividade3 = parseFloat(document.getElementById('atividade3').value.replace(",",".").replace("","0"));

    /*--aceitar os valores das notas certo--*/
    if (atividade1 <= 1 && atividade2 <= 3 && atividade3 <= 6){
        /*--Calcular as notas colocadas pelo aluno e colocar no campo Parte1--*/

        /*--Condição da média do aluno--*/
        var resultado = atividade1 + atividade2 + atividade3;
        var resultadoDecimal = Math.trunc(resultado * 10) / 10;
 
     if (resultadoDecimal >= 6) {
        document.getElementById('situacaoMediaFinal1').value = "Aprovado";
        document.getElementById('situacaoMediaFinal1').style.color = "#55cb50";
     }
     else {
        document.getElementById('situacaoMediaFinal1').value = "Reprovado";
        document.getElementById('situacaoMediaFinal1').style.color = "#c52010";
     }
    }
    else if (atividade1 > 1 && atividade2 > 3 && atividade3 > 6){
        window.alert("Verifique se as notas de: \n\nAvaliação 1 está entre 0 e 1\nAvaliação 2 está entre 0 e 3\nAvaliação 3 está entre 0 e 6");
    }
    else if (atividade1 > 1 && atividade2 > 3){
        window.alert("Verifique se as notas de: \n\nAvaliação 1 está entre 0 e 1\nAvaliação 2 está entre 0 e 3");
    }
    else if (atividade1 > 1 && atividade3 > 6){
        window.alert("Verifique se as notas de: \n\nAvaliação 1 está entre 0 e 1\nAvaliação 3 está entre 0 e 6");
    }
    else if (atividade2 > 3 && atividade3 > 6){
        window.alert("Verifique se as notas de: \nAvaliação 2 está entre 0 e 3\nAvaliação 3 está entre 0 e 6");
    }
    else if (atividade1 > 1){
        window.alert("Verifique se a nota de Avaliação 1 está entre 0 e 1");
    }
    else if (atividade2 > 3){
        window.alert("Verifique se a nota de Avaliação 2 está entre 0 e 3");
    }
    else if (atividade3 > 6){
        window.alert("Verifique se a nota de Avaliação 3 está entre 0 e 6");
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



/*--SIMULADOR--*/
/*--Eventos que acontecem na pagina--*/
function calcularParte1() {

    /* document.querySelector('#divisaoMediaFinal2').style.display = "none";
    document.querySelector('#divisaoMediaFinal2Situacao').style.display = "none"; */

    /*--Chamar notas das AP's colocadas pelo aluno--*/
    var atividade1 = parseFloat(document.getElementById('atividade1').value.replace(",", ".").replace("", "0"));
    var atividade2 = parseFloat(document.getElementById('atividade2').value.replace(",", ".").replace("", "0"));
    var atividade3 = parseFloat(document.getElementById('atividade3').value.replace(",", ".").replace("", "0"));
    var atividade4 = parseFloat(document.getElementById('atividade4').value.replace(",", ".").replace("", "0"));

    /*--aceitar os valores das notas certo--*/
    if (atividade1 <= 5 && atividade2 <= 5 && atividade3 <= 5 && atividade4 <= 5) {
        /*--Calcular as notas colocadas pelo aluno e colocar no campo Parte1--*/
        /* var soma = atividade1 + atividade2 + atividade3;
        var somaDecimal = Math.trunc(soma * 100) / 100; */

        /* if(atividade4 >= 0 && somaDecimal <= 15){ */

        var soma = atividade1 + atividade2 + atividade3 + atividade4 - Math.min(atividade1, atividade2, atividade3, atividade4);
        var somaDecimal = Math.trunc(soma * 100) / 100;

        document.getElementById('resultadoParte1').value = somaDecimal.toString().replace(".", ",");

    }
    else if (atividade1 > 5 && atividade2 > 5 && atividade3 > 5) {
        window.alert("Verifique na Competência 1 se as notas de: \n\n\Desafio está entre 0 e 5\n\Relatório está entre 0 e 5\n\Questionário está entre 0 e 5");
    }
    else if (atividade1 > 5 && atividade2 > 5) {
        window.alert("Verifique na Competência 1 se as notas de: \n\n\Desafio está entre 0 e 5\n\Relatório está entre 0 e 5");
    }
    else if (atividade1 > 5 && atividade3 > 5) {
        window.alert("Verifique na Competência 1 se as notas de: \n\n\Desafio está entre 0 e 5\n\Questionário está entre 0 e 5");
    }
    else if (atividade1 > 5 && atividade4 > 5) {
        window.alert("Verifique na Competência 1 se as notas de: \n\n\Desafio está entre 0 e 5\n\Recuperação está entre 0 e 5");
    }
    else if (atividade2 > 5 && atividade3 > 5) {
        window.alert("Verifique na Competência 1 se as notas de: \n\Relatório está entre 0 e 5\n\Questionário está entre 0 e 5");
    }
    else if (atividade2 > 5 && atividade4 > 5) {
        window.alert("Verifique na Competência 1 se as notas de: \n\Relatório está entre 0 e 5\n\Recuperação está entre 0 e 5");
    }
    else if (atividade3 > 5 && atividade4 > 5) {
        window.alert("Verifique na Competência 1 se as notas de: \n\Questionário está entre 0 e 5\n\Recuperação está entre 0 e 5");
    }
    else if (atividade1 > 5) {
        window.alert("Verifique na Competência 1 se a nota de Desafio está entre 0 e 5");
    }
    else if (atividade2 > 5) {
        window.alert("Verifique na Competência 1 se a nota de Relatório está entre 0 e 5");
    }
    else if (atividade3 > 5) {
        window.alert("Verifique na Competência 1 se a nota de Questionário está entre 0 e 5");
    }
    else if (atividade4 > 5) {
        window.alert("Verifique na Competência 1 se a nota de Recuperação está entre 0 e 5");
    }


    var resultadoParte1 = parseFloat(document.getElementById('resultadoParte1').value.replace(",", ".").replace("", "0"));
    var resultadoParte2 = parseFloat(document.getElementById('resultadoParte2').value.replace(",", ".").replace("", "0"));
    var resultadoParte3 = parseFloat(document.getElementById('resultadoParte3').value.replace(",", ".").replace("", "0"));
    var resultadoParte4 = parseFloat(document.getElementById('resultadoParte4').value.replace(",", ".").replace("", "0"));

    var soma = resultadoParte1 + resultadoParte2 + resultadoParte3 + resultadoParte4;
    var somaDecimal = Math.trunc(soma * 100) / 100;
    document.getElementById('mediaFinal1').value = somaDecimal.toString().replace(".", ",");
}

function calcularParte2() {

    /* document.querySelector('#divisaoMediaFinal2').style.display = "none";
    document.querySelector('#divisaoMediaFinal2Situacao').style.display = "none"; */

    /*--Chamar notas das AP's colocadas pelo aluno--*/
    var atividade1 = parseFloat(document.getElementById('atividade5').value.replace(",", ".").replace("", "0"));
    var atividade2 = parseFloat(document.getElementById('atividade6').value.replace(",", ".").replace("", "0"));
    var atividade3 = parseFloat(document.getElementById('atividade7').value.replace(",", ".").replace("", "0"));
    var atividade4 = parseFloat(document.getElementById('atividade8').value.replace(",", ".").replace("", "0"));

    /*--aceitar os valores das notas certo--*/
    if (atividade1 <= 5 && atividade2 <= 5 && atividade3 <= 5 && atividade4 <= 5) {
        /*--Calcular as notas colocadas pelo aluno e colocar no campo Parte1--*/
        /* var soma = atividade1 + atividade2 + atividade3;
        var somaDecimal = Math.trunc(soma * 100) / 100; */

        /* if(atividade4 >= 0 && somaDecimal <= 15){ */

        var soma = atividade1 + atividade2 + atividade3 + atividade4 - Math.min(atividade1, atividade2, atividade3, atividade4);
        var somaDecimal = Math.trunc(soma * 100) / 100;

        document.getElementById('resultadoParte2').value = somaDecimal.toString().replace(".", ",");

    }
    else if (atividade1 > 5 && atividade2 > 5 && atividade3 > 5) {
        window.alert("Verifique na Competência 2 se as notas de: \n\n\Desafio está entre 0 e 5\n\Relatório está entre 0 e 5\n\Questionário está entre 0 e 5");
    }
    else if (atividade1 > 5 && atividade2 > 5) {
        window.alert("Verifique na Competência 2 se as notas de: \n\n\Desafio está entre 0 e 5\n\Relatório está entre 0 e 5");
    }
    else if (atividade1 > 5 && atividade3 > 5) {
        window.alert("Verifique na Competência 2 se as notas de: \n\n\Desafio está entre 0 e 5\n\Questionário está entre 0 e 5");
    }
    else if (atividade1 > 5 && atividade4 > 5) {
        window.alert("Verifique na Competência 2 se as notas de: \n\n\Desafio está entre 0 e 5\n\Recuperação está entre 0 e 5");
    }
    else if (atividade2 > 5 && atividade3 > 5) {
        window.alert("Verifique na Competência 2 se as notas de: \n\Relatório está entre 0 e 5\n\Questionário está entre 0 e 5");
    }
    else if (atividade2 > 5 && atividade4 > 5) {
        window.alert("Verifique na Competência 2 se as notas de: \n\Relatório está entre 0 e 5\n\Recuperação está entre 0 e 5");
    }
    else if (atividade3 > 5 && atividade4 > 5) {
        window.alert("Verifique na Competência 2 se as notas de: \n\Questionário está entre 0 e 5\n\Recuperação está entre 0 e 5");
    }
    else if (atividade1 > 5) {
        window.alert("Verifique na Competência 2 se a nota de Desafio está entre 0 e 5");
    }
    else if (atividade2 > 5) {
        window.alert("Verifique na Competência 2 se a nota de Relatório está entre 0 e 5");
    }
    else if (atividade3 > 5) {
        window.alert("Verifique na Competência 2 se a nota de Questionário está entre 0 e 5");
    }
    else if (atividade4 > 5) {
        window.alert("Verifique na Competência 2 se a nota de Recuperação está entre 0 e 5");
    }


    var resultadoParte1 = parseFloat(document.getElementById('resultadoParte1').value.replace(",", ".").replace("", "0"));
    var resultadoParte2 = parseFloat(document.getElementById('resultadoParte2').value.replace(",", ".").replace("", "0"));
    var resultadoParte3 = parseFloat(document.getElementById('resultadoParte3').value.replace(",", ".").replace("", "0"));
    var resultadoParte4 = parseFloat(document.getElementById('resultadoParte4').value.replace(",", ".").replace("", "0"));

    var soma = resultadoParte1 + resultadoParte2 + resultadoParte3 + resultadoParte4;
    var somaDecimal = Math.trunc(soma * 100) / 100;
    document.getElementById('mediaFinal1').value = somaDecimal.toString().replace(".", ",");
}

function calcularParte3() {

    /* document.querySelector('#divisaoMediaFinal2').style.display = "none";
    document.querySelector('#divisaoMediaFinal2Situacao').style.display = "none"; */

    /*--Chamar notas das AP's colocadas pelo aluno--*/
    var atividade1 = parseFloat(document.getElementById('atividade9').value.replace(",", ".").replace("", "0"));
    var atividade2 = parseFloat(document.getElementById('atividade10').value.replace(",", ".").replace("", "0"));
    var atividade3 = parseFloat(document.getElementById('atividade11').value.replace(",", ".").replace("", "0"));
    var atividade4 = parseFloat(document.getElementById('atividade12').value.replace(",", ".").replace("", "0"));

    /*--aceitar os valores das notas certo--*/
    if (atividade1 <= 5 && atividade2 <= 5 && atividade3 <= 5 && atividade4 <= 5) {
        /*--Calcular as notas colocadas pelo aluno e colocar no campo Parte1--*/
        /* var soma = atividade1 + atividade2 + atividade3;
        var somaDecimal = Math.trunc(soma * 100) / 100; */

        /* if(atividade4 >= 0 && somaDecimal <= 15){ */

        var soma = atividade1 + atividade2 + atividade3 + atividade4 - Math.min(atividade1, atividade2, atividade3, atividade4);
        var somaDecimal = Math.trunc(soma * 100) / 100;

        document.getElementById('resultadoParte3').value = somaDecimal.toString().replace(".", ",");

    }
    else if (atividade1 > 5 && atividade2 > 5 && atividade3 > 5) {
        window.alert("Verifique na Competência 3 se as notas de: \n\n\Desafio está entre 0 e 5\n\Relatório está entre 0 e 5\n\Questionário está entre 0 e 5");
    }
    else if (atividade1 > 5 && atividade2 > 5) {
        window.alert("Verifique na Competência 3 se as notas de: \n\n\Desafio está entre 0 e 5\n\Relatório está entre 0 e 5");
    }
    else if (atividade1 > 5 && atividade3 > 5) {
        window.alert("Verifique na Competência 3 se as notas de: \n\n\Desafio está entre 0 e 5\n\Questionário está entre 0 e 5");
    }
    else if (atividade1 > 5 && atividade4 > 5) {
        window.alert("Verifique na Competência 3 se as notas de: \n\n\Desafio está entre 0 e 5\n\Recuperação está entre 0 e 5");
    }
    else if (atividade2 > 5 && atividade3 > 5) {
        window.alert("Verifique na Competência 3 se as notas de: \n\Relatório está entre 0 e 5\n\Questionário está entre 0 e 5");
    }
    else if (atividade2 > 5 && atividade4 > 5) {
        window.alert("Verifique na Competência 3 se as notas de: \n\Relatório está entre 0 e 5\n\Recuperação está entre 0 e 5");
    }
    else if (atividade3 > 5 && atividade4 > 5) {
        window.alert("Verifique na Competência 3 se as notas de: \n\Questionário está entre 0 e 5\n\Recuperação está entre 0 e 5");
    }
    else if (atividade1 > 5) {
        window.alert("Verifique na Competência 3 se a nota de Desafio está entre 0 e 5");
    }
    else if (atividade2 > 5) {
        window.alert("Verifique na Competência 3 se a nota de Relatório está entre 0 e 5");
    }
    else if (atividade3 > 5) {
        window.alert("Verifique na Competência 3 se a nota de Questionário está entre 0 e 5");
    }
    else if (atividade4 > 5) {
        window.alert("Verifique na Competência 3 se a nota de Recuperação está entre 0 e 5");
    }


    var resultadoParte1 = parseFloat(document.getElementById('resultadoParte1').value.replace(",", ".").replace("", "0"));
    var resultadoParte2 = parseFloat(document.getElementById('resultadoParte2').value.replace(",", ".").replace("", "0"));
    var resultadoParte3 = parseFloat(document.getElementById('resultadoParte3').value.replace(",", ".").replace("", "0"));
    var resultadoParte4 = parseFloat(document.getElementById('resultadoParte4').value.replace(",", ".").replace("", "0"));

    var soma = resultadoParte1 + resultadoParte2 + resultadoParte3 + resultadoParte4;
    var somaDecimal = Math.trunc(soma * 100) / 100;
    document.getElementById('mediaFinal1').value = somaDecimal.toString().replace(".", ",");
}

function calcularParte4() {

    /* document.querySelector('#divisaoMediaFinal2').style.display = "none";
    document.querySelector('#divisaoMediaFinal2Situacao').style.display = "none"; */

    /*--Chamar notas das AP's colocadas pelo aluno--*/
    var atividade1 = parseFloat(document.getElementById('atividade13').value.replace(",", ".").replace("", "0"));
    var atividade2 = parseFloat(document.getElementById('atividade14').value.replace(",", ".").replace("", "0"));
    var atividade3 = parseFloat(document.getElementById('atividade15').value.replace(",", ".").replace("", "0"));
    var atividade4 = parseFloat(document.getElementById('atividade16').value.replace(",", ".").replace("", "0"));

    /*--aceitar os valores das notas certo--*/
    if (atividade1 <= 5 && atividade2 <= 5 && atividade3 <= 5 && atividade4 <= 5) {
        /*--Calcular as notas colocadas pelo aluno e colocar no campo Parte1--*/
        /* var soma = atividade1 + atividade2 + atividade3;
        var somaDecimal = Math.trunc(soma * 100) / 100; */

        /* if(atividade4 >= 0 && somaDecimal <= 15){ */

        var soma = atividade1 + atividade2 + atividade3 + atividade4 - Math.min(atividade1, atividade2, atividade3, atividade4);
        var somaDecimal = Math.trunc(soma * 100) / 100;

        document.getElementById('resultadoParte4').value = somaDecimal.toString().replace(".", ",");

    }
    else if (atividade1 > 5 && atividade2 > 5 && atividade3 > 5) {
        window.alert("Verifique na Competência 4 se as notas de: \n\n\Desafio está entre 0 e 5\n\Relatório está entre 0 e 5\n\Questionário está entre 0 e 5");
    }
    else if (atividade1 > 5 && atividade2 > 5) {
        window.alert("Verifique na Competência 4 se as notas de: \n\n\Desafio está entre 0 e 5\n\Relatório está entre 0 e 5");
    }
    else if (atividade1 > 5 && atividade3 > 5) {
        window.alert("Verifique na Competência 4 se as notas de: \n\n\Desafio está entre 0 e 5\n\Questionário está entre 0 e 5");
    }
    else if (atividade1 > 5 && atividade4 > 5) {
        window.alert("Verifique na Competência 4 se as notas de: \n\n\Desafio está entre 0 e 5\n\Recuperação está entre 0 e 5");
    }
    else if (atividade2 > 5 && atividade3 > 5) {
        window.alert("Verifique na Competência 4 se as notas de: \n\Relatório está entre 0 e 5\n\Questionário está entre 0 e 5");
    }
    else if (atividade2 > 5 && atividade4 > 5) {
        window.alert("Verifique na Competência 4 se as notas de: \n\Relatório está entre 0 e 5\n\Recuperação está entre 0 e 5");
    }
    else if (atividade3 > 5 && atividade4 > 5) {
        window.alert("Verifique na Competência 4 se as notas de: \n\Questionário está entre 0 e 5\n\Recuperação está entre 0 e 5");
    }
    else if (atividade1 > 5) {
        window.alert("Verifique na Competência 4 se a nota de Desafio está entre 0 e 5");
    }
    else if (atividade2 > 5) {
        window.alert("Verifique na Competência 4 se a nota de Relatório está entre 0 e 5");
    }
    else if (atividade3 > 5) {
        window.alert("Verifique na Competência 4 se a nota de Questionário está entre 0 e 5");
    }
    else if (atividade4 > 5) {
        window.alert("Verifique na Competência 4 se a nota de Recuperação está entre 0 e 5");
    }


    var resultadoParte1 = parseFloat(document.getElementById('resultadoParte1').value.replace(",", ".").replace("", "0"));
    var resultadoParte2 = parseFloat(document.getElementById('resultadoParte2').value.replace(",", ".").replace("", "0"));
    var resultadoParte3 = parseFloat(document.getElementById('resultadoParte3').value.replace(",", ".").replace("", "0"));
    var resultadoParte4 = parseFloat(document.getElementById('resultadoParte4').value.replace(",", ".").replace("", "0"));

    var soma = resultadoParte1 + resultadoParte2 + resultadoParte3 + resultadoParte4;
    var somaDecimal = Math.trunc(soma * 100) / 100;
    document.getElementById('mediaFinal1').value = somaDecimal.toString().replace(".", ",");
}



function calcularMediaFinal1() {
    /*--Chamar notas das AP's colocadas pelo aluno--*/
    var atividade1 = parseFloat(document.getElementById('mediaFinal1').value.replace(",", ".").replace("", "0"));
    var atividade2 = parseFloat(document.getElementById('atividade17').value.replace(",", ".").replace("", "0"));
    var atividade3 = parseFloat(document.getElementById('atividade18').value.replace(",", ".").replace("", "0"));
    var atividade4 = parseFloat(document.getElementById('atividade19').value.replace(",", ".").replace("", "0"));
    
    
    if (atividade1 <= 60 && atividade2 <= 40 && atividade3 <= 100 && atividade4 <= 100) {
        var soma = atividade1 + atividade2 + atividade3 + atividade4 - Math.min(atividade3, atividade4);
        var somaDecimal = (Math.trunc(soma * 100) / 1000) / 2;

        document.getElementById('resultadoMediaFinal1').value = somaDecimal.toString().replace(".", ",");
    }    /* 
    else if (atividade1 > 5 && atividade2 > 5 && atividade3 > 5) {
        window.alert("Verifique na Competência 4 se as notas de: \n\n\Desafio está entre 0 e 5\n\Relatório está entre 0 e 5\n\Questionário está entre 0 e 5");
    }
    else if (atividade1 > 5 && atividade2 > 5) {
        window.alert("Verifique na Competência 4 se as notas de: \n\n\Desafio está entre 0 e 5\n\Relatório está entre 0 e 5");
    }
    else if (atividade1 > 5 && atividade3 > 5) {
        window.alert("Verifique na Competência 4 se as notas de: \n\n\Desafio está entre 0 e 5\n\Questionário está entre 0 e 5");
    }
    else if (atividade1 > 5 && atividade4 > 5) {
        window.alert("Verifique na Competência 4 se as notas de: \n\n\Desafio está entre 0 e 5\n\Recuperação está entre 0 e 5");
    }
    else if (atividade2 > 5 && atividade3 > 5) {
        window.alert("Verifique na Competência 4 se as notas de: \n\Relatório está entre 0 e 5\n\Questionário está entre 0 e 5");
    }
    else if (atividade2 > 5 && atividade4 > 5) {
        window.alert("Verifique na Competência 4 se as notas de: \n\Relatório está entre 0 e 5\n\Recuperação está entre 0 e 5");
    }
    else if (atividade3 > 5 && atividade4 > 5) {
        window.alert("Verifique na Competência 4 se as notas de: \n\Questionário está entre 0 e 5\n\Recuperação está entre 0 e 5");
    }
    else if (atividade1 > 5) {
        window.alert("Verifique na Competência 4 se a nota de Desafio está entre 0 e 5");
    }
    else if (atividade2 > 5) {
        window.alert("Verifique na Competência 4 se a nota de Relatório está entre 0 e 5");
    }
    else if (atividade3 > 5) {
        window.alert("Verifique na Competência 4 se a nota de Questionário está entre 0 e 5");
    }
    else if (atividade4 > 5) {
        window.alert("Verifique na Competência 4 se a nota de Recuperação está entre 0 e 5");
    }
 */

    /*--Condição da média do aluno--*/
    var resultado = parseFloat(document.getElementById('resultadoMediaFinal1').value);
    var resultadoDecimal = Math.trunc(resultado * 100) / 100;

    if (resultadoDecimal >= 6) {
        document.getElementById('situacaoMediaFinal1').value = "Aprovado";
        document.getElementById('situacaoMediaFinal1').style.color = "#55cb50";
    }
    else {
        document.getElementById('situacaoMediaFinal1').value = "Reprovado";
        document.getElementById('situacaoMediaFinal1').style.color = "#c52010";
    }
}

function deletar() {
    document.location.reload(true);
}



$('#botaoInfo').click(function () {
    window.scrollTo(0, 0);
    $('.conteudoBotao').toggleClass('conteudoBotaoNone');
    $('.conteudoDecricao').toggleClass('conteudoDecricaoExibir');
    $('.conteudoSimulador').toggleClass('conteudoSimuladorNone');
});

$('#botaoInfoFechar').click(function () {
    $('.conteudoDecricao').toggleClass('conteudoDecricaoExibir');
    $('.conteudoBotao').toggleClass('conteudoBotaoNone');
    $('.conteudoSimulador').toggleClass('conteudoSimuladorNone');
});



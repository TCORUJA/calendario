/* SIMULADOR */
/* Eventos que acontecem na pagina */
function calcularParte1() {
    /* Chamar notas das avaliações colocadas pelo aluno */
    var atividade1 = parseFloat(document.getElementById('atividade1').value.replace(",", ".").replace("", "0"));
    var atividade2 = parseFloat(document.getElementById('atividade2').value.replace(",", ".").replace("", "0"));
    var atividade3 = parseFloat(document.getElementById('atividade3').value.replace(",", ".").replace("", "0"));
    var atividade4 = parseFloat(document.getElementById('atividade4').value.replace(",", ".").replace("", "0"));

    /* Verificar se o aluno precisa de recuperação ou não */
    if (atividade1 <= 5 && atividade2 <= 5 && atividade3 <= 5 && atividade4 <= 5) {
            var atividadesRegulares = atividade1 + atividade2 + atividade3;

        if (atividadesRegulares >= 10.5){
            /* Ocultar recuperação */
            var nomeRecuperacao = document.getElementById('nomeRecuperacao4');
            nomeRecuperacao.classList.add('nomeRecuperacao4');
            document.getElementById('atividade4').value = "";

            /* Calculo sem recuperação */
            var soma = atividade1 + atividade2 + atividade3;
            var somaDecimal = Math.round(soma * 10) / 10;
            
        }
        else{
            /* Exibir recuperação */
            var nomeRecuperacao = document.getElementById('nomeRecuperacao4');
            nomeRecuperacao.classList.remove('nomeRecuperacao4');

            /* Calculo com recuperação */
            var atividades = atividade1 + atividade2 + atividade3 + atividade4 - Math.min(atividade1, atividade2, atividade3, atividade4);
            if (atividades >=10.5){
                var soma = 10.5;
            }
            else{
                var soma = atividade1 + atividade2 + atividade3 + atividade4 - Math.min(atividade1, atividade2, atividade3, atividade4);
            }
            var somaDecimal = Math.round(soma * 10) / 10;
        }
        
        /* Média do calculo com ou sem recuperação */
        document.getElementById('resultadoParte1').value = somaDecimal.toString().replace(".", ",");
    }
    /* Verificar se os valores colocados estão dentro do permitido para a avaliação */
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

    
    /* Soma das notas das competências */
    var resultadoParte1 = parseFloat(document.getElementById('resultadoParte1').value.replace(",", ".").replace("", "0"));
    var resultadoParte2 = parseFloat(document.getElementById('resultadoParte2').value.replace(",", ".").replace("", "0"));
    var resultadoParte3 = parseFloat(document.getElementById('resultadoParte3').value.replace(",", ".").replace("", "0"));
    var resultadoParte4 = parseFloat(document.getElementById('resultadoParte4').value.replace(",", ".").replace("", "0"));

    var soma = resultadoParte1 + resultadoParte2 + resultadoParte3 + resultadoParte4;
    var somaDecimal = Math.round(soma * 10) / 10;
    document.getElementById('mediaFinal1').value = somaDecimal.toString().replace(".", ",");
}

function calcularParte2() {
    /* Chamar notas das avaliações colocadas pelo aluno */
    var atividade1 = parseFloat(document.getElementById('atividade5').value.replace(",", ".").replace("", "0"));
    var atividade2 = parseFloat(document.getElementById('atividade6').value.replace(",", ".").replace("", "0"));
    var atividade3 = parseFloat(document.getElementById('atividade7').value.replace(",", ".").replace("", "0"));
    var atividade4 = parseFloat(document.getElementById('atividade8').value.replace(",", ".").replace("", "0"));

    /* Verificar se o aluno precisa de recuperação ou não */
    if (atividade1 <= 5 && atividade2 <= 5 && atividade3 <= 5 && atividade4 <= 5) {
            var atividadesRegulares = atividade1 + atividade2 + atividade3;

        if (atividadesRegulares >= 10.5){
            /* Ocultar recuperação */
            var nomeRecuperacao = document.getElementById('nomeRecuperacao8');
            nomeRecuperacao.classList.add('nomeRecuperacao8');
            document.getElementById('atividade8').value = "";

            /* Calculo sem recuperação */
            var soma = atividade1 + atividade2 + atividade3;
            var somaDecimal = Math.round(soma * 10) / 10;
        }
        else{
            /* Exibir recuperação */
            var nomeRecuperacao = document.getElementById('nomeRecuperacao8');
            nomeRecuperacao.classList.remove('nomeRecuperacao8');

            /* Calculo com recuperação */
            var atividades = atividade1 + atividade2 + atividade3 + atividade4 - Math.min(atividade1, atividade2, atividade3, atividade4);
            if (atividades >=10.5){
                var soma = 10.5;
            }
            else{
                var soma = atividade1 + atividade2 + atividade3 + atividade4 - Math.min(atividade1, atividade2, atividade3, atividade4);
            }
            var somaDecimal = Math.round(soma * 10) / 10;
        }
        
        /* Média do calculo com ou sem recuperação */
        document.getElementById('resultadoParte2').value = somaDecimal.toString().replace(".", ",");
    }
    /* Verificar se os valores colocados estão dentro do permitido para a avaliação */
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

    
    /* Soma das notas das competências */
    var resultadoParte1 = parseFloat(document.getElementById('resultadoParte1').value.replace(",", ".").replace("", "0"));
    var resultadoParte2 = parseFloat(document.getElementById('resultadoParte2').value.replace(",", ".").replace("", "0"));
    var resultadoParte3 = parseFloat(document.getElementById('resultadoParte3').value.replace(",", ".").replace("", "0"));
    var resultadoParte4 = parseFloat(document.getElementById('resultadoParte4').value.replace(",", ".").replace("", "0"));

    var soma = resultadoParte1 + resultadoParte2 + resultadoParte3 + resultadoParte4;
    var somaDecimal = Math.round(soma * 10) / 10;
    document.getElementById('mediaFinal1').value = somaDecimal.toString().replace(".", ",");
}

function calcularParte3() {
    /* Chamar notas das avaliações colocadas pelo aluno */
    var atividade1 = parseFloat(document.getElementById('atividade9').value.replace(",", ".").replace("", "0"));
    var atividade2 = parseFloat(document.getElementById('atividade10').value.replace(",", ".").replace("", "0"));
    var atividade3 = parseFloat(document.getElementById('atividade11').value.replace(",", ".").replace("", "0"));
    var atividade4 = parseFloat(document.getElementById('atividade12').value.replace(",", ".").replace("", "0"));

    /* Verificar se o aluno precisa de recuperação ou não */
    if (atividade1 <= 5 && atividade2 <= 5 && atividade3 <= 5 && atividade4 <= 5) {
            var atividadesRegulares = atividade1 + atividade2 + atividade3;

        if (atividadesRegulares >= 10.5){
            /* Ocultar recuperação */
            var nomeRecuperacao = document.getElementById('nomeRecuperacao12');
            nomeRecuperacao.classList.add('nomeRecuperacao12');
            document.getElementById('atividade12').value = "";

            /* Calculo sem recuperação */
            var soma = atividade1 + atividade2 + atividade3;
            var somaDecimal = Math.round(soma * 10) / 10;
        }
        else{
            /* Exibir recuperação */
            var nomeRecuperacao = document.getElementById('nomeRecuperacao12');
            nomeRecuperacao.classList.remove('nomeRecuperacao12');

            /* Calculo com recuperação */
            var atividades = atividade1 + atividade2 + atividade3 + atividade4 - Math.min(atividade1, atividade2, atividade3, atividade4);
            if (atividades >=10.5){
                var soma = 10.5;
            }
            else{
                var soma = atividade1 + atividade2 + atividade3 + atividade4 - Math.min(atividade1, atividade2, atividade3, atividade4);
            }
            var somaDecimal = Math.round(soma * 10) / 10;
        }
        
        /* Média do calculo com ou sem recuperação */
        document.getElementById('resultadoParte3').value = somaDecimal.toString().replace(".", ",");
    }
    /* Verificar se os valores colocados estão dentro do permitido para a avaliação */
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

    
    /* Soma das notas das competências */
    var resultadoParte1 = parseFloat(document.getElementById('resultadoParte1').value.replace(",", ".").replace("", "0"));
    var resultadoParte2 = parseFloat(document.getElementById('resultadoParte2').value.replace(",", ".").replace("", "0"));
    var resultadoParte3 = parseFloat(document.getElementById('resultadoParte3').value.replace(",", ".").replace("", "0"));
    var resultadoParte4 = parseFloat(document.getElementById('resultadoParte4').value.replace(",", ".").replace("", "0"));

    var soma = resultadoParte1 + resultadoParte2 + resultadoParte3 + resultadoParte4;
    var somaDecimal = Math.round(soma * 10) / 10;
    document.getElementById('mediaFinal1').value = somaDecimal.toString().replace(".", ",");
}

function calcularParte4() {
    /* Chamar notas das avaliações colocadas pelo aluno */
    var atividade1 = parseFloat(document.getElementById('atividade13').value.replace(",", ".").replace("", "0"));
    var atividade2 = parseFloat(document.getElementById('atividade14').value.replace(",", ".").replace("", "0"));
    var atividade3 = parseFloat(document.getElementById('atividade15').value.replace(",", ".").replace("", "0"));
    var atividade4 = parseFloat(document.getElementById('atividade16').value.replace(",", ".").replace("", "0"));

    /* Verificar se o aluno precisa de recuperação ou não */
    if (atividade1 <= 5 && atividade2 <= 5 && atividade3 <= 5 && atividade4 <= 5) {
            var atividadesRegulares = atividade1 + atividade2 + atividade3;

        if (atividadesRegulares >= 10.5){
            /* Ocultar recuperação */
            var nomeRecuperacao = document.getElementById('nomeRecuperacao16');
            nomeRecuperacao.classList.add('nomeRecuperacao16');
            document.getElementById('atividade16').value = "";

            /* Calculo sem recuperação */
            var soma = atividade1 + atividade2 + atividade3;
            var somaDecimal = Math.round(soma * 10) / 10;
        }
        else{
            /* Exibir recuperação */
            var nomeRecuperacao = document.getElementById('nomeRecuperacao16');
            nomeRecuperacao.classList.remove('nomeRecuperacao16');

            /* Calculo com recuperação */
            var atividades = atividade1 + atividade2 + atividade3 + atividade4 - Math.min(atividade1, atividade2, atividade3, atividade4);
            if (atividades >=10.5){
                var soma = 10.5;
            }
            else{
                var soma = atividade1 + atividade2 + atividade3 + atividade4 - Math.min(atividade1, atividade2, atividade3, atividade4);
            }
            var somaDecimal = Math.round(soma * 10) / 10;
        }
        
        /* Média do calculo com ou sem recuperação */
        document.getElementById('resultadoParte4').value = somaDecimal.toString().replace(".", ",");
    }
    /* Verificar se os valores colocados estão dentro do permitido para a avaliação */
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

    
    /* Soma das notas das competências */
    var resultadoParte1 = parseFloat(document.getElementById('resultadoParte1').value.replace(",", ".").replace("", "0"));
    var resultadoParte2 = parseFloat(document.getElementById('resultadoParte2').value.replace(",", ".").replace("", "0"));
    var resultadoParte3 = parseFloat(document.getElementById('resultadoParte3').value.replace(",", ".").replace("", "0"));
    var resultadoParte4 = parseFloat(document.getElementById('resultadoParte4').value.replace(",", ".").replace("", "0"));

    var soma = resultadoParte1 + resultadoParte2 + resultadoParte3 + resultadoParte4;
    var somaDecimal = Math.round(soma * 10) / 10;
    document.getElementById('mediaFinal1').value = somaDecimal.toString().replace(".", ",");
}


function calcularMediaFinal1() {
    /* Chamar notas das avaliações colocadas pelo aluno */
    var atividade1 = parseFloat(document.getElementById('mediaFinal1').value.replace(",", ".").replace("", "0"));
    var atividade2 = parseFloat(document.getElementById('atividade17').value.replace(",", ".").replace("", "0"));
    var atividade3 = parseFloat(document.getElementById('atividade18').value.replace(",", ".").replace("", "0"));
    var atividade4 = parseFloat(document.getElementById('atividade19').value.replace(",", ".").replace("", "0"));
    
    
    if (atividade1 <= 60 && atividade2 <= 40 && atividade3 <= 100 && atividade4 <= 100) {

        var avaliacaoCompetencia = atividade1 + atividade2;
        var nomeAtividade1 = document.getElementById('nomeAtividade18');
        var nomeAtividade2 = document.getElementById('nomeAtividade19');

        if (avaliacaoCompetencia < 70){
            document.getElementById('resultadoMediaFinal1').value = "";
            document.getElementById('situacaoMediaFinal1').value = "Reprovado na avaliação de comptência";
            document.getElementById('situacaoMediaFinal1').style.color = "#c52010";
            nomeAtividade1.classList.add('nomeAtividade18');
            document.getElementById('atividade18').value = "";
            nomeAtividade2.classList.add('nomeAtividade19');
            document.getElementById('atividade19').value = "";
        }
        else if (avaliacaoCompetencia >= 70){
            nomeAtividade1.classList.remove('nomeAtividade18');
            document.getElementById('situacaoMediaFinal1').value = "";
            if(atividade3 == ""){
                document.getElementById('resultadoMediaFinal1').value = "";
                nomeAtividade2.classList.add('nomeAtividade19');
            }
            else if(atividade3 < 100){
                nomeAtividade2.classList.remove('nomeAtividade19');
                
                var soma = atividade1 + atividade2 + atividade3 + atividade4 - Math.min(atividade3, atividade4);
                var somaDecimal = (Math.round(soma * 10) / 100) / 2;
                document.getElementById('resultadoMediaFinal1').value = somaDecimal.toString().replace(".", ",");
            }
        }
    }
    else if (atividade1 > 60 && atividade2 > 40 && atividade3 > 100) {
        window.alert("Verifique na Competência 4 se as notas de: \n\n\Média Competências está entre 0 e 60\n\Projeto está entre 0 e 40\n\Prova Integradora está entre 0 e 100");
    }
    else if (atividade1 > 60 && atividade2 > 40) {
        window.alert("Verifique na Competência 4 se as notas de: \n\n\Média Competências está entre 0 e 60\n\Projeto está entre 0 e 40");
    }
    else if (atividade1 > 60 && atividade3 > 100) {
        window.alert("Verifique na Competência 4 se as notas de: \n\n\Média Competências está entre 0 e 60\n\Prova Integradora está entre 0 e 100");
    }
    else if (atividade1 > 60 && atividade4 > 100) {
        window.alert("Verifique na Competência 4 se as notas de: \n\n\Média Competências está entre 0 e 60\n\Prova Substitutiva está entre 0 e 100");
    }
    else if (atividade2 > 40 && atividade3 > 100) {
        window.alert("Verifique na Competência 4 se as notas de: \n\Projeto está entre 0 e 40\n\Prova Integradora está entre 0 e 100");
    }
    else if (atividade2 > 40 && atividade4 > 100) {
        window.alert("Verifique na Competência 4 se as notas de: \n\Projeto está entre 0 e 40\n\Prova Substitutiva está entre 0 e 100");
    }
    else if (atividade3 > 100 && atividade4 > 100) {
        window.alert("Verifique na Competência 4 se as notas de: \n\Prova Integradora está entre 0 e 100\n\Prova Substitutiva está entre 0 e 100");
    }
    else if (atividade1 > 60) {
        window.alert("Verifique na Competência 4 se a nota de Média Competências está entre 0 e 60");
    }
    else if (atividade2 > 40) {
        window.alert("Verifique na Competência 4 se a nota de Projeto está entre 0 e 40");
    }
    else if (atividade3 > 100) {
        window.alert("Verifique na Competência 4 se a nota de Prova Integradora está entre 0 e 100");
    }
    else if (atividade4 > 100) {
        window.alert("Verifique na Competência 4 se a nota de Prova Substitutiva está entre 0 e 100");
    }


    /*--Condição da média do aluno--*/
    var resultado = parseFloat(document.getElementById('resultadoMediaFinal1').value);
    var resultadoDecimal = Math.round(resultado * 10) / 10;
    var avaliacaoCompetencia = atividade1 + atividade2;


    /* if (avaliacaoCompetencia >=0 && avaliacaoCompetencia < 70){
        document.getElementById('situacaoMediaFinal1').value = "Reprovado na avaliação de comptência";
        document.getElementById('situacaoMediaFinal1').style.color = "#c52010";
    }
    else if (atividade3 == "" && atividade4 == ""){
        document.getElementById('situacaoMediaFinal1').value = "";      
    }
    else  */if (resultadoDecimal >= 6) {
        document.getElementById('situacaoMediaFinal1').value = "Aprovado";
        document.getElementById('situacaoMediaFinal1').style.color = "#55cb50";
    }
    else if (resultadoDecimal < 6) {
        document.getElementById('situacaoMediaFinal1').value = "Reprovado";
        document.getElementById('situacaoMediaFinal1').style.color = "#c52010";
    }/* 
    else{
        document.getElementById('situacaoMediaFinal1').value = "";
    } */
}

function deletar() {
    document.location.reload(true);
    localStorage.clear();
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

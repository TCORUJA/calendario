/* SIMULADOR */
/* Eventos que acontecem na pagina */
function calcularParte01() {
    /* Chamar notas das avaliações colocadas pelo aluno */
    var atividade1 = parseFloat(document.getElementById('atividade01').value.replace(",", ".").replace("", "0"));
    var atividade2 = parseFloat(document.getElementById('atividade02').value.replace(",", ".").replace("", "0"));

    /* Verificar se o aluno precisa de recuperação ou não */
    if (atividade1 <= 5.5 && atividade2 <= 7) {
        var soma = atividade1 + atividade2;
        var somaDecimal = Math.round(soma * 10) / 10;

        /* Média do calculo com ou sem recuperação */
        document.getElementById('resultadoParte01').value = somaDecimal.toString().replace(".", ",");
    }
    /* Verificar se os valores colocados estão dentro do permitido para a avaliação */
    else if (atividade1 > 5.5 && atividade2 > 7) {
        window.alert("Verifique na Competência 1 se as notas de: \n\n\Questionário está entre 0 e 5,5\n\Avaliação Formadora está entre 0 e 7");
    }
    else if (atividade1 > 5.5) {
        window.alert("Verifique na Competência 1 se a nota de Questionário está entre 0 e 5,5");
    }
    else if (atividade2 > 7) {
        window.alert("Verifique na Competência 1 se a nota de Avaliação Formadora está entre 0 e 7");
    }

    /* Recuperação */
    var resultado1 = parseFloat(document.getElementById('resultadoParte01').value.replace(",", ".").replace("", "0"));
    var resultado2 = parseFloat(document.getElementById('resultadoParte02').value.replace(",", ".").replace("", "0"));

    var totalCompetencias = resultado1 + resultado2;

    if (resultado1 == "" || resultado2 == "") {
        /* Ocultar recuperação */
        var nomeRecuperacao = document.getElementById('divisaoParte03');
        nomeRecuperacao.classList.add('ocultarRecuperacao');
        document.getElementById('resultadoParte03').value = "";
    }
    else if (totalCompetencias < 17.5) {
        /* Mostrar recuperação */
        var nomeRecuperacao = document.getElementById('divisaoParte03');
        nomeRecuperacao.classList.remove('ocultarRecuperacao');
        document.getElementById('resultadoParte03').value = "";
    }

    /* Soma das notas das competências  e projetos*/
    var resultadoParte1 = parseFloat(document.getElementById('resultadoParte01').value.replace(",", ".").replace("", "0"));
    var resultadoParte2 = parseFloat(document.getElementById('resultadoParte02').value.replace(",", ".").replace("", "0"));
    var resultadoParte3 = parseFloat(document.getElementById('resultadoParte03').value.replace(",", ".").replace("", "0"));
    var resultadoParte4 = parseFloat(document.getElementById('resultadoParte04').value.replace(",", ".").replace("", "0"));
    var resultadoParte5 = parseFloat(document.getElementById('resultadoParte05').value.replace(",", ".").replace("", "0"));
    var resultadoParte6 = parseFloat(document.getElementById('resultadoParte06').value.replace(",", ".").replace("", "0"));
    var resultadoParte7 = parseFloat(document.getElementById('resultadoParte07').value.replace(",", ".").replace("", "0"));
    
    if(resultadoParte3 == ""){
        var parte123 = resultadoParte1 + resultadoParte2;
    }
    else{
        var parte123 = resultadoParte3;
    }
    if(resultadoParte6 == ""){
        var parte456 = resultadoParte4 + resultadoParte5;
    }
    else{
        var parte456 = resultadoParte6;
    }

    var soma = parte123 + parte456 + resultadoParte7;    
    var somaDecimal = Math.round(soma * 10) / 10;
    document.getElementById('atividade14').value = somaDecimal.toString().replace(".", ",");
    
}

function calcularParte02() {
    /* Chamar notas das avaliações colocadas pelo aluno */
    var atividade1 = parseFloat(document.getElementById('atividade03').value.replace(",", ".").replace("", "0"));
    var atividade2 = parseFloat(document.getElementById('atividade04').value.replace(",", ".").replace("", "0"));;

    /* Verificar se o aluno precisa de recuperação ou não */
    if (atividade1 <= 5.5 && atividade2 <= 7) {
        var soma = atividade1 + atividade2;
        var somaDecimal = Math.round(soma * 10) / 10;

        /* Média do calculo com ou sem recuperação */
        document.getElementById('resultadoParte02').value = somaDecimal.toString().replace(".", ",");
    }
    /* Verificar se os valores colocados estão dentro do permitido para a avaliação */
    else if (atividade1 > 5.5 && atividade2 > 7) {
        window.alert("Verifique na Competência 1 se as notas de: \n\n\Questionário está entre 0 e 5,5\n\Avaliação Formadora está entre 0 e 7");
    }
    else if (atividade1 > 5.5) {
        window.alert("Verifique na Competência 1 se a nota de Questionário está entre 0 e 5,5");
    }
    else if (atividade2 > 7) {
        window.alert("Verifique na Competência 1 se a nota de Avaliação Formadora está entre 0 e 7");
    }

    /* Recuperação */
    var resultado1 = parseFloat(document.getElementById('resultadoParte02').value.replace(",", ".").replace("", "0"));
    var resultado2 = parseFloat(document.getElementById('resultadoParte01').value.replace(",", ".").replace("", "0"));

    var totalCompetencias = resultado1 + resultado2;

    if (resultado1 == "" || resultado2 == "") {
        /* Ocultar recuperação */
        var nomeRecuperacao = document.getElementById('divisaoParte03');
        nomeRecuperacao.classList.add('ocultarRecuperacao');
        document.getElementById('resultadoParte03').value = "";
    }
    else if (totalCompetencias < 17.5) {
        /* Mostrar recuperação */
        var nomeRecuperacao = document.getElementById('divisaoParte03');
        nomeRecuperacao.classList.remove('ocultarRecuperacao');
        document.getElementById('resultadoParte03').value = "";
    }
    else if (totalCompetencias >= 17.5) {
        /* Ocultar recuperação */
        var nomeRecuperacao = document.getElementById('divisaoParte03');
        nomeRecuperacao.classList.add('ocultarRecuperacao');
        document.getElementById('resultadoParte03').value = "";
    }

    /* Soma das notas das competências  e projetos*/
    var resultadoParte1 = parseFloat(document.getElementById('resultadoParte01').value.replace(",", ".").replace("", "0"));
    var resultadoParte2 = parseFloat(document.getElementById('resultadoParte02').value.replace(",", ".").replace("", "0"));
    var resultadoParte3 = parseFloat(document.getElementById('resultadoParte03').value.replace(",", ".").replace("", "0"));
    var resultadoParte4 = parseFloat(document.getElementById('resultadoParte04').value.replace(",", ".").replace("", "0"));
    var resultadoParte5 = parseFloat(document.getElementById('resultadoParte05').value.replace(",", ".").replace("", "0"));
    var resultadoParte6 = parseFloat(document.getElementById('resultadoParte06').value.replace(",", ".").replace("", "0"));
    var resultadoParte7 = parseFloat(document.getElementById('resultadoParte07').value.replace(",", ".").replace("", "0"));
    
    if(resultadoParte3 == ""){
        var parte123 = resultadoParte1 + resultadoParte2;
    }
    else{
        var parte123 = resultadoParte3;
    }
    if(resultadoParte6 == ""){
        var parte456 = resultadoParte4 + resultadoParte5;
    }
    else{
        var parte456 = resultadoParte6;
    }

    var soma = parte123 + parte456 + resultadoParte7;    
    var somaDecimal = Math.round(soma * 10) / 10;
    document.getElementById('atividade14').value = somaDecimal.toString().replace(".", ",");
}

function calcularParte03() {
    /* Chamar notas das avaliações colocadas pelo aluno */
    var atividade1 = parseFloat(document.getElementById('atividade05').value.replace(",", ".").replace("", "0"));
    var atividade2 = parseFloat(document.getElementById('resultadoParte01').value.replace(",", ".").replace("", "0"));;
    var atividade3 = parseFloat(document.getElementById('resultadoParte02').value.replace(",", ".").replace("", "0"));;

    /* Verificar se o aluno precisa de recuperação ou não */
    if (atividade1 <= 7.5) {
        if (atividade1 + atividade2 + atividade3 < 17.5) {
            var soma = atividade1 + atividade2 + atividade3;
            var somaDecimal = Math.round(soma * 10) / 10;
        }
        else if (atividade1 + atividade2 + atividade3 >= 17.5) {
            var soma = 17.5;
            var somaDecimal = Math.round(soma * 10) / 10;
        }

        /* Média do calculo com ou sem recuperação */
        document.getElementById('resultadoParte03').value = somaDecimal.toString().replace(".", ",");
    }

    /* Verificar se os valores colocados estão dentro do permitido para a avaliação */
    else if (atividade1 > 7.5) {
        window.alert("Verifique se a nota da Recuperação 1 está entre 0 e 7,5");
    }

    /* Soma das notas das competências  e projetos*/
    var resultadoParte1 = parseFloat(document.getElementById('resultadoParte01').value.replace(",", ".").replace("", "0"));
    var resultadoParte2 = parseFloat(document.getElementById('resultadoParte02').value.replace(",", ".").replace("", "0"));
    var resultadoParte3 = parseFloat(document.getElementById('resultadoParte03').value.replace(",", ".").replace("", "0"));
    var resultadoParte4 = parseFloat(document.getElementById('resultadoParte04').value.replace(",", ".").replace("", "0"));
    var resultadoParte5 = parseFloat(document.getElementById('resultadoParte05').value.replace(",", ".").replace("", "0"));
    var resultadoParte6 = parseFloat(document.getElementById('resultadoParte06').value.replace(",", ".").replace("", "0"));
    var resultadoParte7 = parseFloat(document.getElementById('resultadoParte07').value.replace(",", ".").replace("", "0"));
    
    if(resultadoParte3 == ""){
        var parte123 = resultadoParte1 + resultadoParte2;
    }
    else{
        var parte123 = resultadoParte3;
    }
    if(resultadoParte6 == ""){
        var parte456 = resultadoParte4 + resultadoParte5;
    }
    else{
        var parte456 = resultadoParte6;
    }

    var soma = parte123 + parte456 + resultadoParte7;    
    var somaDecimal = Math.round(soma * 10) / 10;
    document.getElementById('atividade14').value = somaDecimal.toString().replace(".", ",");
}

function calcularParte04() {
    /* Chamar notas das avaliações colocadas pelo aluno */
    var atividade1 = parseFloat(document.getElementById('atividade06').value.replace(",", ".").replace("", "0"));
    var atividade2 = parseFloat(document.getElementById('atividade07').value.replace(",", ".").replace("", "0"));;

    /* Verificar se o aluno precisa de recuperação ou não */
    if (atividade1 <= 5.5 && atividade2 <= 7) {
        var soma = atividade1 + atividade2;
        var somaDecimal = Math.round(soma * 10) / 10;

        /* Média do calculo com ou sem recuperação */
        document.getElementById('resultadoParte04').value = somaDecimal.toString().replace(".", ",");
    }
    /* Verificar se os valores colocados estão dentro do permitido para a avaliação */
    else if (atividade1 > 5.5 && atividade2 > 7) {
        window.alert("Verifique na Competência 1 se as notas de: \n\n\Questionário está entre 0 e 5,5\n\Avaliação Formadora está entre 0 e 7");
    }
    else if (atividade1 > 5.5) {
        window.alert("Verifique na Competência 1 se a nota de Questionário está entre 0 e 5,5");
    }
    else if (atividade2 > 7) {
        window.alert("Verifique na Competência 1 se a nota de Avaliação Formadora está entre 0 e 7");
    }

    /* Recuperação */
    var resultado1 = parseFloat(document.getElementById('resultadoParte04').value.replace(",", ".").replace("", "0"));
    var resultado2 = parseFloat(document.getElementById('resultadoParte05').value.replace(",", ".").replace("", "0"));

    var totalCompetencias = resultado1 + resultado2;

    if (resultado1 == "" || resultado2 == "") {
        /* Ocultar recuperação */
        var nomeRecuperacao = document.getElementById('divisaoParte06');
        nomeRecuperacao.classList.add('ocultarRecuperacao');
        document.getElementById('resultadoParte06').value = "";
    }
    else if (totalCompetencias < 17.5) {
        /* Mostrar recuperação */
        var nomeRecuperacao = document.getElementById('divisaoParte06');
        nomeRecuperacao.classList.remove('ocultarRecuperacao');
        document.getElementById('resultadoParte06').value = "";
    }
    else if (totalCompetencias >= 17.5) {
        /* Ocultar recuperação */
        var nomeRecuperacao = document.getElementById('divisaoParte06');
        nomeRecuperacao.classList.add('ocultarRecuperacao');
        document.getElementById('resultadoParte06').value = "";
    }

    /* Soma das notas das competências  e projetos*/
    var resultadoParte1 = parseFloat(document.getElementById('resultadoParte01').value.replace(",", ".").replace("", "0"));
    var resultadoParte2 = parseFloat(document.getElementById('resultadoParte02').value.replace(",", ".").replace("", "0"));
    var resultadoParte3 = parseFloat(document.getElementById('resultadoParte03').value.replace(",", ".").replace("", "0"));
    var resultadoParte4 = parseFloat(document.getElementById('resultadoParte04').value.replace(",", ".").replace("", "0"));
    var resultadoParte5 = parseFloat(document.getElementById('resultadoParte05').value.replace(",", ".").replace("", "0"));
    var resultadoParte6 = parseFloat(document.getElementById('resultadoParte06').value.replace(",", ".").replace("", "0"));
    var resultadoParte7 = parseFloat(document.getElementById('resultadoParte07').value.replace(",", ".").replace("", "0"));
    
    if(resultadoParte3 == ""){
        var parte123 = resultadoParte1 + resultadoParte2;
    }
    else{
        var parte123 = resultadoParte3;
    }
    if(resultadoParte6 == ""){
        var parte456 = resultadoParte4 + resultadoParte5;
    }
    else{
        var parte456 = resultadoParte6;
    }

    var soma = parte123 + parte456 + resultadoParte7;    
    var somaDecimal = Math.round(soma * 10) / 10;
    document.getElementById('atividade14').value = somaDecimal.toString().replace(".", ",");
}

function calcularParte05() {
    /* Chamar notas das avaliações colocadas pelo aluno */
    var atividade1 = parseFloat(document.getElementById('atividade08').value.replace(",", ".").replace("", "0"));
    var atividade2 = parseFloat(document.getElementById('atividade09').value.replace(",", ".").replace("", "0"));;

    /* Verificar se o aluno precisa de recuperação ou não */
    if (atividade1 <= 5.5 && atividade2 <= 7) {
        var soma = atividade1 + atividade2;
        var somaDecimal = Math.round(soma * 10) / 10;

        /* Média do calculo com ou sem recuperação */
        document.getElementById('resultadoParte05').value = somaDecimal.toString().replace(".", ",");
    }
    /* Verificar se os valores colocados estão dentro do permitido para a avaliação */
    else if (atividade1 > 5.5 && atividade2 > 7) {
        window.alert("Verifique na Competência 1 se as notas de: \n\n\Questionário está entre 0 e 5,5\n\Avaliação Formadora está entre 0 e 7");
    }
    else if (atividade1 > 5.5) {
        window.alert("Verifique na Competência 1 se a nota de Questionário está entre 0 e 5,5");
    }
    else if (atividade2 > 7) {
        window.alert("Verifique na Competência 1 se a nota de Avaliação Formadora está entre 0 e 7");
    }

    /* Recuperação */
    var resultado1 = parseFloat(document.getElementById('resultadoParte05').value.replace(",", ".").replace("", "0"));
    var resultado2 = parseFloat(document.getElementById('resultadoParte04').value.replace(",", ".").replace("", "0"));

    var totalCompetencias = resultado1 + resultado2;

    if (resultado1 == "" || resultado2 == "") {
        /* Ocultar recuperação */
        var nomeRecuperacao = document.getElementById('divisaoParte06');
        nomeRecuperacao.classList.add('ocultarRecuperacao');
        document.getElementById('resultadoParte06').value = "";
    }
    else if (totalCompetencias < 17.5) {
        /* Mostrar recuperação */
        var nomeRecuperacao = document.getElementById('divisaoParte06');
        nomeRecuperacao.classList.remove('ocultarRecuperacao');
        document.getElementById('resultadoParte06').value = "";
    }
    else if (totalCompetencias >= 17.5) {
        /* Ocultar recuperação */
        var nomeRecuperacao = document.getElementById('divisaoParte06');
        nomeRecuperacao.classList.add('ocultarRecuperacao');
        document.getElementById('resultadoParte06').value = "";
    }

    /* Soma das notas das competências  e projetos*/
    var resultadoParte1 = parseFloat(document.getElementById('resultadoParte01').value.replace(",", ".").replace("", "0"));
    var resultadoParte2 = parseFloat(document.getElementById('resultadoParte02').value.replace(",", ".").replace("", "0"));
    var resultadoParte3 = parseFloat(document.getElementById('resultadoParte03').value.replace(",", ".").replace("", "0"));
    var resultadoParte4 = parseFloat(document.getElementById('resultadoParte04').value.replace(",", ".").replace("", "0"));
    var resultadoParte5 = parseFloat(document.getElementById('resultadoParte05').value.replace(",", ".").replace("", "0"));
    var resultadoParte6 = parseFloat(document.getElementById('resultadoParte06').value.replace(",", ".").replace("", "0"));
    var resultadoParte7 = parseFloat(document.getElementById('resultadoParte07').value.replace(",", ".").replace("", "0"));
    
    if(resultadoParte3 == ""){
        var parte123 = resultadoParte1 + resultadoParte2;
    }
    else{
        var parte123 = resultadoParte3;
    }
    if(resultadoParte6 == ""){
        var parte456 = resultadoParte4 + resultadoParte5;
    }
    else{
        var parte456 = resultadoParte6;
    }

    var soma = parte123 + parte456 + resultadoParte7;    
    var somaDecimal = Math.round(soma * 10) / 10;
    document.getElementById('atividade14').value = somaDecimal.toString().replace(".", ",");
}

function calcularParte06() {
    /* Chamar notas das avaliações colocadas pelo aluno */
    var atividade1 = parseFloat(document.getElementById('atividade10').value.replace(",", ".").replace("", "0"));
    var atividade2 = parseFloat(document.getElementById('resultadoParte04').value.replace(",", ".").replace("", "0"));;
    var atividade3 = parseFloat(document.getElementById('resultadoParte05').value.replace(",", ".").replace("", "0"));;

    /* Verificar se o aluno precisa de recuperação ou não */
    if (atividade1 <= 7.5) {
        if (atividade1 + atividade2 + atividade3 < 17.5) {
            var soma = atividade1 + atividade2 + atividade3;
            var somaDecimal = Math.round(soma * 10) / 10;
        }
        else if (atividade1 + atividade2 + atividade3 >= 17.5) {
            var soma = 17.5;
            var somaDecimal = Math.round(soma * 10) / 10;
        }

        /* Média do calculo com ou sem recuperação */
        document.getElementById('resultadoParte06').value = somaDecimal.toString().replace(".", ",");
    }

    /* Verificar se os valores colocados estão dentro do permitido para a avaliação */
    else if (atividade1 > 7.5) {
        window.alert("Verifique se a nota da Recuperação 2 está entre 0 e 7,5");
    }

    /* Soma das notas das competências  e projetos*/
    var resultadoParte1 = parseFloat(document.getElementById('resultadoParte01').value.replace(",", ".").replace("", "0"));
    var resultadoParte2 = parseFloat(document.getElementById('resultadoParte02').value.replace(",", ".").replace("", "0"));
    var resultadoParte3 = parseFloat(document.getElementById('resultadoParte03').value.replace(",", ".").replace("", "0"));
    var resultadoParte4 = parseFloat(document.getElementById('resultadoParte04').value.replace(",", ".").replace("", "0"));
    var resultadoParte5 = parseFloat(document.getElementById('resultadoParte05').value.replace(",", ".").replace("", "0"));
    var resultadoParte6 = parseFloat(document.getElementById('resultadoParte06').value.replace(",", ".").replace("", "0"));
    var resultadoParte7 = parseFloat(document.getElementById('resultadoParte07').value.replace(",", ".").replace("", "0"));
    
    if(resultadoParte3 == ""){
        var parte123 = resultadoParte1 + resultadoParte2;
    }
    else{
        var parte123 = resultadoParte3;
    }
    if(resultadoParte6 == ""){
        var parte456 = resultadoParte4 + resultadoParte5;
    }
    else{
        var parte456 = resultadoParte6;
    }

    var soma = parte123 + parte456 + resultadoParte7;    
    var somaDecimal = Math.round(soma * 10) / 10;
    document.getElementById('atividade14').value = somaDecimal.toString().replace(".", ",");
}



function calcularParte07() {
    /* Chamar notas das avaliações colocadas pelo aluno */
    var atividade1 = parseFloat(document.getElementById('atividade11').value.replace(",", ".").replace("", "0"));
    var atividade2 = parseFloat(document.getElementById('atividade12').value.replace(",", ".").replace("", "0"));;
    var atividade3 = parseFloat(document.getElementById('atividade13').value.replace(",", ".").replace("", "0"));;

    /* Verificar se o aluno precisa de recuperação ou não */
    if (atividade1 <= 10 && atividade2 <= 20 && atividade3 <= 20) {
        var soma = atividade1 + atividade2 + atividade3;
        var somaDecimal = Math.round(soma * 10) / 10;

        /* Média do calculo com ou sem recuperação */
        document.getElementById('resultadoParte07').value = somaDecimal.toString().replace(".", ",");
    }
    /* Verificar se os valores colocados estão dentro do permitido para a avaliação */
    else if (atividade1 > 10 && atividade2 > 20 && atividade3 > 20) {
        window.alert("Verifique nos Projetos se as notas do: \n\n\Projeto 1 está entre 0 e 10\n\Projeto 2 está entre 0 e 20\n\Apresentação do Projeto está entre 0 e 20");
    }
    else if (atividade1 > 10) {
        window.alert("Verifique nos Projetos se a nota do Projeto 1 está entre 0 e 10");
    }
    else if (atividade2 > 20) {
        window.alert("Verifique nos Projetos se a nota do Projeto 2 está entre 0 e 20");
    }
    else if (atividade3 > 20) {
        window.alert("Verifique nos Projetos se a nota da Apresentação do Projeto está entre 0 e 20");
    }

    /* Soma das notas das competências  e projetos*/
    var resultadoParte1 = parseFloat(document.getElementById('resultadoParte01').value.replace(",", ".").replace("", "0"));
    var resultadoParte2 = parseFloat(document.getElementById('resultadoParte02').value.replace(",", ".").replace("", "0"));
    var resultadoParte3 = parseFloat(document.getElementById('resultadoParte03').value.replace(",", ".").replace("", "0"));
    var resultadoParte4 = parseFloat(document.getElementById('resultadoParte04').value.replace(",", ".").replace("", "0"));
    var resultadoParte5 = parseFloat(document.getElementById('resultadoParte05').value.replace(",", ".").replace("", "0"));
    var resultadoParte6 = parseFloat(document.getElementById('resultadoParte06').value.replace(",", ".").replace("", "0"));
    var resultadoParte7 = parseFloat(document.getElementById('resultadoParte07').value.replace(",", ".").replace("", "0"));

    
    if(resultadoParte3 == "" && resultadoParte6 == ""){
        var parte123 = resultadoParte1 + resultadoParte2;
        var parte456 = resultadoParte4 + resultadoParte5;
    }
    else if(resultadoParte3 != "" && resultadoParte6 != ""){
        var parte123 = resultadoParte3;
        var parte456 = resultadoParte6;
    }
    else if(resultadoParte3 != ""){
        var parte123 = resultadoParte3;
    }
    else if(resultadoParte3 == ""){
        var parte123 = resultadoParte1 + resultadoParte2;
    }
    else if(resultadoParte6 != ""){
        var parte456 = resultadoParte6;
    }
    else if(resultadoParte6 == ""){
        var parte456 = resultadoParte4 + resultadoParte5;
    }

    var soma = parte123 + parte456 + resultadoParte7;    
    var somaDecimal = Math.round(soma * 10) / 10;
    document.getElementById('atividade14').value = somaDecimal.toString().replace(".", ",");
}


function calcularMediaFinal01() {
    /* Chamar notas das avaliações colocadas pelo aluno */
    var atividade1 = parseFloat(document.getElementById('atividade14').value.replace(",", ".").replace("", "0"));
    var atividade2 = parseFloat(document.getElementById('atividade15').value.replace(",", ".").replace("", "0"));
    var atividade3 = parseFloat(document.getElementById('atividade16').value.replace(",", ".").replace("", "0"));


    if (atividade1 <= 100 && atividade2 <= 100 && atividade3 <= 100) {
        if (atividade2 < 100 && atividade3 > atividade2) {
            var soma = (atividade1 + atividade3) / 2;
            var somaDecimal = Math.round(soma * 10) / 100;
        }
        else if (atividade2 > atividade3) {
            var soma = (atividade1 + atividade2) / 2;
            var somaDecimal = Math.round(soma * 10) / 100;
        }
        else{            
            var soma = (atividade1 + atividade2) / 2;
            var somaDecimal = Math.round(soma * 10) / 100;
        }

        /* Média do calculo com ou sem recuperação */
        document.getElementById('resultadoMediaFinal01').value = somaDecimal.toString().replace(".", ",");
    }
    else if (atividade1 > 100 && atividade2 > 40 && atividade3 > 100) {
        window.alert("Verifique se as notas de: \n\n\AC está entre 0 e 100\n\Projeto está entre 0 e 40\n\Prova Integradora está entre 0 e 100");
    }
    else if (atividade1 > 100 && atividade2 > 100) {
        window.alert("Verifique se as notas de: \n\n\AC está entre 0 e 100\n\Prova Integradora está entre 0 e 100");
    }
    else if (atividade1 > 100 && atividade3 > 100) {
        window.alert("Verifique se as notas de: \n\n\AC está entre 0 e 100\n\Prova Substitutiva está entre 0 e 100");
    }
    else if (atividade2 > 100 && atividade3 > 100) {
        window.alert("Verifique se as notas de: \n\Prova Integradora está entre 0 e 100\n\Prova Substitutiva está entre 0 e 100");
    }
    else if (atividade1 > 100) {
        window.alert("Verifique se a nota de AC está entre 0 e 100");
    }
    else if (atividade2 > 100) {
        window.alert("Verifique se a nota de Prova Integradora está entre 0 e 100");
    }
    else if (atividade3 > 100) {
        window.alert("Verifique se a nota de Prova Substitutiva está entre 0 e 100");
    }


    /*--Condição da média do aluno--*/
    var resultado = parseFloat(document.getElementById('resultadoMediaFinal01').value);
    var resultadoDecimal = Math.round(resultado * 10) / 10;

    if (resultadoDecimal >= 6) {
        document.getElementById('situacaoMediaFinal01').value = "Aprovado";
        document.getElementById('situacaoMediaFinal01').style.color = "#55cb50";
    }
    else if (resultadoDecimal < 6) {
        document.getElementById('situacaoMediaFinal01').value = "Reprovado";
        document.getElementById('situacaoMediaFinal01').style.color = "#c52010";
    }

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

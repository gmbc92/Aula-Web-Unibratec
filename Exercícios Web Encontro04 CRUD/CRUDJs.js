var campoTarefa1 = document.querySelector('div#cadastro_tarefas input#tarefa1');
var botaoCadastro = document.querySelector('div#cadastro_tarefas button#botaoCadastro');
var campoSelect = document.querySelector('div#select_tarefas input#select_tarefas');
var botaoSelect = document.querySelector('div#select_tarefas button#botaoSelect');
var campoUpgradeTarefa = document.querySelector('div#upgrade_tarefa input#upgrade_tarefa');
var campoUpgradeTarefa2 = document.querySelector('div#upgrade_tarefa input#upgrade_tarefa2');
var botaoUpgrade = document.querySelector('div#upgrade_tarefa button#botaoUpgrade');
var campoDelete = document.querySelector('div#deletar_tarefa input#deleta_tarefa');
var botaoDelete = document.querySelector('div#deletar_tarefa button#botaoDeletar');
var botaoLimpar = document.querySelector('div#limparCampos button#limparCampos');

var arrayTarefas = [];

botaoCadastro.onclick = function (){
    arrayTarefas.push(campoTarefa1.value);
    alert('Nova Tarefa Cadastrada');
}

botaoSelect.onclick = function (){
    campoSelect.value = arrayTarefas;

    alert('Tarefas Cadastradas Exibidas');
}

botaoUpgrade.onclick = function (){
    var tarefaAlterada = campoUpgradeTarefa.value;
    var novaTarefa = campoUpgradeTarefa2.value;
    for(var i=0; i<= arrayTarefas.length;i++){
        if(tarefaAlterada == arrayTarefas[i]){
            arrayTarefas[i] = novaTarefa;
            alert('Tarefa Mudada');
        }
    }
}

botaoDelete.onclick = function (){
    var tarefaDeletada = campoDelete.value;
    for(var i=0; i<= arrayTarefas.length;i++){
        if(tarefaDeletada == arrayTarefas[i]){
            arrayTarefas[i] = '';
            alert('Tarefa Deletada');
        }
    }
}

botaoLimpar.onclick = function () {
    campoTarefa1.value = '';
    campoSelect.value = '';
    campoUpgradeTarefa.value = '';
    campoUpgradeTarefa2.value = '';
    campoDelete.value = '';

}

var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var tarefas = JSON.parse(localStorage.getItem('list_tarefas')) || []; /*dados salvos no localstorage são em JSON, logo passamos para array*/

/*acima definimos um valor padrao para o array caso esteja vazio, ja que não vai conseguir iterar depois */

function renderTarefas (){

    listElement.innerHTML= ''; /*limpa o list element para não repetir as tarefas*/

    for (let valor of tarefas){ /*percorre todo o array retornando na variavel valor*/
        var valorElement = document.createElement('li');
        var valorText = document.createTextNode(valor); /*ela ja contem o texto de cada tarefa*/
        var linkElement = document.createElement('a');

        linkElement.setAttribute('href' , '#');

        var pos = tarefas.indexOf(valor); /*pegar o elemento do array clicado e jogar na função deleteTarefa*/
        linkElement.setAttribute('onclick', 'deleteTarefa(' + pos + ')'); /*adiciona elemento onclick com a funcao e a posição no array*/

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        valorElement.appendChild(valorText);
        valorElement.appendChild(linkElement);
        listElement.appendChild(valorElement);
    }
}

renderTarefas();

function addTarefa(){ /*limpado o list element na propria funcao renderTarefas para não repetir os elementos*/
    var tarefaText = inputElement.value;

    tarefas.push(tarefaText);
    inputElement.value = '';

    renderTarefas();
    saveStorage();
}

buttonElement.onclick = addTarefa;

function deleteTarefa (pos){
    tarefas.splice(pos,1)  /*remove do array a partir da posição recebida, no caso para receber um paramentro e remover o prox*/
    
    renderTarefas();
    saveStorage();
}

function saveStorage(){
    localStorage.setItem('list_tarefas',JSON.stringify(tarefas)); /*só grava chave e valor*/
}
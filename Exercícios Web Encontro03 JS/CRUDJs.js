var novoElementoJs = document.createElement('h2');
var textoNovoJs = document.createTextNode('Novo Texto Criado via JS FUll');

novoElementoJs.appendChild(textoNovoJs);

var conteinerElemento = document.querySelector('#teste');
conteinerElemento.appendChild(novoElementoJs);

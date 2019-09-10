var campoNome = document.querySelector('input[name=nome]');
var botao1 = document.querySelector('button.botao1');  
botao1.onclick = function (){
    var text = campoNome.value;
    var casasString = text.length;
    alert("Seu Nome Completo é: " + text);
    alert("O numero de casas da string é: " + casasString);
    campoNome.style.background='green';
}
/*outro quesito*/
var imagem1 = document.getElementById("img1");
var imagens = [
    "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true",
    "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true"
];
imagem1.onmouseover  = function (){ //onclick para clicar
    if(imagem1.src == imagens[0]){
        imagem1.src = imagens[1];
    }else{
        imagem1.src = imagens[0];
    }
}

/*outro quesito*/
var cpf = document.querySelector('div#cpf input#cpf ');
var copiaCpf= document.querySelector('div#cpf input#copia ');

    cpf.onkeyup = function (){
    copiaCpf.value = cpf.value.replace(/[^\d]/g, "");
    //copiaCpf.value = cpf.value.replace(/(\.|\/|\-)/g,"");
    //copiaCpf.value = cpf.value.replace(/(\d{3})(\d)/ , "$1.$2");
    //copiaCpf.value = cpf.value.replace(/(\d{3})(\d{1,2})$/ , "$1-$2");
    //copiaCpf.value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4");
    //copiaCpf.value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4");
    }
    
/*outro quesito*/
var regex = new RegExp (/^[0-9] "g/);
var valor1 = document.querySelector('div#soma input#soma1'); 
var valor2 = document.querySelector('div#soma input#soma2'); 
var resultado = document.querySelector('div#soma input#resultado'); 
var num1 = valor1.value;
var num2 = valor2.value;


valor2.onblur = function(){
    if (    (regex.test(num1)) && (regex.test(num2)) ){
        valor1.style.background='green';
        valor2.style.background='green';
        resultado.style.background='green';
        resultado.value = parseInt(num1) + parseInt(num2);
    }else{
        alert('digite somente numeros');
        valor2.style.background='red';
        valor1.style.background='red';
        resultado.style.background='red';
    }
}

var botaoLimpar = document.querySelector('div#limpar button#botaoLimpar');

botaoLimpar.onclick = function(){
    valor1.value ='';
    valor2.value ='';
    resultado.value ='';
    cpf.value ='';
    copiaCpf.value ='';
    campoNome.value ='';
}

/*outro quesito*/

window.onload = function (){

    var novoElementoJs = document.createElement('h2');
    var textoNovoJs = document.createTextNode('Novo Texto Criado via JS FULL');
    
    novoElementoJs.appendChild(textoNovoJs);
    
    var conteinerElemento = document.querySelector('div#resultado');
    conteinerElemento.appendChild(novoElementoJs);
}
//novoTextoJs.setAttribute('')
var el1 = document.querySelector('div#soma2 input#elemento1');
var el2 = document.querySelector('div#soma2 input#elemento2');
var el3 = document.querySelector('div#soma2 input#elemento3');

el2.onblur = function (){
    if( (/^\s*$/.test(el1.value)) || (/^\s*$/.test(el2.value)) ){
        el3.value = 0;
    }else {
        el3.value = parseInt(el1.value) + parseInt(el2.value);
    }
}
var fieldResto = document.querySelector('div#divisao input#resto');

/*resto de divisão 5/2 */
window.onload = function (){
    let  resto;
    //resto = num1 - (resultado * num2);
    resto = 5 - (1 * 3);
    fieldResto.value = resto;
}

/*numero par ou impar */

var par1 = document.querySelector('div#imparPar input#numero');
var par2 = document.querySelector('div#imparPar input#verificador');
var butVer = document.querySelector('div#imparPar button#butVer');

butVer.onclick = function () {
    let numVer = parseInt(par1.value);
    if (numVer % 2 == 0){
        par2.value = "par";
    }else {
        par2.value = "impar";
    }
}

/*Multiplicador*/

var mult1 = document.querySelector('div#multiplicacao input#num1');
var mult2 = document.querySelector('div#multiplicacao input#num2');
var res = document.querySelector('div#multiplicacao input#num2');
var butRes = document.querySelector('div#multiplicacao button#butVer2');

butRes.onclick = function (){
    let num1, num2;
    num1 = parseInt(mult1.value);
    num2 = parseInt(mult2.value);
    res.value = num1 * num2;
}



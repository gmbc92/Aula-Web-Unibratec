var campoNome = document.querySelector('input[name=nome]');
var botao1 = document.querySelector('button.botao1');  
botao1.onclick = function (){
    var text = campoNome.value;
    var casasString = text.length;
    alert("Seu Nome Completo é: " + text);
    alert("O numero de casas da string é: " + casasString);
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
//window.onload = function (){
    cpf.onkeyup = function (){
    copia.value = cpf.value.replace(/[' '*/!@+-_,#$%*]/g,'');
        //(/[' 'çÇáÁàÀéèÉÈíìÍÌóòÓÒúùÚÙñÑ~@&]/g,'')
        //copia.value = copia.value.replace(/[' .-*/+_ ' ''  ']/g,''); (/[' ']/g,'')"
    }
/*outro quesito*/
var valor1 = document.querySelector('div#soma input#soma1'); 
var valor2 = document.querySelector('div#soma input#soma2'); 
var resultado = document.querySelector('div#soma input#resultado'); 
var regex = ("^[0-9]", "g");
// /[^0-9]/g,''
valor2.onblur= function(){
    if (!regex.match(valor1)){
        alert('digite seu cep corretamente');
        document.form.cep.style.background='red';
    }else{
        resultado.value = valor1.value + valor2.value;
    }
}

//     if(parseInt(valor1.replace(/[^0-9]/g,'')) === isNaN ){
//     alert('digite apenas numeros')
//     valor1.style.background = 'red';
//     valor2.style.background = 'red';
//     } else{
//     resultado.value = valor1.value + valor2.value;
//     }
// }

    //setInterval(bulb, 100);



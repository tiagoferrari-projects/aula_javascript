function clicou(){
    document.getElementById("agradecimento").innerHTML= "<b>Obrigado por clicar</b>";
    
    
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar!");
}

function redirecionar(){
    window.open("https://digitalinnovation.one/"); //abre a página da web em uma nova guia
    //window.location.href = "https://www.linkedin.com/in/tiago-de-oliveira-ferrari-313508156/";//abre a página da web na mesma guia
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "<b>Obrigado por passar o mouse</b>";
    elemento.innerHTML = "<b>Obrigado por passar o mouse</b>";
    //alert("Trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "<b>Passe o moude aqui</b>";
    elemento.innerHTML = "<b>Passe o mouse aqui</b>";
}

function load(){
    alert("Página Carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*
function soma(n1,n2){
    return n1+n2;
}
alert(soma(5,10));
*/

/*
function validaIdade(idade){
    var validar;

    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade?")
console.log(validaIdade(idade));
*/

/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*
var d = new Date();
alert(d.getDay());
alert(d.getMinutes());
alert(d.getMonth()+1);
*/

/*
var count;
for(count = 0; count<=5; count++){
    alert(count);
}
*/

/*
var count = 0;
while(count<=5){
    console.log(count);
    alert(count)
    count ++;
}
*/

/*
var idade = prompt(" Qual a sua idade? ");
if (idade >= 18){
    alert("Maior de idade");
}
else{
    alert("Menor de idade");
}
*/

/*var frutas = [{nome: "Maçã", cor:"Vermelha"}, {nome: "Uva", cor:"Roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome: "Maçã", cor:"Vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["Maçã","Pêra","Laranja"];
//lista.push("Uva");
//lista.pop();
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" | "));
//alert (lista[1]);

/*
var nome = "Tiago Ferrari";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo!!";
//alert ( nome + " tem " + idade + "anos");
//alert(idade + idade2);
console.log(nome);
console.log(n1*n2);
console.log(frase.toUpperCase());
//alert(frase.replace("Japão","Brasil"));
*/
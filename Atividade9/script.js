let num1;
let num2;
let num3;


num1 = prompt("Digite o número 1: ");
num2 = prompt("Digite o número 2: ");
num3 = prompt("Digite o número 3: ");

function maiorNumero(num1, num2, num3){
    let maior = num1;
    if(num2 > maior){
        maior = num2;
    }
    
    if(num3 > maior){
        maior = num3;
    }

    return maior;
}
alert("Maior número: " + maiorNumero(num1, num2, num3));

num1 = prompt("Digite o número 1: ");
num2 = prompt("Digite o número 2: ");
num3 = prompt("Digite o número 3: ");

function numeroOrdenado(num1, num2, num3){
    let listaNumeros = [num1, num2, num3];
    listaNumeros.sort(function(a, b){return a - b});
    return listaNumeros;
}

alert("Números em ordem crescente: " + numeroOrdenado(num1, num2, num3));

let palavra = prompt("Digite alguma palavra ou frase: ");

function palindromo(palavra){
    palavra = palavra.replace(/\s+/g, '').replace(/[^a-zA-Z]/g, '').toUpperCase();

    let palavraInvertida = palavra.split("").reverse().join("");

    if(palavra == palavraInvertida){
        return "Palíndromo";
    }else{
        return "Não palíndromo"
    }
}

alert(palindromo(palavra));

num1 = prompt("Digite o número 1: ");
num2 = prompt("Digite o número 2: ");
num3 = prompt("Digite o número 3: ");

function triangulo(num1, num2, num3){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);

    if(num1+num2>num3 && num2+num3>num1 && num3+num1>num2)
        return "é triangulo"
    else
        return "não é triangulo"
}

alert(triangulo(num1, num2, num3));
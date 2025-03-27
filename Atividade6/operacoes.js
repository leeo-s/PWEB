var num1 = 10;
var num2 = 5;

function operacoes(n1, n2){
    soma = n1 + n2;
    subtracao = n1 - n2;
    produto = n1 * n2;
    divisao = n1 / n2;
    resto = n1 % n2;
}

var resultado = operacoes(num1, num2);

alert("Soma=" + soma + "\nSubtração=" + subtracao + "\nProduto=" + produto + "\nDivisão=" + divisao + "\nResto=" + resto)
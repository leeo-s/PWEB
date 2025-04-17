function calcularIMC(peso, altura) {
    return (peso / Math.pow(altura, 2));
}

let peso = parseFloat(prompt("Digite seu peso (kg)"));
let altura = parseFloat(prompt("Digite sua altura (m)"));

function exibirIMC(peso, altura) {
    let imc = calcularIMC(peso, altura);
    let classificacao = "";
    let grau = "";

    if (imc < 18.5) {
        classificacao = "Magreza";
        grau = "0";
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = "Normal";
        grau = "0";
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = "Sobrepeso";
        grau = "1";
    } else if (imc >= 30 && imc < 39.9) {
        classificacao = "Obesidade";
        grau = "2";
    } else {
        classificacao = "Obesidade Grave";
        grau = "3";
    }

    document.getElementById("resultado").innerHTML +=
        `<h5>IMC: ${imc}<br>Classificação: ${classificacao}<br>Obesidade (grau): ${grau}</h5>`;
}

exibirIMC(peso, altura);

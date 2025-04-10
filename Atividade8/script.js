class pessoa{
    constructor(idade, sexo, opiniao){
        this.idade = idade;
        this.sexo = sexo;
        this.opiniao = opiniao;
    }
}

class pessoas{
    constructor(){
        this.pessoa = [];
    }

    adicionarPessoa(pessoa){
        this.pessoa.push(pessoa);
    }
    
    mediaIdade(){
        let soma = 0;
        for(let i = 0; i < this.pessoa.length; i++){
            soma += this.pessoa[i].idade;
        }
        return soma / this.pessoa.length;
    }

    maiorIdade(){
        let idade = 0;
        for(let i = 0; i < this.pessoa.length; i++){
            if(this.pessoa[i].idade > idade){
                idade = this.pessoa[i].idade;
            }
        }
        return idade;
    }

    menorIdade(){
        let idade = 100;
        for(let i = 0; i < this.pessoa.length; i++){
            if(this.pessoa[i].idade < idade){
                idade = this.pessoa[i].idade;
            }
        }
        return idade;
    }

    qtdePessimo(){
        let soma = 0;
        for(let i = 0; i < this.pessoa.length; i++){
            if(this.pessoa[i].opiniao == 1){
                soma++;
            }
        }
        return soma;
    }

    porcentagemOtimoBom(){
        let soma = 0;
        for(let i = 0; i < this.pessoa.length; i++){
            if(this.pessoa[i].opiniao == 4 || this.pessoa[i].opiniao == 3){
                soma++;
            }
        }
        return(soma/this.pessoa.length)*100 + "%";
    }

    contagemPessoa(){
        let homem = 0;
        let mulher = 0;
        let outros = 0;

        for(let i = 0; i < this.pessoa.length; i++){
            switch (this.pessoa[i].sexo){
                case "masculino":
                    homem++;
                    break;
                
                case "feminino":
                    mulher++;
                    break;

                case "outros":
                    outros++;
                    break;
            }
        }

        return {homem, mulher, outros};
    }
}

let listaPessoas = new pessoas();

let pessoa1 = new pessoa(20, "masculino", 4);
let pessoa2 = new pessoa(27, "feminino", 1);
let pessoa3 = new pessoa(19, "feminino", 2);
let pessoa4 = new pessoa(17, "outros", 3);

listaPessoas.adicionarPessoa(pessoa1);
listaPessoas.adicionarPessoa(pessoa2);
listaPessoas.adicionarPessoa(pessoa3);
listaPessoas.adicionarPessoa(pessoa4);

document.getElementById("resultado").innerHTML += `Média de Idade: ${listaPessoas.mediaIdade()} <br>`;
document.getElementById("resultado").innerHTML += `Pessoa mais velha: ${listaPessoas.maiorIdade()} <br>`;
document.getElementById("resultado").innerHTML += `Pessoa mais nova: ${listaPessoas.menorIdade()} <br>`;
document.getElementById("resultado").innerHTML += `Quantas pessoas responderam péssimo: ${listaPessoas.qtdePessimo()} <br>`;
document.getElementById("resultado").innerHTML += `Porcentagem: ${listaPessoas.porcentagemOtimoBom()} <br>`;
document.getElementById("resultado").innerHTML += `Quantidade homens: ${listaPessoas.contagemPessoa().homem} <br>`;
document.getElementById("resultado").innerHTML += `Quantidade mulheres: ${listaPessoas.contagemPessoa().mulher} <br>`;
document.getElementById("resultado").innerHTML += `Quantidade outros: ${listaPessoas.contagemPessoa().outros} <br>`;
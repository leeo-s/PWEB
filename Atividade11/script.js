var funcionario1 = new Object();
funcionario1.matricula = "001";
funcionario1.nome = "Leonardo Silva";
funcionario1.funcao = "Programador";

var funcionario2 = {matricula: "002", nome: "Nicolas Ferro", funcao: "Analista"};

function Funcionario(matricula, nome, funcao){
    this.matricula = matricula;
    this.nome = nome;
    this.funcao = funcao;
}

var funcionario3 = new Funcionario("003", "Gabriel Belato", "Gerente");

console.log(funcionario1);
console.log(funcionario2);
console.log(funcionario3);
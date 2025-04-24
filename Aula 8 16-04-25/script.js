var aluno1 = new Object();

aluno1.ra = "003048231035";
aluno1.nome = "Leonardo Silva";

alert(`RA: ${aluno1.ra} \nNome: ${aluno1.nome}`);

aluno2 = {};
aluno2.ra = "003048231036";
aluno2["nome"] = "Nicolas Ferro";
alert("RA: " + aluno2.ra + "\nNome: " + aluno2.nome);
aluno2["email do aluno"] = "nicolasferro@fatec.com";
alert(aluno2["email do aluno"]);

var aluno3 = {
    ra: "0030482313037",
    nome: "Gabriel Belato"
}
alert("RA: " + aluno3.ra + "\nNome: " + aluno3["nome"]);

function Aluno(ra, nome){
    this.ra = ra;
    this.nome = nome;
    this.MostraDados = function () {
        return "RA: " + this.ra + "\nNome: " + this.nome;
    }
}

var aluno4 = new Aluno("0030482313038", "Mateus Bera");
alert(aluno4.MostraDados());
alert(aluno4.nome);

var aluno5 = {};
var nome_propriedade = "ra";
aluno5[nome_propriedade] = "0030482313039"
aluno5["nome"] = "Giovana Máximo";
alert("RA: " + aluno5.ra + "\nNome: " + aluno5.nome);

function Aluno2(){
    var ra;
    var nome;
    this.setRa = function(value){
        this.ra = value;
    }
    this.getRa = function(){
        return this.ra;
    }
    this.setNome = function(value){
        this.nome = value;
    }
    this.getNome = function(){
        return this.nome;
    }
}

//herança
var aluno6 = new Aluno2();
aluno6.setNome("Murilo Bertoni");
aluno6.setRa("0030482313040");
alert("RA: " + aluno6.getRa() + "\nNome: " + aluno6.getNome());

function AlunoADS(){
    var numLab;
    this.setNumLab = function(value){
        this.numLab = value;
    }
    this.getNumLab = function(){
        return this.numLab;
    }
}

//herança
AlunoADS.prototype = new Aluno2();
var aluno7 = new AlunoADS();
aluno7.setNome("Deivid Alessandro");
aluno7.setRa("0030482313041");
aluno7.setNumLab(5);
alert("RA: " + aluno7.getRa() + "\nNome: " + aluno7.getNome() + "\nLab: " + aluno7.getNumLab());

//criação de classes de verdade
const arr = [['codigo',1],['nome',"João"],['idade',23]];
const obj = Object.fromEntries(arr);
alert(obj);
alert(obj.nome);
alert(JSON.stringify(obj));

class Aluno1{
    constructor(){
        this._ra;
        this._nome;
    }
    setNome(value){
        this._nome = value;
    }
    getNome(){
        return this._nome;
    }
    setRa(value){
        this._ra = value;
    }
    getRa(){
        return this._ra;
    }
}
var objAluno = new Aluno1();
objAluno.setNome("Otavio");
objAluno.setRa("0030482313042");
alert(`"Nome: ${objAluno.getNome()}\nRA: ${objAluno.getRa()}"`);

class AlunoADS1 extends Aluno1{
    constructor(){
        super();
        this._numLab;
    }
    setNumLab(value){
        this._numLab = value;
    }
    getNumLab(){
        return this._numLab;
    }
}

var objAlunoADS = new AlunoADS1();
objAlunoADS.setNome("Luis Goulart");
objAlunoADS.setRa("0030482313043");
objAlunoADS.setNumLab(5);
alert(`"Nome: ${objAlunoADS.getNome()}\nRA: ${objAlunoADS.getRa()}\nLab: ${objAlunoADS.getNumLab()}"`);

//cópia de objetos
var obj1 = new Object();
var obj2 = obj1;
obj1.nome = "Vinicius Souza";
alert(obj2.nome);

//metodos e atributos - públicos e privados
class ContaBancaria{
    #cpf; //atributo privado

    constructor(nome, saldoInicial){
        this.nome = nome; //atributo público
        this.saldo = saldoInicial; //atributo público
    }

    setCpf(value){
        this.cpf = value;
    }
    getCpf(){
        return this.cpf;
    }
    getSaldo(){
        return this.saldo;
    }
    getNome(){
        return this.nome;
    }

    //metodo público

    depositar(valor){
        this.saldo += valor;
        this.#registrarTransacao(valor);
        //utilizando o modificador # para 
    }

    //metodo privado
    #registrarTransacao(valor){
        console.log(`"Deposito de R$${valor} realizado. Saldo de R$${this.saldo} para o cpf ${this.cpf}"`);
    }
}

//o metodo Object.create() é usado para criar um novo objeto, usando um objeto existente como o protótipo do novo objeto.
const conta = new ContaBancaria("Carlos", 1000);
conta.setCpf("39573690888");
conta.depositar(500);

const objEmpresa = {empresa: 'ZF do Brasil'};
const funcionario = Object.create(objEmpresa, {nome: {value: 'Jose Carlos'}, endereco: {value: 'Av. São Paulo'}});
console.log(funcionario.empresa);
console.log(funcionario.nome);
console.log(funcionario.endereco);

//o metodo Object.assign() é usado para copiar os valores de todas as propriedades enumeráveis de um ou mais objetos de origem para um objeto de destino. Ele retorna o objeto de destino.
const objNovaEmpresa = {empresa: 'Toyota Sorocaba'};
const objVeiculo = {placa: 'XXX 1234'};

const motorista = Object.assign({cpf: "0030482313035"}, objNovaEmpresa, objVeiculo);
console.log(motorista);
console.log(motorista.empresa);


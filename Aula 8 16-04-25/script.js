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

AlunoADS.prototype = new Aluno2();
var aluno7 = new AlunoADS();
aluno7.setNome("Deivid Alessandro");
aluno7.setRa("0030482313041");
aluno7.setNumLab(5);
alert("RA: " + aluno7.getRa() + "\nNome: " + aluno7.getNome() + "\nLab: " + aluno7.getNumLab());
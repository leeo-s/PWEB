class Conta{
    constructor(nome, correntista, banco, numConta, saldo){
        this.nome = nome;
        this.correntista = correntista;
        this.banco = banco;
        this.numConta = numConta;
        this.saldo = saldo;
    }

    getNome(){
        return this.nome;
    }
    getCorrentista(){
        return this.correntista;
    }
    getBanco(){
        return this.banco;
    }
    getNumConta(){
        return this.numConta;
    }
    getSaldo(){
        return this.saldo;
    }

    setNome(value){
        this.nome = value;
    }
    setCorrentista(value){
        this.correntista = value;
    }
    setBanco(value){
        this.banco = value;
    }
    setNumConta(value){
        this.numConta = value;
    }
    setSaldo(value){
        this.saldo = value;
    }
}

class Corrente extends Conta{
    constructor(saldoEspecial){
        super();
        this.saldoEspecial = saldoEspecial;
    }

    getSaldoEspecial(){
        return this.saldoEspecial;
    }

    setSaldoEspecial(value){
        this.saldoEspecial = value;
    }
}

class Poupanca extends Conta{
    constructor(juros, dataVencimento){
        super();
        this.juros = juros;
        this.dataVencimento = dataVencimento;
    }

    getJuros(){
        return this.juros;
    }
    getDataVencimento(){
        return this.dataVencimento;
    }

    setJuros(value){
            this.juros = value;
    }
    setDataVencimento(value){
        this.dataVencimento = value;
    }
}

function contaCorrente(){
    let nome = document.getElementById("nomeCorrente").value;
    let correntista = document.getElementById("correntistaCorrente").value;
    let banco = document.getElementById("bancoCorrente").value;
    let numConta = document.getElementById("numContaCorrente").value;
    let saldo = document.getElementById("saldoCorrente").value;
    let saldoEspecial = document.getElementById("saldoEspecialCorrente").value;

    let contaCorrente = new Corrente(saldoEspecial);
    contaCorrente.setNome(nome);
    contaCorrente.setCorrentista(correntista);
    contaCorrente.setBanco(banco);
    contaCorrente.setNumConta(numConta);
    contaCorrente.setSaldo(saldo);

    console.log(contaCorrente);

    document.getElementById("dadosCorrente").innerHTML = `
        Nome: ${contaCorrente.getNome()}<br>
        Correntista: ${contaCorrente.getCorrentista()}<br>
        Banco: ${contaCorrente.getBanco()}<br>
        Número da Conta: ${contaCorrente.getNumConta()}<br>
        Saldo: ${contaCorrente.getSaldo()}<br>
        Saldo Especial: ${contaCorrente.getSaldoEspecial()}
    `;
}

function contaPoupanca(){
    let nome = document.getElementById("nomePoupanca").value;
    let correntista = document.getElementById("correntistaPoupanca").value;
    let banco = document.getElementById("bancoPoupanca").value;
    let numConta = document.getElementById("numContaPoupanca").value;
    let saldo = document.getElementById("saldoPoupanca").value;
    let juros = document.getElementById("jurosPoupanca").value;
    let dataVencimento = document.getElementById("dataVencimentoPoupanca").value;

    let contaPoupanca = new Poupanca(juros, dataVencimento);
    contaPoupanca.setNome(nome);
    contaPoupanca.setCorrentista(correntista);
    contaPoupanca.setBanco(banco);
    contaPoupanca.setNumConta(numConta);
    contaPoupanca.setSaldo(saldo);

    console.log(contaPoupanca);

    document.getElementById("dadosPoupanca").innerHTML = `
        Nome: ${contaPoupanca.getNome()}<br>
        Correntista: ${contaPoupanca.getCorrentista()}<br>
        Banco: ${contaPoupanca.getBanco()}<br>
        Número da Conta: ${contaPoupanca.getNumConta()}<br>
        Saldo: ${contaPoupanca.getSaldo()}<br>
        Juros: ${contaPoupanca.getJuros()}<br>
        Data Vencimento: ${contaPoupanca.getDataVencimento()}
    `;
}

let btnCorrente = document.getElementById("btnCorrente");
let btnPoupanca = document.getElementById("btnPoupanca");

btnCorrente.addEventListener("click", contaCorrente);
btnPoupanca.addEventListener("click", contaPoupanca);
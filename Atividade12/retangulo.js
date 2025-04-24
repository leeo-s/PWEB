class Retangulo{
    constructor(base, altura){
        this.base = base;
        this.altura = altura;
    }

    calcArea(){
        return (`"Área: ${this.base*this.altura}"`)
    }
}

const ret = new Retangulo(5, 10);

console.log(ret.calcArea());
alert(ret.calcArea());
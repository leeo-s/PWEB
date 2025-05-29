let eventos = require('events'); //atribuição da classe EventEmitter

let EmissorEventos = eventos.EventEmitter; //variável faz referência a classe Events

let ee = new EmissorEventos(); //criando direto ficaria let ee = new eventos.EventEmitter();

//registrando um ouvinte (listener) para o evento 'dados'

ee.on('dados', function (fecha) {
  console.log(fecha);
});

//emitindo o evento apenas uma única vez
ee.emit('dados', 'primeira vez ' + Date.now());

//emitindo o evento a cada X tempo (500 milisegundos)
setInterval(function () {
  ee.emit('dados', Date.now());
}, 500);

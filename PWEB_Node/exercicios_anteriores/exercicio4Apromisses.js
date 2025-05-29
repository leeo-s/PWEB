//Função para imprimir a primeira parte
function Parte1() {
  for (var i = 1; i <= 10; i++) {
    console.log('primeira parte: ' + i);
  }
}

setTimeout(Parte1, 2000); //atrasando a chamada

const fs = require('fs').promises; //importando a versão do fs com promises
fs.readFile('file.txt', 'utf-8') //utf-8 evita o uso do .toString()
  .then(data => {
    const registros = data.split('\n');
    registros.forEach((registro, index) => {
      console.log('segunda parte: ' + registro);
    });
  })
  .catch(err => {
    console.error('Erro ao ler o arquivo: ', err);
  });

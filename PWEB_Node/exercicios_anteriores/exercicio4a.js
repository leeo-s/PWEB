function Parte1() {
  for (let i = 1; i <= 10; i++) {
    console.log('Primeira parte: ' + i);
  }
}

setTimeout(Parte1, 2000); //atrasando com o timeOut
const fs = require('fs');
fs.readFile('file.txt', (err, data) => {
  if (err) throw err;
  const registros = data.toString().split('\n');
  registros.forEach((registro, index) => {
    console.log('Segunda parte: ' + registro + ' ' + index);
  });
});

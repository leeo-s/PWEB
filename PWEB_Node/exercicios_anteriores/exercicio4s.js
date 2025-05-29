let fs = require('fs');

const data = fs.readFileSync('file.txt');
//a execução eé bloqueada aqui até o arquivo ser lido
console.log(data.toString());

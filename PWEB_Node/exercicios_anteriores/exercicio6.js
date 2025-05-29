let http = require('http');
let nome = 'Leonardo Silva';
let server = http.createServer(function (req, res) {
  res.end(`<html><body>Site da Fatec Sorocaba ${nome}</body></html>`);
});

server.listen(3128);

//localhost:3128 no navegador

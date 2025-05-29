let http = require('http');
let nome = 'Leonardo';
let server = http.createServer(function (req, res) {
  let opcao = req.url;
  if (opcao == '/historia') {
    res.end('<html><body><p>Historia da Fatec Sorocaba</p></body></html>');
  } else if (opcao == '/cursos') {
    res.end('<html><body>Cursos</body></html>');
  } else if (opcao == '/professores') {
    res.end('<html><body>Professores da Fatec</body></html>');
  } else res.end(`<html><body>Bem-vindo de volta, ${nome}!</body></html>`);
});

server.listen(3500);

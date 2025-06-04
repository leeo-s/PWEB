let nome = 'Leonardo Silva';
let string = require('./modulo1');

let app = require('./app/config/server.js'); //carregando módulo do servidor

app.listen(3000, function () {
  console.log(string);
});

app.get('/formulario_adicionar_usuario', function (req, res) {
  res.render('admin/adicionar_usuario');
});

app.get('/', function (req, res) {
  res.render('home/index');
});

app.get('/informacao/cursos', function (req, res) {
  res.render('informacao/cursos');
});

app.get('/informacao/historia', function (req, res) {
  res.render('informacao/historia');
});

app.get('/informacao/professores', function (req, res) {
  res.render('informacao/professores');
});

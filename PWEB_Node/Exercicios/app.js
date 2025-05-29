let express = require('express');
let app = express();
let nome = 'Leonardo Silva';

let string = require('./modulo1');

app.set('view engine', 'ejs');

app.listen(3000, function () {
  console.log('Servidor express carregado!');
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

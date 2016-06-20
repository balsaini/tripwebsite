const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine', 'pug');

app.listen(3001, function(){
  console.log('server is listening');
});

app.get('/calc', function(req, res) {
  console.log('i am here!!!!');
  res.render('tipcalc');
});

app.post('/calc', function(req, res) {
  console.log('reqbody', req.body);

  const x = req.body.x * 1;
  const pct = req.body.pct * .01;
  const output = x + (x * pct);

  res.render('tipcalc', {x, pct, output});
});

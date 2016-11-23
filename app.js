var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', function (req, res) {
  res.send(fs.readFileSync('./app.html', 'utf8'));
})

app.listen(3000, function () {
  console.log('Test app listening on port 3000');
})
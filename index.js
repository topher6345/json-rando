var fs = require('fs');
var express = require('express');
var dummyjson = require('dummy-json');

var template = fs.readFileSync('template.hbs', {encoding: 'utf8'});
var app = express();

app.get('/', function(req, res) {
  res.set('Content-Type', 'application/json');
  console.log(dummyjson.parse(template))
  res.send(dummyjson.parse(template));
});

app.listen(3000);
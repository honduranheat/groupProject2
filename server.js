var express = require("express");
var bodyParser = require("body-parser");
var handlebars = require('express-handlebars');

var app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

// home page
app.get('/', function(req, res) {
    res.render('index');
});

app.get('/new-post', function(req, res) {
    res.render('new');
});

app.get('/posts/:id', function(req, res) {
    res.render('post');
});

var PORT = process.env.PORT || 8080;



  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });


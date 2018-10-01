var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true })); 

var server = app.listen(2000,function(){
    console.log("We have started our server on port 2000");
});

app.get('/',function(req,res){
    res.sendfile('./views/index.html');
});


app.post('/userData',function(req,res){
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.phone);
    res.sendfile('./views/index.html');
});
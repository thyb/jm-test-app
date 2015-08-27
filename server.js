var express = require('express')


var app = express()

app.use("/",express.static(__dirname  + "/app"));

app.get('/', function(req, res){
  res.sendfile('./app/views/index.html');
})
app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/html');
    res.status(404).send('Page introuvable !');
});

app.listen(8080);
console.log("running on port 8080");

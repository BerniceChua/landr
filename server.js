//Lets require/import the HTTP module
var http = require('http');
var express = require('express');
//var router = require('./server/router.js');

var app = express();

app.use(express.static(__dirname));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//Lets define a port we want to listen to
const PORT=8080;


//Lets start our server
app.listen(process.env.PORT || PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});

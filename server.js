

var PORT = process.env.PORT || 3000;
var express =require('express');// do an npm install for express in  node command prompt
var app = express();
var http = require('http').Server(app);//tells node  to use express app to create an http server
app.use(express.static(__dirname+'/public'));
	http.listen(PORT, function()
	{
		console.log('Server started');
	});
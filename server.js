

var PORT = process.env.PORT || 3000;
var express =require('express');// do an npm install for express in  node command prompt
var app = express();
var http = require('http').Server(app);//tells node  to use express app to create an http server
var io = require('socket.io')(http);

app.use(express.static(__dirname+'/public')); //serving static files in express app e.g app.use('/static', express.static(path.join(__dirname, 'public')))

io.on('connection', function(socket){
console.log('User connected via Socket.io!');
	socket.on('disconnect',function(){
	console.log('User disconnected');
	});
});

http.listen(PORT, function()
{
	console.log('listening to *:'+PORT);
});
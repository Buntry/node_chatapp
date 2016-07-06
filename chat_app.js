var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

var path = require('path')

server.listen(8081, "104.131.8.231");

app.use(express.static(path.join(__dirname, 'public')));

/* When we go to the website, route to index.html */
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html'); 
});

io.sockets.on('connection', function(socket){
    socket.on('send message', function(data){
        io.sockets.emit('new message', data);
    });
});
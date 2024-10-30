var http = require('http'); // global

// console.log(http);

var server = http.createServer(function(req, res){
    // res.statusCode = 401;
    res.end('<h1>Hello nodeJS</h1>');
});

server.listen(3000, function(){
    console.log('Đang mở máy chủ tại: http://localhost:3000')
})
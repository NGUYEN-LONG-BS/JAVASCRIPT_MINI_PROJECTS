var express = require('express');

var app = express();

// các route

app.get('/hello', function(req, res){
    res.send("Hello nodejs app, anh nè nè");
})

app.get('', function(req, res){
    res.send("Hello register get");
})

// Nhận dữ liệu từ client gửi lên thông qua
// phương thức POST
app.post('/register', function(req, res){
    res.send("Hello register post");
})

// Nhận dữ liệu từ client gửi lên thông qua
// phương thức PUT
app.put('/update', function(req, res){
    res.send("Hello register put");
})

// Nhận dữ liệu từ client gửi lên thông qua
// phương thức delete
app.delete('/delete', function(req, res){
    res.send("Hello register delete");
})

// mở cổng server
app.listen(3000, function(){
    console.log("Ứng dụng của Long dang chạy tại địa chỉ: http//localhost:3000")
})
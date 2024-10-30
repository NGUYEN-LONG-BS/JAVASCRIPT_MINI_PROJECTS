var express = require('express');
var app = express();

const {conn, sql} = require('connect');
var{ conn, sql} = require('./connect')
// các route

// app.get('/hello', function(req, res){
//     res.send("Hello nodejs app, anh nè nè");
// })

// app.get('', function(req, res){
//     res.send("Hello register get");
// })

// app.get('', function(req, res){
//     res.send('<form method="POST" action="/register"><button>Register</button></form>');
// })

app.get('/student', async function(req, res){
    // SELECT * FROM student
    var pool = await conn;
    var sqlString = "SELECT * FROM student";
    return await pool.request().query(sqlString, function(err, data){
        console.log(err, data)
    });
    res.send('<form method="POST" action="/register"><button>Register</button></form>');
})

// Nhận dữ liệu từ client gửi lên thông qua
// phương thức POST
app.post('/register', function(req, res){
    res.send("Hello register post");
})

// Nhận dữ liệu từ client gửi lên thông qua
// phương thức PUT

// app.put('/update', function(req, res){
//     res.send("Hello register put");
// })

app.put('/update', function(req, res){
    var respomData = {
        "message":"Cập nhật dữ liệu thành công",
        "data":{"id":1,"name":"Huy Hoàng"},
        "status":true
    }
    res.send(respomData);
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
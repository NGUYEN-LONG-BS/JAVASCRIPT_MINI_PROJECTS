const { promises } = require('msnodesqlv8');
var sql = require('mssql/msnodesqlv8');
// Các thông tin kết nối CSDL
var config = {
    server: "localhost",    // Để đúng như vậy
    user: "sa",             // tài khoản sa vẫn đăng nhập sql
    password: `_!d96KjXvw'\\`,      // mật khẩu vào sql của các bạn: _!d96KjXvw'\
    // password: encodeURIComponent("_!d96KjXvw'\\"),
    database: "SQLSV",      // CSDL của các bạn đã tạo
    driver: "msnodesqlv8"   // ghi đúng như vậy
}

// const conn = new sql.ConnectionPool(config).connect().then(pool => {
//     return pool;
// });

const conn = new sql.ConnectionPool(config).connect().then(pool => {
    return pool;
});

// xuất ra dưới dạng module gồm 2 thuộc tính là conn và sql
module.exports = {
    conn: conn,
    sql: sql
}
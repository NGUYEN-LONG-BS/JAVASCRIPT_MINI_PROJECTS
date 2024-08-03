const { promises } = require('msnodesqlv8');
var sql = require('mssql/msnodesqlv8');
// Các thông tin kết nối CSDL
var config = {
    server: "localhost",
    user: "sa",
    password: "1234$",
    database: "SQLSV",
    driver: "msnodesqlv8"
}

const conn = new sql.ConnectionPool(config).connect().then(pool => {
    return pool;
});
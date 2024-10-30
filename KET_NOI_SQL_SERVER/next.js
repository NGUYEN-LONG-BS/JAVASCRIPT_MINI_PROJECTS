const sql = require("msnodesqlv8");

const connectionString = "server=KSNB3\\SQLEXPRESS;Database=TBD_2024;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
const query = "SELECT * from [TBD_2024].[dbo].[TB_MA_NCC]";

sql.query(connectionString, query, (err,rows) =>{
    console.log(rows);
});
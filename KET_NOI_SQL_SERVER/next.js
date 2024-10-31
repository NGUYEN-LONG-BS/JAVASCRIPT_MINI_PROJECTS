// https://www.youtube.com/watch?v=zvvqUsvB540
// How to connect SQL server with Nodejs
// cd path of file project
// npm init -y
// npm install msnodesqlv8 --save

const sql = require("msnodesqlv8");
const SQL_SERVER = "103.90.227.154,1433"
const SQL_Database = "LA_2024"
const SQL_UID = "sa"
const SQL_PWD = "Ta#9999"

// ConnectionString with window Authentication

// const connectionString = "server=KSNB3\\SQLEXPRESS;Database=TBD_2024;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
// const query = "SELECT * from [TBD_2024].[dbo].[TB_MA_NCC]";
// const query = "[Proc_TEST]";

// ConnectionString with SQL Authentication

// const connectionString = "Server=103.90.227.154,1433;Database=LA_2024;UID=sa;PWD=Ta#9999;Driver={SQL Server Native Client 11.0}";
const connectionString = `Server=${SQL_SERVER}` +
                        `;Database=${SQL_Database}` +
                        `;UID=${SQL_UID}` +
                        `;PWD=${SQL_PWD}` +
                        `;Driver={SQL Server Native Client 11.0}`;
const query = "SELECT * FROM [LA_2024].[dbo].[TB_COMPONENT_CATEGORIES]";

sql.query(connectionString, query, (err, rows) => {
if (err) {
    console.log("BẮT ĐẦU THÔNG TIN LỖI ==>");
    console.error("Error executing query:", err);
    console.log("<== KẾT THÚC THÔNG TIN LỖI");
} else {
    console.log('Connected!')
    console.log(rows);
}
});
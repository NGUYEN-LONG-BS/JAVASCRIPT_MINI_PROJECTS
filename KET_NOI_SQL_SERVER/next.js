// https://www.youtube.com/watch?v=zvvqUsvB540

const sql = require("msnodesqlv8");



const connectionString = "server=KSNB3\\SQLEXPRESS;Database=TBD_2024;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
const query = "SELECT * from [TBD_2024].[dbo].[TB_MA_NCC]";

// const connectionString = "server=103.90.227.154, 1433;Database=LA_2024;User Id=sa;Password=Ta#9999;Driver={SQL Server Native Client 11.0}";
// const query = "SELECT * from [LA_2024].[dbo].[TB_COMPONENT_CATEGORIES]";

sql.query(connectionString, query, (err,rows) =>{
    console.log(rows);
});




// const sql = require("msnodesqlv8");

// const connectionString = "Server=103.90.227.154,1433;Database=LA_2024;User Id=sa;Password=Ta#9999;Driver={SQL Server Native Client 11.0}";
// const query = "SELECT * FROM [LA_2024].[dbo].[TB_COMPONENT_CATEGORIES]";

// sql.query(connectionString, query, (err, rows) => {
// if (err) {
// console.error("Error executing query:", err);
// } else {
// console.log(rows);
// }
// });
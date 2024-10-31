// npm install express msnodesqlv8 cors

const express = require('express');
const sql = require('msnodesqlv8');
const cors = require('cors'); // Add this line
const app = express();
const port = 3000;

app.use(cors()); // Add this line

const connectionString = "Server=103.90.227.154,1433;Database=LA_2024;UID=sa;PWD=Ta#9999;Driver={SQL Server Native Client 11.0}";
const query = "SELECT * FROM [LA_2024].[dbo].[TB_COMPONENT_CATEGORIES]";

app.get('/data', (req, res) => {
    sql.query(connectionString, query, (err, rows) => {
        if (err) {
        console.error("Error executing query:", err);
        res.status(500).send("Error executing query");
        } else {
        res.json(rows);
        }
    });
});

app.listen(port, () => {
console.log(`Server running at http://localhost:${port}`);
});

// server.timeout = 120000; // Set timeout to 2 minutes
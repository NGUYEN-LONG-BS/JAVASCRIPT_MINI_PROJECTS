const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/save', (req, res) => {
const data = JSON.stringify(req.body, null, 2);
fs.writeFile(path.join(__dirname, 'public', 'data.json'), data, (err) => {
if (err) {
return res.status(500).send('Error saving data');
}
res.send('Data saved successfully');
});
});

app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});
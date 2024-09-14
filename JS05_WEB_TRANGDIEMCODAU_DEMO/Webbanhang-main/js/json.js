const data = {
    name: "John Doe",
    age: 30,
    city: "New York"
    };

// Use the JSON.stringify() method to convert the JavaScript object into a JSON string.
const jsonData = JSON.stringify(data);

// If you're working in a Node.js environment, you can use the fs module to write the JSON string to a file.
const fs = require('fs');

fs.writeFile('data.json', jsonData, (err) => {
if (err) {
console.error('Error writing file', err);
} else {
console.log('File has been written');
}
});

// If you're working in a browser environment, you can create a downloadable JSON file using the Blob API:

const blob = new Blob([jsonData], { type: 'application/json' });
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = 'data.json';
a.click();
URL.revokeObjectURL(url);
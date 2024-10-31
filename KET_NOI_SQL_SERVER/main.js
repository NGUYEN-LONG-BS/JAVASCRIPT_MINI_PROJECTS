document.getElementById('load-data-btn').addEventListener('click', () => {
    fetch('http://127.0.0.1:3000/data')
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(rows => {
        const tableBody = document.querySelector('#data-table tbody');
        tableBody.innerHTML = ''; // Clear existing rows
        
        rows.forEach(item => {
        const row = document.createElement('tr');
        Object.values(item).forEach(value => {
        const cell = document.createElement('td');
        cell.textContent = value;
        row.appendChild(cell);
        });
        tableBody.appendChild(row);
        });
    })
    .catch(error => {
    console.error("Error fetching data:", error);
    });
});
/* =============================================================================================================
=======================================...JS_Nav
================================================================================================================ */

function openNav() {
    document.getElementById("mySidenav").style.width = "400px";
    document.getElementById("main").style.marginLeft = "400px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }



/* =============================================================================================================
=======================================...JS_TABLE
================================================================================================================ */


  // Handle form navigation
document.getElementById('infoForm').addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === 'Tab') {
        event.preventDefault();
        const formElements = Array.from(this.elements);
        const currentIndex = formElements.indexOf(document.activeElement);
        const nextIndex = (currentIndex + 1) % formElements.length;
        formElements[nextIndex].focus();
    }
    });
    
// Handle table navigation
document.addEventListener('keydown', function(event) {
    const selectedCell = document.querySelector('.selected');
    if (!selectedCell) return;

    const table = document.getElementById('dataTable');
    const cells = Array.from(table.querySelectorAll('td[contenteditable="true"]'));
    const currentIndex = cells.indexOf(selectedCell);

    if (event.key === 'Tab') {
    event.preventDefault();
    const nextIndex = (currentIndex + 1) % cells.length;
    cells[nextIndex].focus();
    selectCell(cells[nextIndex]);
    } else if (event.key === 'Enter') {
    event.preventDefault();
    const row = selectedCell.parentNode;
    const nextRow = row.nextElementSibling;
    if (nextRow) {
    const firstCell = nextRow.cells[0];
    firstCell.focus();
    selectCell(firstCell);
    } else {
    addNewRow();
    const newRow = table.querySelector('tbody tr:last-child');
    const firstCell = newRow.cells[0];
    firstCell.focus();
    selectCell(firstCell);
    }
    } else if (event.key === 'Delete') {
    event.preventDefault();
    deleteSelectedRow();
    } else if (event.key === 'ArrowUp') {
    event.preventDefault();
    const row = selectedCell.parentNode;
    const prevRow = row.previousElementSibling;
    if (prevRow) {
    const cellAbove = prevRow.cells[selectedCell.cellIndex];
    cellAbove.focus();
    selectCell(cellAbove);
    }
    } else if (event.key === 'ArrowDown') {
    event.preventDefault();
    const row = selectedCell.parentNode;
    const nextRow = row.nextElementSibling;
    if (nextRow) {
    const cellBelow = nextRow.cells[selectedCell.cellIndex];
    cellBelow.focus();
    selectCell(cellBelow);
    }
    } else if (event.key === 'ArrowRight') {
    event.preventDefault();
    const nextCell = selectedCell.nextElementSibling;
    if (nextCell) {
    nextCell.focus();
    selectCell(nextCell);
    }
    } else if (event.key === 'ArrowLeft') {
    event.preventDefault();
    const prevCell = selectedCell.previousElementSibling;
    if (prevCell) {
    prevCell.focus();
    selectCell(prevCell);
    }
    }
    });

document.addEventListener('click', function(event) {
    if (event.target.tagName === 'TD' && event.target.hasAttribute('contenteditable')) {
        selectCell(event.target);
    }
    });

function selectCell(cell) {
    const selectedCell = document.querySelector('.selected');
    if (selectedCell) {
        selectedCell.classList.remove('selected');
    }
    cell.classList.add('selected');
    }

function addNewRow() {
    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    for (let i = 0; i < 6; i++) {
        const newCell = newRow.insertCell(i);
        newCell.contentEditable = "true";
        newCell.addEventListener('input', calculateThanhTien);
    }
    }

function deleteSelectedRow() {
    const selectedCell = document.querySelector('.selected');
    if (selectedCell) {
        const row = selectedCell.parentNode;
        row.parentNode.removeChild(row);
    } else {
        alert('Please select a row to delete.');
    }
    }

function calculateThanhTien() {
    const row = this.parentNode;
    const soLuong = parseFloat(row.cells[3].textContent.replace(/\./g, '')) || 0;
    const donGia = parseFloat(row.cells[4].textContent.replace(/\./g, '')) || 0;
    const thanhTien = soLuong * donGia;
    row.cells[5].textContent = formatNumber(thanhTien);
    }

function formatNumber(number) {
    return number.toLocaleString('vi-VN');
    }

document.querySelectorAll('td[contenteditable="true"]').forEach(cell => {
    cell.addEventListener('input', calculateThanhTien);
    });

function saveTable() {
    alert('Save functionality not implemented yet.');
    }

function importTable() {
    alert('Import functionality not implemented yet.');
    }

function printTable() {
    window.print();
    }

function listTable() {
    alert('List functionality not implemented yet.');
    }
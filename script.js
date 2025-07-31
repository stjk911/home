let currentColumns = ['G', 'H'];

function toggleColumns() {
  currentColumns = currentColumns[0] === 'G' ? ['A'] : ['G', 'H'];
  loadData();
}

function loadData() {
  const url = 'https://script.google.com/macros/s/AKfycbxQ_5iYvpNgA-EmyYs_TaPvaWIU2SUp6QSUszWzUpxGB4HQM3x5X6NT95PrpEvLKjx2/exec';

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const table = document.getElementById('data-table');
      table.innerHTML = '';

      data.forEach(row => {
        const tr = document.createElement('tr');
        currentColumns.forEach(col => {
          const td = document.createElement('td');
          td.textContent = row[col] || '';
          tr.appendChild(td);
        });
        table.appendChild(tr);
      });
    });
}

loadData();

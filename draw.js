function draw() {
  let board = document.getElementById('board');
  board.innerHTML = '';

  for (let y = 0; y < state.height; y++) {
    let row = document.createElement('tr');
    for (let x = 0; x < state.width; x++) {
      let tableCell = document.createElement('td');
      let cell = state.cells[JSON.stringify({ x, y })];
      tableCell.className = cell.obstacle ? 'cell full' : 'cell empty';
      tableCell.onclick = function() {
        cell.modifyObstacle();
        draw();
      }
      row.appendChild(tableCell);
    }
    board.appendChild(row);
  }
}

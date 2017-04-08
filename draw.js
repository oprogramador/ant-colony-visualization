function draw() {


  let board = document.getElementById('board');
  board.innerHTML = '';
  tableCellDivs = {};

  for (let y = 0; y < state.height; y++) {
    let row = document.createElement('tr');
    for (let x = 0; x < state.width; x++) {
      let tableCell = document.createElement('td');
      let cellDiv = document.createElement('div');
      tableCell.appendChild(cellDiv);
      tableCellDivs[JSON.stringify({ x, y })] = cellDiv;
      let cell = state.cells[JSON.stringify({ x, y })];
      tableCell.className = cell.obstacle ? 'cell full' : 'cell empty';
      if (!cell.obstacle) {
        let foodImg = document.createElement('img');
        foodImg.src = 'img/hamburger.png';
        foodImg.style.width = cell.food * 20;
        tableCell.appendChild(foodImg);

        let pheromonesImg = document.createElement('img');
        pheromonesImg.src = 'img/perfume.png';
        pheromonesImg.style.width = Math.min(40, cell.pheromones * 5);
        tableCell.appendChild(pheromonesImg);
      }
      tableCell.onclick = function() {
        cell.modifyObstacle();
        draw();
      }
      row.appendChild(tableCell);
    }
    board.appendChild(row);
  }

  function drawAnts() {
    state.ants.forEach((ant) => {
      let tableCell = tableCellDivs[JSON.stringify({ x: ant.x, y: ant.y })];
      let antImg = document.createElement('img');
      antImg.src = 'img/ant.png';
      antImg.className = 'ant';
      tableCell.appendChild(antImg);
    });
  }

  drawAnts();
}

function initialize() {
  var board = document.getElementById('board');
  var height = 20;
  var width = 20;

  for (let y = 0; y < height; y++) {
    var row = document.createElement('tr');
    for (let x = 0; x < width; x++) {
      var cell = document.createElement('td');
      cell.className = 'cell empty';
      state.cells[JSON.stringify({ x, y })] = {
        food: Math.random(),
        obstacle: false,
      }
      cell.onclick = function() {
        var oldObstacle = state.cells[JSON.stringify({ x, y })].obstacle;
        var newObstacle = !oldObstacle;
        state.cells[JSON.stringify({ x, y })].obstacle = newObstacle;
        this.className = newObstacle ? 'cell full' : 'cell empty';
      }
      row.appendChild(cell);
    }
    board.appendChild(row);
  }
}

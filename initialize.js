function initialize() {
  var board = document.getElementById('board');
  var height = 20;
  var width = 20;

  for (let y = 0; y < height; y++) {
    var row = document.createElement('tr');
    for (let x = 0; x < width; x++) {
      var cell = document.createElement('td');
      cell.className = 'cell';
      row.appendChild(cell);
    }
    board.appendChild(row);
  }
}

function initialize() {
  let board = document.getElementById('board');

  for (let y = 0; y < state.height; y++) {
    for (let x = 0; x < state.width; x++) {
      let cell = {
        food: Math.random(),
        obstacle: false,
        modifyObstacle: function() {
          this.obstacle = !this.obstacle;
        },
      }
      state.cells[JSON.stringify({ x, y })] = cell;
    }
  }
}

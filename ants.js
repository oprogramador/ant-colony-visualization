function ants() {
  function create() {
    state.ants.push({ x: 0, y: 0 });
  }

  function isInside(ant) {
    return ant.x >= 0 && ant.x < state.width && ant.y >= 0 && ant.y < state.height;
  }

  function isFree(ant) {
    return !state.cells[JSON.stringify({ x: ant.x, y: ant.y })].obstacle;
  }

  function isAvailable(ant) {
    return isInside(ant) && isFree(ant);
  }

  function moveAll() {
    state.ants.forEach((ant, i) => {
      let newAnt = Object.assign({}, ant);
      let direction = Math.random();
      if (direction < 0.2) {
        newAnt.x++;
      } else if (direction < 0.4) {
        newAnt.x--;
      } else if (direction < 0.6) {
        newAnt.y++;
      } else if (direction < 0.8) {
        newAnt.y--;
      }

      if (isAvailable(newAnt)) {
        state.ants[i] = newAnt;
      }
    });
  }

  function eat() {
    state.ants.forEach((ant, i) => {
      let cell = state.cells[JSON.stringify({ x: ant.x, y: ant.y })];
      cell.food = Math.max(0, cell.food - 0.1);
    });
  }

  create();
  moveAll();
  eat();
}

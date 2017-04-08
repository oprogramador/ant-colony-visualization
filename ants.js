function ants() {
  function create() {
    state.ants.push({
      x: 0,
      y: 0,
      health: 1,
    });
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

  function getLivingAnts() {
    return state.ants.filter(ant => ant.health > 0);
  }

  function moveAll() {
    getLivingAnts().forEach((ant, i) => {
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
    getLivingAnts().forEach((ant, i) => {
      let cell = state.cells[JSON.stringify({ x: ant.x, y: ant.y })];
      let oldFood = cell.food;
      cell.food = Math.max(0, cell.food - 0.1);
      let newFood = cell.food;
      ant.health += (oldFood - newFood) * 3;
    });
  }

  function putPheromones() {
    getLivingAnts().forEach((ant, i) => {
      let cell = state.cells[JSON.stringify({ x: ant.x, y: ant.y })];
      cell.pheromones += 0.1;
    });
  }

  function decreasePheromones() {
    for (let y = 0; y < state.height; y++) {
      for (let x = 0; x < state.width; x++) {
        let cell = state.cells[JSON.stringify({ x, y })];
        cell.pheromones = Math.max(0, cell.pheromones - 0.05);
      }
    }
  }

  function damageAll() {
    state.ants.forEach((ant, i) => {
      ant.health -= 0.05;
    });
  }

  create();
  moveAll();
  eat();
  putPheromones();
  decreasePheromones();
  damageAll();
}

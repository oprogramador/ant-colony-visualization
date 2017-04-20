const state = {
  cells: {},
  ants: [],
  width: 20,
  height: 20,
  parameters: {
    initial: {
      x: 0,
      y: 0,
    },
    foodEating: 0.1,
    healthFromFood: 3,
    pheromonesAtOnce: 0.1,
    pheromonesEvaporation: 0.05,
    damage: 0.05,
  },
};

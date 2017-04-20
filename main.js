let state = createBasicState();
initialize(state);
draw(state);
addListeners(state);
setInterval(() => {
  ants(state);
  draw(state);
}, 500);

function addListeners() {
  document.getElementById('initial_x').addEventListener('change', function(event) {
    state.parameters.initial.x = Number(this.value);
  });
  document.getElementById('initial_y').addEventListener('change', function(event) {
    state.parameters.initial.y = Number(this.value);
  });
}

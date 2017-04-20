function addListeners(state) {
  function bindInputWithField(input, object, field) {
    input.value = object[field];
    input.addEventListener('change', function(event) {
      object[field] = Number(this.value);
    });
  }

  bindInputWithField(document.getElementById('initial_x'), state.parameters.initial, 'x');
  bindInputWithField(document.getElementById('initial_y'), state.parameters.initial, 'y');
  bindInputWithField(document.getElementById('foodEating'), state.parameters, 'foodEating');
  bindInputWithField(document.getElementById('healthFromFood'), state.parameters, 'healthFromFood');
  bindInputWithField(document.getElementById('pheromonesAtOnce'), state.parameters, 'pheromonesAtOnce');
  bindInputWithField(document.getElementById('pheromonesEvaporation'), state.parameters, 'pheromonesEvaporation');
  bindInputWithField(document.getElementById('damage'), state.parameters, 'damage');
}

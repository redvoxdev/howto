const card = document.querySelector('.card');
const colors = ['Orange', 'Blue', 'Yellow', 'Lime', 'Fuchsia'];
const state = colorState(colors, 0);

card.addEventListener('click', debounce(action, 500));

function colorState(colors, start) {
  let index = start < 0 ? 0 : start;
  return {
    getNextColor: () => {
      index += 1;
      return colors[index % colors.length];
    }
  }
}

function action(event) {
  event.target.style.backgroundColor = state.getNextColor();
}

function debounce(func, ms) {
  let isCooldown = false;
  return function(...args) {
    if (isCooldown) return;
    func.apply(this, args);
    isCooldown = true;
    setTimeout(() => isCooldown = false, ms);
  };
}
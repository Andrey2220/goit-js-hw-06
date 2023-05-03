const counter = document.querySelector('#counter');
const valueEl = document.querySelector('#value');
let counterValue = 0;

counter.addEventListener('click', (event) => {
  if (event.target.dataset.action === 'increment') {
    counterValue += 1;
  } else if (event.target.dataset.action === 'decrement') {
    counterValue -= 1;
  }

  valueEl.textContent = counterValue;
});

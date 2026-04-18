import flags from './bandeiras.js';

const main = document.querySelector('main');

function createFlagView(flag) {
  return `
    <div class="flag col-6 col-md-3 col-lg-2 my-2 text-center">
      <img src="${flag.image}" alt="${flag.name}" 
           onerror="this.src='https://via.placeholder.com/80'">
      <p>${flag.name}</p>
    </div>
  `;
}

for (const flag of flags) {
  main.insertAdjacentHTML('beforeend', createFlagView(flag));
}

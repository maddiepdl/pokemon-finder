// form elements from HTML
const form = document.getElementById('pokemon-form');
const card = document.getElementById('pokemon-card');
const errorMessage = document.getElementById('error-message');
const spinner = document.getElementById('loading-spinner');

const nameElement = document.getElementById('pokemon-name');
const idElement = document.getElementById('pokemon-id');
const typesElement = document.getElementById('pokemon-types');
const heightElement = document.getElementById('pokemon-height');
const weightElement = document.getElementById('pokemon-weight');
const imageElement = document.getElementById('pokemon-image');

// helper function to show spinner
function showSpinner() {
  spinner.style.display = 'block';
}

// hide spinner
function hideSpinner() {
  spinner.style.display = 'none';
}

// form submission
form.addEventListener('submit', async (event) => {
  event.preventDefault(); // stop page refresh

  const input = document.getElementById('pokemon-input').value.trim().toLowerCase();

  // reset before fetch
  showSpinner();
  card.style.display = 'none';
  errorMessage.textContent = '';

  try {
    // axios + async/await to fetch data from PokéAPI
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`);
    const pokemon = response.data;

    // update with Pokémon data
    nameElement.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    idElement.textContent = `ID: ${pokemon.id}`;
    heightElement.textContent = `Height: ${pokemon.height / 10} m`;
    weightElement.textContent = `Weight: ${pokemon.weight / 10} kg`;
    imageElement.src = pokemon.sprites.other['official-artwork'].front_default;
    imageElement.alt = pokemon.name;

    // show Pokémon types
    typesElement.innerHTML = pokemon.types
      .map(typeInfo => `<span>${typeInfo.type.name}</span>`)
      .join('');

    // reveal card
    card.style.display = 'block';

    // hide spinner after success
    hideSpinner();
  } catch (error) {
    // show error message
    errorMessage.textContent = 'Pokémon not found. Please try again.';

    // card stays hidden if there is an error
    card.style.display = 'none';

    // hide spinner after error
    hideSpinner();
  }
});
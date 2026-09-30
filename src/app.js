import { destinations } from './data/destinations.js';
import { createDestinationCard } from './components/destinationCard.js';

const search = document.querySelector('#search');
const grid = document.querySelector('#destinations');
const resultCount = document.querySelector('#result-count');
const emptyMessage = document.querySelector('#empty-message');

function renderDestinations() {
  const query = search.value.trim().toLowerCase();
  const matches = destinations.filter((destination) =>
    `${destination.name} ${destination.city} ${destination.category}`
      .toLowerCase().includes(query)
  );
  grid.replaceChildren(...matches.map(createDestinationCard));
  resultCount.textContent = `${matches.length} destination${matches.length === 1 ? '' : 's'} found`;
  emptyMessage.hidden = matches.length > 0;
}

search.addEventListener('input', renderDestinations);
renderDestinations();

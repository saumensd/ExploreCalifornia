export function createDestinationCard(destination) {
  const card = document.createElement('article');
  card.className = 'card';
  const category = document.createElement('p');
  category.className = 'category';
  category.textContent = destination.category;
  const heading = document.createElement('h2');
  heading.textContent = destination.name;
  const description = document.createElement('p');
  description.textContent = destination.description;
  card.append(category, heading, description);
  return card;
}

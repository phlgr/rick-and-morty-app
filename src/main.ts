import { createCharacterCard } from './components/character/character';
import './style.css';
import { createElement } from './utils/createElement';

const mainElement = createElement('main', {
  childElements: [
    createElement('h1', { innerText: 'Rick and Morty' }),
    createElement('input', { placeholder: 'Search for a character' }),
    createElement('div', {
      className: 'characterContainer',
      childElements: [
        createCharacterCard(),
        createCharacterCard(),
        createCharacterCard(),
      ],
    }),
  ],
});

document.querySelector<HTMLDivElement>('#app')?.append(mainElement);

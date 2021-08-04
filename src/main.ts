import { createCharacterCard } from './components/character/character';
import './style.css';
import type { Character } from './types';
import { createElement } from './utils/createElement';

const character: Character = {
  name: 'Morty Smith',
  thumbnail: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  status: 'Alive',
  species: 'Human',
  origin: 'Earth (C-137)',
};

const mainElement = createElement('main', {
  childElements: [
    createElement('h1', { innerText: 'Rick and Morty' }),
    createElement('input', { placeholder: 'Search for a character' }),
    createElement('div', {
      className: 'characterContainer',
      childElements: [createCharacterCard(character)],
    }),
  ],
});

document.querySelector<HTMLDivElement>('#app')?.append(mainElement);

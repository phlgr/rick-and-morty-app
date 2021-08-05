import { createCharacterCard } from './components/character/character';
import './style.css';
import type { Character } from './types';
import { getCharacters } from './utils/api';
import { createElement } from './utils/createElement';

const characters: Character[] = await getCharacters();

const mainElement = createElement('main', {
  childElements: [
    createElement('h1', { innerText: 'Rick and Morty' }),
    createElement('input', { placeholder: 'Search for a character' }),
    createElement('div', {
      className: 'characterContainer',
      childElements: characters.map((character) =>
        createCharacterCard(character)
      ),
    }),
  ],
});

document.querySelector<HTMLDivElement>('#app')?.append(mainElement);

import { createCharacterCard } from './components/character/character';
import './style.css';
import type { Character } from './types';
import { getCharacters } from './utils/api';
import { createElement } from './utils/createElement';

const characters: Character[] = await getCharacters();

const characterContainer = createElement('div', {
  className: 'characterContainer',
  childElements: characters.map((character) => createCharacterCard(character)),
});

const searchbar = createElement('input', {
  placeholder: 'Search for a character',
  oninput: async () => {
    characterContainer.innerHTML = '';

    const search = searchbar.value;

    const filteredCharacters = await getCharacters(search);

    const filteredCharacterElements = filteredCharacters.map(
      (filteredCharacter) => createCharacterCard(filteredCharacter)
    );

    characterContainer.append(...filteredCharacterElements);
  },
});

const mainElement = createElement('main', {
  childElements: [
    createElement('h1', { innerText: 'Rick and Morty' }),
    searchbar,
    characterContainer,
  ],
});

document.querySelector<HTMLDivElement>('#app')?.append(mainElement);
